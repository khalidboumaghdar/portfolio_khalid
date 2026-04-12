# Khalid Boumaghdar — Angular Portfolio

## Quick Start

```bash
npm install
ng serve
# open http://localhost:4200
```

## Project Structure

```
src/
├── index.html              ← meta theme-color, Google Fonts
├── main.ts                 ← bootstrap
├── polyfills.ts
├── styles.css              ← GLOBAL: CSS vars, fonts, shared utilities
└── app/
    ├── app.module.ts
    ├── app.component.ts/html/css
    ├── services/
    │   └── theme.service.ts      ← dark/light toggle, localStorage
    └── components/
        ├── navbar/               ← nav, hamburger, theme toggle
        ├── hero/                 ← hero section + stat counters
        ├── about/                ← about + highlights
        ├── skills/               ← skill cards grid
        ├── skills-schema/        ← bar chart + tech map canvas + radar canvas
        ├── experience/           ← timeline
        ├── projects/             ← tabbed school/project switcher
        ├── education/            ← edu cards grid
        ├── contact/              ← form + toast notification
        └── footer/
```

## Add Your Photo

Place your photo at:
```
src/assets/images/khalid.jpg
```

It is referenced in both `hero.component.html` and `about.component.html`.

## Customise Data

All content is in the component TypeScript files as typed arrays — easy to edit:

| Component          | What to edit                     |
|--------------------|----------------------------------|
| `hero.component.ts`      | stats (Years Coding, etc.)  |
| `about.component.ts`     | highlight bullets           |
| `skills.component.ts`    | skill cards                 |
| `skills-schema.component.ts` | bar chart data, radar data, tech map nodes |
| `experience.component.ts`| work history                |
| `projects.component.ts`  | schools + projects          |
| `education.component.ts` | education items             |
| `contact.component.ts`   | contact links               |

## Dark / Light Mode

The `ThemeService` toggles `body.light` and persists to `localStorage`.  
All CSS uses `:host-context(body.light)` for component-level light overrides.  
Toggle is in the navbar.

## Build for Production

```bash
ng build --configuration production
# output in dist/portfolio/
```
