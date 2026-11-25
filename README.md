# Shlok Khandelwal — Portfolio

Personal portfolio site built with React (Create React App) and Sass.

## Run it

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in ./build
npm test         # smoke test
```

## Where things live

- `src/portfolio.js` — all page content (intro, skills, companies, experience, education, contact). Edit this to update the site.
- `src/containers/` — one folder per page section, rendered in order by `src/containers/Main.js`.
- `src/components/` — shared building blocks (header, cards, buttons, theme toggle).
- `src/assets/` — images, company logos, Lottie animations and fonts.
- `src/containers/greeting/resume.pdf` — the file behind the "Download my resume" button.
- `src/_globalColor.scss` — site-wide colors.

Based on the [developerFolio](https://github.com/saadpasta/developerFolio) template (GPL-3.0).
