# Epoxy Floor Frontend

This project is now a standard Vite + React frontend that can be deployed on Vercel or any similar static hosting platform.

## Local development

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview the production build locally: `npm run preview`

## Deployment

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

The included [`vercel.json`](./vercel.json) rewrites all routes to `index.html`, which is needed for React Router client-side navigation.

### Other static hosts

Any platform that serves the generated `dist` folder will work. If the host does not automatically support SPA routing, add a fallback rewrite to `index.html`.

## Environment variables

This frontend no longer requires Base44 environment variables to run.

If you add your own backend later, prefer standard Vite variables such as:

```bash
VITE_API_BASE_URL=https://api.example.com
```

For the quote form on Vercel, add these server-side environment variables:

```bash
RESEND_API_KEY=re_xxxxxxxxx
QUOTE_FROM_EMAIL="Website Quotes <quotes@yourdomain.com>"
QUOTE_TO_EMAIL=epoxy_fl@abv.bg
```

`QUOTE_FROM_EMAIL` should use an address from a domain you have verified in Resend.

## Notes

- The contact form now submits to the Vercel function at `/api/quote`.
- Some page images are still loaded from external URLs. If you want the site to be fully self-contained, move those assets into the project and serve them from `public/`.
