'use client';
import { useEffect, useState } from 'react';
const EMAIL = 'filip.kepka2503@gmail.com';
export default function ContactForm() {
  const [ready, setReady] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  useEffect(() => setReady(true), []);
  function sendMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name')).trim();
    const message = String(data.get('message')).trim();
    if (!name || !message) {
      setFormStatus('Uzupełnij imię i treść wiadomości.');
      return;
    }
    const body = `Cześć Filip!\n\n${message}\n\n${name}\nE-mail: ${data.get('email')}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Zapytanie o projekt — ${name}`)}&body=${encodeURIComponent(body)}`;
    setFormStatus(
      'Wiadomość jest gotowa do wysłania w Twoim programie pocztowym. Jeśli się nie otworzył, napisz bezpośrednio na adres obok.',
    );
  }
  return (
    <form className="contact-form glass" onSubmit={sendMessage}>
      <fieldset disabled={!ready}>
        <h3>Porozmawiajmy o Twoim projekcie.</h3>
        <label htmlFor="name">Jak masz na imię?</label>
        <input
          id="name"
          name="name"
          placeholder="Twoje imię"
          autoComplete="name"
          maxLength={100}
          required
        />
        <label htmlFor="email">Twój adres e-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="hello@twojafirma.pl"
          autoComplete="email"
          maxLength={200}
          required
        />
        <label htmlFor="message">Co możemy razem stworzyć?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Kilka słów o projekcie, terminie i Twoich oczekiwaniach…"
          rows={4}
          maxLength={2500}
          required
        />
        <p className="form-note" id="form-note">
          Przycisk otworzy Twój program pocztowy z gotową wiadomością. Tam możesz ją sprawdzić i
          wysłać.
        </p>
        <button type="submit" className="button button-primary" aria-describedby="form-note">
          Przygotuj wiadomość
        </button>
      </fieldset>
      <noscript>
        <p>
          Włącz JavaScript lub napisz bezpośrednio na{' '}
          <a href="mailto:filip.kepka2503@gmail.com">filip.kepka2503@gmail.com</a>.
        </p>
      </noscript>
      <p className="form-status" role="status" aria-live="polite">
        {formStatus}
      </p>
    </form>
  );
}
