'use client';

import { useEffect, useRef, useState } from 'react';
import mockups from '../mockups.json';
import './brand-mockups.css';

export default function BrandMockups() {
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(null);
  const track = useRef(null);
  const dialog = useRef(null);
  const trigger = useRef(null);

  // Native dialog traps focus; restore the exact opener on close.
  useEffect(() => {
    if (opened === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [opened !== null]);

  function move(step) {
    setOpened(current => (current + step + mockups.length) % mockups.length);
  }
  function goTo(index) {
    const container = track.current;
    const item = container.children[index];
    const left = container.scrollLeft + item.getBoundingClientRect().left - container.getBoundingClientRect().left;
    container.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  function syncIndicator() {
    const container = track.current;
    const left = container.getBoundingClientRect().left;
    const distances = mockups.map((_, index) => Math.abs(container.children[index].getBoundingClientRect().left - left));
    setActive(distances.indexOf(Math.min(...distances)));
  }

  return <div className="brand-mockups" role="region" aria-label="Mockupy identyfikacji FK">
    <div className="brand-mockups__track" ref={track} onScroll={syncIndicator}>
      {mockups.map((item, index) => <figure className="brand-mockups__item" key={item.src}>
        <button type="button" className="brand-mockups__image" aria-label={`Powiększ: ${item.label.toLowerCase()}`} onClick={event => { trigger.current = event.currentTarget; setOpened(index); }}>
          <img src={item.src} srcSet={item.srcSet} sizes="(max-width: 899px) 85vw, (max-width: 1199px) 45vw, 24vw" width={item.width} height={item.height} alt={item.alt} loading="lazy" decoding="async" style={index === 0 ? { objectPosition: 'top' } : undefined} />
        </button>
        <figcaption>{item.label}</figcaption>
      </figure>)}
    </div>
    <div className="brand-mockups__dots" aria-label="Wybierz mockup">
      {mockups.map((item, index) => <button type="button" key={item.src} aria-label={`Pokaż: ${item.label.toLowerCase()}`} aria-current={index === active ? 'true' : undefined} onClick={() => goTo(index)}><span /></button>)}
    </div>
    <dialog className="brand-mockups__lightbox" ref={dialog} aria-label="Powiększone mockupy identyfikacji FK" onClose={() => { setOpened(null); trigger.current?.focus({ preventScroll: true }); }} onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }} onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
    }}>
      {opened !== null && <div className="brand-mockups__viewer">
        <button type="button" className="brand-mockups__close" autoFocus aria-label="Zamknij powiększenie" onClick={() => dialog.current.close()}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
        <img key={mockups[opened].src} src={mockups[opened].src} width={mockups[opened].width} height={mockups[opened].height} alt={mockups[opened].alt} loading="lazy" decoding="async" />
        <div className="brand-mockups__viewer-bar">
          <button type="button" aria-label="Poprzedni mockup" onClick={() => move(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg></button>
          <p aria-live="polite" aria-atomic="true">{mockups[opened].label} <span>{opened + 1} / 4</span></p>
          <button type="button" aria-label="Następny mockup" onClick={() => move(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg></button>
        </div>
      </div>}
    </dialog>
  </div>;
}
