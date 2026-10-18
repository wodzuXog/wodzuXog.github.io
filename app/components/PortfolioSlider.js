'use client';

import { useEffect, useRef, useState } from 'react';
import ResponsiveImage from './ResponsiveImage';

function Chevron({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'm14 6-6 6 6 6' : 'm10 6 6 6-6 6'} />
    </svg>
  );
}

export default function PortfolioSlider({ slides: sourceSlides, label }) {
  const [mobile, setMobile] = useState(false);
  const projects = sourceSlides.flatMap((item) => item.items || [item]);
  const clients = [
    ...new Map(projects.filter((item) => item.url).map((item) => [item.url, item])).values(),
  ];
  const slides = mobile
    ? projects.map((item) => ({
        ...item,
        src: item.mobileSrc || item.src,
        alt: item.mobileAlt || item.alt,
        theme: item.mobileTheme || item.theme || 'portrait',
      }))
    : sourceSlides;
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const root = useRef(null);
  const slide = slides[index % slides.length];

  useEffect(() => {
    const query = window.matchMedia('(max-width: 800px)');
    const update = () => {
      setMobile(query.matches);
      setIndex(0);
    };
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      if (query.matches) setPaused(true);
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    query.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(root.current);
    return () => {
      observer.disconnect();
      query.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  // Licznik rusza od nowa po ręcznym wyborze, powrocie do zakładki lub zakończeniu interakcji.
  useEffect(() => {
    if (paused || slides.length < 2 || interacting || focused || !inView || !pageVisible) return;
    const timer = setTimeout(() => setIndex((current) => (current + 1) % slides.length), 5000);
    return () => clearTimeout(timer);
  }, [paused, index, slides.length, interacting, focused, inView, pageVisible]);

  function navigate(step) {
    setIndex((current) => (current + step + slides.length) % slides.length);
  }

  return (
    <div
      ref={root}
      className="portfolio-slider"
      role="region"
      aria-roledescription="karuzela"
      aria-label={label}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setInteracting(true);
      }}
      onPointerLeave={() => setInteracting(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div
        className={`portfolio-slider__stage${sourceSlides.some((item) => item.items) ? ' portfolio-slider__stage--mixed' : ''}`}
      >
        {slides.map((item, position) => (
          <div
            key={item.src}
            className={`portfolio-slide portfolio-slide--${item.theme}${position === index ? ' is-active' : ''}`}
            aria-hidden={position !== index}
          >
            {/* ViewBox omija pusty margines pliku, zachowując oryginalne proporcje znaku. */}
            {item.items ? (
              item.items.map((project) => (
                <figure className="portfolio-pair__item" key={project.src}>
                  <ResponsiveImage
                    src={project.src}
                    alt={project.alt}
                    sizes="(max-width: 800px) 90vw, 30vw"
                  />
                  <figcaption>{project.title}</figcaption>
                </figure>
              ))
            ) : item.viewBox ? (
              <svg
                className="portfolio-slide__logo"
                viewBox={item.viewBox}
                role="img"
                aria-label={item.alt}
                preserveAspectRatio="xMidYMid meet"
              >
                <image href={item.src} width="1000" height="1000" />
              </svg>
            ) : (
              <ResponsiveImage
                src={item.src}
                mobileSrc={item.mobileSrc}
                alt={item.alt}
                sizes="(max-width: 800px) 90vw, 55vw"
              />
            )}
          </div>
        ))}
      </div>
      <div className="portfolio-slider__toolbar">
        <span className="portfolio-slider__count" aria-hidden="true">
          {index + 1} / {slides.length}
        </span>
        {slides.length > 1 && (
          <div className="portfolio-slider__controls">
            <button
              type="button"
              className="portfolio-pause"
              aria-label={`${paused ? 'Wznów pokaz' : 'Zatrzymaj pokaz'} — ${label}`}
              title={paused ? 'Wznów pokaz' : 'Zatrzymaj pokaz'}
              onClick={() => setPaused((value) => !value)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                {paused ? <path d="m5 3 7 5-7 5Z" /> : <path d="M5 3v10M11 3v10" />}
              </svg>
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label={`Poprzedni projekt — ${label}`}
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => navigate(1)}
              aria-label={`Następny projekt — ${label}`}
            >
              <Chevron direction="right" />
            </button>
          </div>
        )}
      </div>
      <div
        className="project-caption"
        aria-live={focused || interacting ? 'polite' : 'off'}
        aria-atomic="true"
      >
        <div className={slide.items ? 'portfolio-caption-pair' : undefined}>
          {(slide.items || [slide]).map((project) => (
            <div key={project.src}>
              <h3>{project.title}</h3>
              {project.description?.trim() && <p>{project.description}</p>}
            </div>
          ))}
        </div>
      </div>
      <nav className="portfolio-clients" aria-label={`Strony klientów — ${label}`}>
        {clients.map((client) => (
          <a
            key={client.url}
            className="portfolio-client-link"
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {client.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
