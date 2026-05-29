# Front Sandbox

The Frontend Playground for Developers.

Front Sandbox is a premium browser-based frontend development playground built as a single self-contained `index.html` file. It runs immediately in a browser with no build step, no installation, and no backend requirement.

## Features

- HTML, CSS, and JavaScript editors
- Live iframe preview with desktop, tablet, and mobile modes
- Autosave with `localStorage`
- Import and export workflows
- Starter templates and template gallery
- Dark, light, and neon themes
- Built-in console, error overlay, and diagnostics
- File workspace with rename, duplicate, delete, and drag sorting
- Focus mode, fullscreen preview, keyboard shortcuts, and undo/redo
- Static zip, workspace JSON, and single HTML export options

## Use

Open `index.html` directly in a browser.

For a local static server:

```sh
python3 -m http.server 8765
```

Then visit `http://127.0.0.1:8765`.

## Optional Tests

The app does not require Node.js to run. The Playwright setup is only for optional visual smoke testing.

```sh
npm install
npm test
```

## Copyright

[© 2026 De'Andre Perry. All rights reserved.](https://github.com/deandreperry)
