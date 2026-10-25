# श्री रामस्वरूप बरोड़ — Netlify-ready website

Responsive React + Vite site for Kikar Wali Johri, Tehsil Suratgarh. This package includes the light sky-blue UI, candidate portrait, eight optimized gallery images, local-priorities page, contact actions, suggestion form with optional photo, and an approved public-messages board.

## Features and behavior

- All in-page navigation uses buttons with page actions.
- Candidate phone uses `tel:` and team WhatsApp opens `wa.me`.
- Share uses the device share sheet when available, otherwise copies the site URL when clipboard access is available.
- Gallery photos open in a lightbox and can be closed by tapping outside or using the close button.
- Suggestions accept a text message plus an optional JPG, PNG, or WebP image up to 2 MB.
- Suggestions are stored with `status = 'pending'`; only approved messages are displayed in the public board.
- Message loading errors now have a visible error state and retry button.

## Before public launch: enable Supabase

The form and uploads cannot work online until these setup steps are complete.

1. Create or open a Supabase project.
2. In the Supabase SQL Editor, review and run `supabase/schema.sql`. It creates/updates `public.public_messages`, RLS policies and the `suggestion-photos` storage bucket with image restrictions.
3. Get the Project URL and the **anon/public** key from Supabase Project Settings → API.
4. For local builds, copy `.env.example` to `.env` and fill these values:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

5. Test a text suggestion and a photo suggestion. Confirm both are inserted with `pending` status and the uploaded image URL is recorded.
6. Review each new message and its photo before approving. Use the instructions in `supabase/moderation.sql` in the Supabase SQL Editor. The public board shows approved messages only.

**Security:** The anon/public key is designed for browser use; do not add a Supabase `service_role` key anywhere in this frontend. Because the image bucket is public, don't upload private/sensitive photos. Review consent before publishing identifiable people. For a high-traffic public launch, add CAPTCHA/server-side rate limiting and a proper authenticated moderation workflow.

## Deploy on Netlify (recommended: Git-connected build)

This project includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: 22

1. Push this project folder to a private/public GitHub repository.
2. In Netlify, choose **Add new project → Import an existing project** and connect that repository.
3. Before building, in Netlify Site configuration → Environment variables, add:
   - `VITE_SUPABASE_URL` = your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon/public key
4. Deploy. Netlify will run `npm run build` and publish `dist`.
5. If environment variables are added or changed after the first deployment, trigger a new deploy; Vite embeds these public values at build time.

Netlify does not automatically read a local `.env` file during a hosted build; put build variables in Netlify's environment-variable settings. Do not commit `.env` to Git.

## Deploy from Termux using Netlify CLI

After downloading/extracting the ZIP and configuring `.env`:

```bash
pkg install nodejs-lts git -y
npm install
npm run build
npm install -g netlify-cli
netlify login
netlify deploy --dir=dist
```

The first `netlify deploy` creates a draft/preview deployment URL. After checking it:

```bash
netlify deploy --dir=dist --prod
```

If the CLI asks to create or link a site, follow its prompts. The `dist` directory must already be built: a manual `netlify deploy --dir=dist` uploads the built files and does not run `npm run build` for you.

## Local run and production test

```bash
npm install
cp .env.example .env
# Fill .env with the Supabase Project URL and anon/public key.
npm run build
npm run preview
```

Open the printed preview URL, normally `http://localhost:4173`.

## Source validation notes

The project is prepared for Netlify and includes retry/error handling for the public-message query. A production deploy has not been performed from this environment because no authorized Netlify account/site is connected. The live form/photo-upload path also requires a real Supabase project, its URL/anon key, and execution of `supabase/schema.sql`.
