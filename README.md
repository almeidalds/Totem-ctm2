# Totem CTM2

Totem CTM2 is a touch-friendly kiosk for browsing missionary missions, mission presidents, and destination information in Portuguese, English, and Spanish.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The home page leads to the transition video and then to the interactive map.

## Production build

```bash
npm run build
npm run preview
```

The build includes all three pages:

- `/` — welcome screen
- `/transition.html` — transition video
- `/src/pages/index.html` — interactive world map

Deploy the contents of `dist/` to a static web server. Mission JSON is bundled by Vite; videos, the logo, and the home-screen stylesheet are served from `public/`. President photos, flags, and the web font are hosted externally and need an internet connection.

## Main features

- Browse missions by selecting a country on the map or searching all missions.
- View president profiles and destination details when available.
- Change the interface language; the selection is remembered between pages.
- Navigate the map and mission dialogs with touch, mouse, or keyboard.

## Project structure

- `index.html`, `transition.html` — welcome and transition screens
- `src/pages/index.html` — map screen and mission dialogs
- `src/js/leitura.js` — map, mission search, profiles, and language behavior
- `src/js/data.json`, `src/js/data-pt.json`, `src/js/data-es.json` — mission data by language
- `style.css`, `mapa-mundi-cores-gerado.css` — map styling and country colors
- `public/css/style.css`, `public/images/`, `public/videos/` — welcome/transition styling and local media
- `vite.config.js` — multi-page production build configuration
