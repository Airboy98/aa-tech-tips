# AA Tech Tips

IT support/services website for a small tech business oriented for an older demographic who may be visually impaired and not tech-savvy. React SPA deployed on Vercel with many APIs integrated.

## Claude Instructions

- Act as a senior engineer — write efficient, clean code with no unnecessary comments or abstractions
- Keep changes minimal and scoped to what's asked

## Stack

- **Frontend**: React 18 (Create React App), React Router v6
- **Styling**: Plain CSS — one global `src/styles.css` plus per-page/component CSS files
- **Backend (dev)**: `server.js` — Express, CommonJS (`require`/`module.exports`), runs on port 3001
- **Backend (prod)**: `api/chat.js` and other `api/*.js` — Vercel serverless functions, ES modules (`import`/`export default`)
- **Database**: MongoDB Atlas via Mongoose v8 (`api/_db.js`)
- **Real-time**: Pusher Channels (server: `pusher` package, client: `pusher-js`)
- **Payments**: Stripe
- **AI**: Anthropic SDK (Tech Byte AI answer feature)

## API Integrations

| API                    | Used For                                                  | Where                                                             |
| ---------------------- | --------------------------------------------------------- | ----------------------------------------------------------------- |
| Anthropic              | AI answers on Tech Byte page                              | `api/tech-byte-answer.js`                                         |
| Stripe                 | Payment intents for AI answers                            | `api/create-payment-intent.js`, `api/create-tech-byte-session.js` |
| Pusher                 | Real-time chat on Tech Byte page                          | `api/chat.js`, `src/components/ChatBox.js`, `src/pages/Admin.js`  |
| MongoDB Atlas          | Chat message persistence                                  | `api/_db.js`, `api/chat.js`                                       |
| IGDB (via Twitch auth) | Game search, new releases, upcoming, developer lookup     | `api/igdb-*.js`, `api/_igdbFetch.js`                              |
| Genius                 | Lyrics search                                             | `api/genius.js`, `api/lyrics.js`                                  |
| Spotify                | Song, album, artist, audiobook, podcast search            | `src/components/*Search.js` (client-side credentials flow)        |
| TMDB                   | Movie, show, actor, director search; now playing/upcoming | `src/components/*Search.js`, `NowPlaying.js`, `Upcoming.js`       |
| Calendly               | Appointment booking embed                                 | `src/components/Calendly.js`                                      |

## Critical: Dual API

Any backend change must be mirrored in **both** `server.js` (CommonJS) and `api/chat.js` (ES modules). They are kept in sync manually. The React app proxies `/api/*` to `localhost:3001` in dev (set in `package.json`).

## Dev

```
npm start          # React on :3000, proxies /api to :3001
node server.js     # Express on :3001 (separate terminal)
```

No test suite. No TypeScript.

## Key Files

| File                        | Purpose                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `src/styles.css`            | Global styles — `* { box-sizing: border-box }`, `input/textarea/select { font-size: 16px }`, shared components |
| `src/pages/Admin.js`        | Admin chat dashboard — Pusher real-time, unread dots, inline name/email editing                                |
| `src/components/ChatBox.js` | Visitor-facing chat widget embedded in Tech Byte page                                                          |
| `api/chat.js`               | All chat API actions: get-sessions, get-messages, send-message, send-reply, update-session, delete-session     |
| `api/_db.js`                | MongoDB connection + Message schema                                                                            |

## CSS Conventions

- Global `* { box-sizing: border-box }` and `input { font-size: 16px }` in `styles.css` — **do not repeat these in component CSS files**
- Mobile-first for Admin page; desktop layout is the default for all other pages
- No CSS frameworks — everything is hand-written

## Environment Variables

Required in `.env` (dev) and Vercel dashboard (prod):

- `REACT_APP_PUSHER_KEY`, `REACT_APP_PUSHER_CLUSTER` (client-side)
- `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER` (server-side)
- `MONGODB_URI`
- `ADMIN_PASSWORD`
- `STRIPE_SECRET_KEY`, `REACT_APP_STRIPE_PUBLISHABLE_KEY`
- `ANTHROPIC_API_KEY`
