'use client';
import { useEffect, useId, useRef, useState } from 'react';
export default function ServiceCard({ service, icon }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const timer = useRef(null);
  const card = useRef(null);
  const toggle = useRef(null);
  const suppressed = useRef(false);
  const detailsId = useId();
  const visible = hovered || pinned;
  useEffect(() => () => clearTimeout(timer.current), []);
  function change(open) {
    clearTimeout(timer.current);
    if (!open) {
      toggle.current?.focus({ preventScroll: true });
      suppressed.current = true;
      setHovered(false);
    }
    setPinned(open);
  }
  return (
    <article
      ref={card}
      className="service-card glass"
      aria-label={`${service.title} — ${service.price}`}
      data-details-visible={visible}
      onPointerEnter={(event) => {
        if (
          event.pointerType !== 'mouse' ||
          !window.matchMedia('(hover: hover)').matches ||
          suppressed.current
        )
          return;
        if (
          card.current.contains(document.activeElement) &&
          document.activeElement !== toggle.current
        )
          return;
        timer.current = setTimeout(() => {
          if (!card.current.querySelector('.service-card__front').contains(document.activeElement))
            setHovered(true);
        }, 150);
      }}
      onPointerLeave={() => {
        clearTimeout(timer.current);
        suppressed.current = false;
        setHovered(false);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPinned(false);
      }}
      onClick={(event) => {
        if (window.matchMedia('(hover: none)').matches && !event.target.closest('a,button'))
          change(!visible);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          change(false);
        }
      }}
    >
      {/* Przód pozostaje w układzie i wyznacza stałą wysokość obu warstw. */}
      <div className="service-card__front" aria-hidden={visible} inert={visible ? true : undefined}>
        <div className="service-card-top">{icon}</div>
        <h3>{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <div className="service-price">
          {service.price.replace(' zł', '')} <span>zł</span>
        </div>
        <ul>
          {service.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <a className="service-cta" href="#kontakt" tabIndex={visible ? -1 : 0}>
          Zapytaj o projekt
        </a>
      </div>

      <div
        id={detailsId}
        onFocusCapture={() => setPinned(true)}
        className="service-card__back"
        aria-hidden={!visible}
        inert={!visible ? true : undefined}
      >
        <div className="service-card__back-heading">
          <h3>{service.title}</h3>
          <span>{service.price}</span>
        </div>
        <div
          className="service-card__scroll"
          tabIndex={visible ? 0 : -1}
          role="region"
          aria-label={`Szczegóły usługi: ${service.title}`}
        >
          <h4>Co dostajesz</h4>
          <ul>
            {service.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h4 className="service-card__scope">{service.scopeTitle}</h4>
          <ul>
            {service.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="service-card__back-footer">
          <p>{service.time}</p>
          <a className="service-cta" href="#kontakt" tabIndex={visible ? 0 : -1}>
            Zapytaj o projekt
          </a>
        </div>
      </div>

      <button
        ref={toggle}
        type="button"
        className="service-card__toggle"
        aria-expanded={visible}
        aria-controls={detailsId}
        onClick={() => change(!visible)}
      >
        {visible ? 'Zamknij szczegóły' : 'Szczegóły'}
        <span className="sr-only"> — {service.title}</span>
      </button>
    </article>
  );
}
