# Portfolio — Filip Kępka

Osobny projekt: `C:/Users/Filip/Documents/Portfolio Filip Kepka`.
Next.js 15.5.27, React 19.3.0, własny CSS i statyczny eksport. Node 22–24, pnpm 11.19.0.

## Uruchomienie
`pnpm install --frozen-lockfile`, potem `pnpm dev`.
Produkcja: `pnpm build`. Podgląd gotowego eksportu: `pnpm preview` (http://127.0.0.1:3000). Hosting otrzymuje wyłącznie katalog `out/`.

## Edycja
- `app/page.js`: treści, opinie, kontakt i sekcje. Strona jest statycznym komponentem serwerowym.
- `app/services.js`: ceny i zakresy; `ServiceCard.js`: hover, przycisk szczegółów i Escape. Przycisk działa klawiaturą i dotykiem. Ukryta warstwa jest inert.
- `app/portfolio.js`: zdjęcia, podpisy, stałe linki klientów i pionowy obraz InoBank na telefonach.
- `PortfolioSlider.js`: zmiana co 5 sekund, strzałki i mały szklany przycisk pauzy. Pauza trwa do świadomego wznowienia. Hover/fokus, ukryta karta i galeria wstrzymują licznik. Preferencja ograniczonego ruchu uruchamia stronę z pauzą; pokaz można włączyć ręcznie.
- `app/featured-menu.json`: 18 plansz pełnego menu White Bull; `app/menu-gallery.json`: zgodny zestaw danych starszej galerii. Przycisk „Zobacz więcej” otwiera pełne menu; Escape zamyka i oddaje fokus. Strony 14 i 15 wraz z wariantami obrazów przeniesiono do `archive/white-bull/`.
- `app/image-sizes.json` i `public/assets/responsive/`: warianty zdjęć dla różnych ekranów; oryginalne pliki pozostają w `public/assets/portfolio/`. Po podmianie obrazu usuń nieaktualny wpis manifestu lub wygeneruj jego warianty ponownie.
- `app/layout.js`: lokalnie serwowany Manrope przez next/font, canonical, Open Graph, Twitter i JSON-LD. `public/robots.txt` oraz `sitemap.xml` używają właściwego adresu.
- Formularz otwiera program pocztowy przez mailto, nie wysyła sam. Bez JavaScriptu pola są zablokowane; dostępny jest bezpośredni adres e-mail.
- Hero i sekcja autora zawierają celowe kompozycje FK. Nie ma widocznych komunikatów o brakujących materiałach.
- Starsze, nieużywane materiały zachowano w `archive/assets/`; nie trafiają na hosting.

## Publikacja
Witryna: https://filip-grafika-portfolio.olusiaog.chatgpt.site/
Zachowaj identyfikator w `.openai/hosting.json` i obecny prywatny dostęp. Publikuj przez Sites. Nie dodawaj tu projektów z innych rozmów.
