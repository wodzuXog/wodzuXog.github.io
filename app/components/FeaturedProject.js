'use client';

import { useEffect, useRef, useState } from 'react';
import menu from '../featured-menu.json';
import './featured-project.css';

export default function FeaturedProject() {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function close() { dialog.current.close(); }
  function reset() {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }

  return <>
    <div className="featured-project">
      <img className="featured-project__photo" src="/assets/featured/whitebull-1600.webp" srcSet="/assets/featured/whitebull-480.webp 480w, /assets/featured/whitebull-800.webp 800w, /assets/featured/whitebull-1600.webp 1600w" sizes="(max-width: 800px) 100vw, 50vw" alt="Karta menu Whitebull Steak House zaprojektowana przez Filipa Kępkę" width="4284" height="5712" fetchPriority="high" decoding="async" />
      <div className="featured-project__shade" aria-hidden="true" />
      <div className="featured-project__caption">
        <div><p>WYRÓŻNIONY PROJEKT</p><h3>Whitebull Steak House</h3></div>
        <button ref={trigger} type="button" className="featured-project__more" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-label="Zobacz więcej — menu Whitebull Steak House">Zobacz więcej</button>
      </div>
    </div>
    <dialog ref={dialog} className="featured-menu" aria-labelledby="featured-menu-title" onClose={reset} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      {open && <div className="featured-menu__content">
        <header className="featured-menu__header">
          <div><p>PEŁNE MENU</p><h2 id="featured-menu-title">Whitebull Steak House</h2></div>
          <button type="button" autoFocus className="featured-menu__close" onClick={close} aria-label="Zamknij menu Whitebull"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
        </header>
        <div className="featured-menu__pages">
          {menu.map((page, index) => <figure key={page.src}>
            <div className="featured-menu__viewport">
              <img className="featured-menu__page" src={page.fullSrc || page.src} width={page.width} height={page.height} alt={page.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
            </div>
            <figcaption>Strona {index + 1} / {menu.length}</figcaption>
          </figure>)}
        </div>
      </div>}
    </dialog>
  </>;
}
