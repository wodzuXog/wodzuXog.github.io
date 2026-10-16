# Portfolio — Filip Kępka

Portfolio projektanta graficznego: identyfikacja wizualna, projekty do druku i strony internetowe. Projekt wykorzystuje Next.js, React i CSS oraz eksportuje statyczną stronę do katalogu `out/`.

Strona: https://filipkepka.pl/

## Uruchomienie lokalne

Wymagane: Node.js 22 i pnpm 11.19.0 (wersja z `package.json`).

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```

GitHub Actions buduje i publikuje katalog `out/` na GitHub Pages po pushu do gałęzi `main`. W ustawieniach repozytorium, w sekcji Pages, źródłem publikacji powinno być GitHub Actions.
