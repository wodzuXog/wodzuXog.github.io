'use client';
import {useEffect,useRef,useState} from 'react';
export default function Header({logo}) {
 const [menuOpen,setMenuOpen]=useState(false); const menuButton=useRef(null);
 useEffect(()=>{const escape=e=>{if(e.key==='Escape'&&menuOpen){setMenuOpen(false);menuButton.current?.focus();}};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape);},[menuOpen]);
 return (<header className="navbar">
      <a className="brand" href="#start" aria-label="Filip Kępka — początek strony">{logo}<span>FILIP KĘPKA<span>PROJEKTANT GRAFICZNY</span></span></a>
      <button className="menu-toggle" ref={menuButton} aria-expanded={menuOpen} aria-controls="navigation" aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Nawigacja główna">
        {[
          ['Portfolio', '#portfolio'],
          ['Oferta', '#oferta'],
          ['Proces', '#proces'],
          ['O mnie', '#o-mnie'],
          ['Opinie', '#opinie'],
        ].map(([label, link]) => <a key={link} href={link} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#kontakt" onClick={() => setMenuOpen(false)}>Porozmawiajmy</a>
      </nav>
    </header>);
}
