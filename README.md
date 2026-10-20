# RigSafe LOTO

The original single-page UI is preserved functionally, with its embedded styles and application code moved into `public/assets/`.

## Run locally

1. Install Node.js 18 or later.
2. From this folder, run `npm start`.
3. Visit `http://localhost:3000`.

## Layout

- `public/` — frontend entry page and browser assets
- `backend/routes/` — API endpoints
- `backend/services/` — static-file service
- `uploads/` — reserved for uploaded rig images
- `data/` — reserved for application data
- `docs/original-single-file.html` — untouched source supplied for the project

The current browser experience continues to store its demo state in local storage, just as the supplied page did. The server includes deployable route modules for a health check (`/api/health`) and upload listing (`/api/uploads`).
