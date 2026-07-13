# AtiWindykacja — strona produktowa

Landing produktu **AtiWindykacja** — automatyczna windykacja należności dla systemów InsERT
(Subiekt GT / nexo, Navireo, Rewizor). Zbudowana w [Astro](https://astro.build/).
Wygląd oparty o projekt graficzny **„AtiWindykacja Landing Bold”**.

Strona jest celowo lekka: brak frameworków JS, style i skrypty (kalkulator ROI, akordeon FAQ)
są inline w jednym pliku HTML. Jedyna zależność to Astro.

## Uruchomienie lokalne

```sh
npm install
npm run dev      # http://localhost:4321/atiwindykacja
npm run build    # produkcja → ./dist
npm run preview  # podgląd builda
```

## Publikacja (CI/CD)

Każdy push na `master` uruchamia `.github/workflows/pages.yml`:
buduje Astro i publikuje `dist` na GitHub Pages.

- Adres: https://atisoftbb.github.io/atiwindykacja/
- `base` w `astro.config.mjs` = `/atiwindykacja` (project page).
  Po podpięciu domeny **atiwindykacja.pl**: zmień `base` na `/`, dodaj `public/CNAME`
  z treścią `atiwindykacja.pl` i wskaż DNS na GitHub Pages.

## Struktura

- `src/pages/index.astro` — wstrzykuje treść landingu.
- `src/layouts/Layout.astro` — `<head>`, style/tokeny, SEO/OG, JS (kalkulator ROI, akordeon FAQ).
- `src/body.html` — markup landingu (inline-style, wierny projektowi Bold).
- `src/_atomics.css` — klasy pomocnicze.
- `public/` — favicony, `og.png`, `AtiWindykacja-instrukcja.pdf`.
