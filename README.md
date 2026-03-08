
# zenpass-site

Marketing site for [zenpass](https://github.com/wer-zen/zenpass) — a terminal password manager written in Rust.

Built with Astro, Tailwind CSS, and Motion One.

**Live site:** https://wer-zen.github.io/zenpass-site

---

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Motion One](https://motion.dev) — scroll-triggered animations and entrance sequences

## Getting started

```bash
git clone https://github.com/wer-zen/zenpass-site
cd zenpass-site
npm install
npm run dev
```

Open `http://localhost:4321`.

## Project structure

```
src/
├── layouts/
│   └── Base.astro       # HTML shell, fonts, grain overlay
├── components/
│   └── Terminal.astro   # Animated terminal demo
└── pages/
    └── index.astro      # Landing page (hero, features, security, install)
```

## Building

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

Push to GitHub and connect the repo at netlify.com. Set:
- Build command: `astro build`
- Publish directory: `dist`

## Custom fonts

Drop `.ttf` files into `public/fonts/` and add a `@font-face` rule in `src/layouts/Base.astro`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont.ttf') format('truetype');
  font-display: swap;
}
```

## License

MIT
