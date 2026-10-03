# TZ Taste — current build status

Updated: 2026-10-03

## What exists in this push

- A static, free design-reference studio with no AI calls, API keys, database, or paid service.
- Nine original HTML/CSS reference studies in `catalog.json` with live previews.
- Search, category filtering, saved references, personal URL references, optional screenshots, preferences, and local browser storage.
- Markdown design-brief export and JSON backup/import for moving personal data between devices.
- Public `llms.txt` and catalog metadata so people and developer tools can understand the collection.
- Static hosting configuration and a publisher script for placing the app at Day 6 on rawmware.com.

## Current state

The app is implemented locally and browser-tested for previews, saving, reload persistence, search, adding a custom reference, preferences, brief download, and mobile width. The Day 6 site integration and archive refresh are prepared in the separate production checkout but have not been deployed from this checkpoint.

## Important limits

Personal references and preferences are local to the browser. They are not synced to a server. Use Export collection to make a backup. The catalog is intentionally finite and hand-curated; it does not scrape or translate arbitrary repositories automatically.

## Next step

Review the visual details, remove test screenshots from the repository if desired, then publish the Day 6 files through the production repo and verify the live route.
