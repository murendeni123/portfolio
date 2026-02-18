# Murendeni Kwinda — Portfolio (React)

A modern single-page portfolio built with **Vite + React + Tailwind CSS + Framer Motion**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Config | `src/config/profile.json` |
| Optional server | Node.js + Express + Nodemailer |

## Project Structure

```
portfolio-react/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── config/
│   │   └── profile.json        ← All content/data lives here
│   ├── hooks/
│   │   └── useTheme.js
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── Footer.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   └── RevealSection.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Education.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
└── server/                     ← Optional Node/Express backend
    ├── index.js
    ├── package.json
    └── .env.example
```

## Getting Started

### 1. Install dependencies

```bash
cd portfolio-react
npm install
```

### 2. Add your profile image

Copy your profile image to:
```
public/images/profile.JPG
```

Copy your DMS project images to:
```
public/images/projects/dms/cover.jpg
public/images/projects/dms/1.jpg  (up to 5.jpg)
```

> All images have fallbacks — the site works without them.

### 3. Update your content

Edit `src/config/profile.json` to update any text, links, or contact details.

To enable the DMS live link button, set:
```json
"dmsLiveLink": "https://your-live-app-url.com"
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 5. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Deployment

### Netlify (recommended)

1. Push the `portfolio-react` folder to a GitHub repo.
2. Connect the repo to [Netlify](https://netlify.com).
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy.

### Vercel

1. Push to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Vercel auto-detects Vite — no extra config needed.
4. Deploy.

### Manual (any static host)

```bash
npm run build
# Upload the contents of dist/ to your host
```

---

## Optional: Contact Form Backend

The `/server` folder contains a Node.js + Express server with a `/api/contact` endpoint that sends emails via SMTP (e.g. Gmail App Password).

### Setup

```bash
cd server
npm install
cp .env.example .env
# Fill in your SMTP credentials in .env
npm run dev
```

### Environment variables

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 3001) |
| `SMTP_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (e.g. `587`) |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (not your login password) |
| `CONTACT_TO` | Where to receive messages |
| `FRONTEND_URL` | Frontend origin for CORS |

> For Gmail: enable 2FA and generate an [App Password](https://myaccount.google.com/apppasswords).

### Deploy the server

Deploy to [Render](https://render.com) (free tier):
1. Create a new **Web Service** pointing to the `server/` folder.
2. Set environment variables in the Render dashboard.
3. Update `FRONTEND_URL` to your deployed frontend URL.

---

## Customisation

- **Content:** Edit `src/config/profile.json`
- **Colors:** Edit `tailwind.config.js` → `theme.extend.colors`
- **Animations:** Edit `tailwind.config.js` → `keyframes` / `animation`
- **Sections:** Each section is a standalone component in `src/sections/`
- **Theme:** Dark/light toggle persists in `localStorage` (key: `theme`)
