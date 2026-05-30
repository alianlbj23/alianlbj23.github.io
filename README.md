## masterPortfolio

## Overview

This project is a React-based portfolio site. It is configured to deploy the production build to the `gh-pages` branch using the `gh-pages` package.

## Prerequisites

- Node.js and npm installed
- Project dependencies installed: `npm install`

## Deploying to GitHub Pages

Run the following command to build the site and publish the `build/` directory to the `gh-pages` branch on GitHub:

```bash
npm run deploy
```

Notes:

- The `predeploy` script runs `npm run build` first.
- The `deploy` script uses `gh-pages -b gh-pages -d build`, which pushes the contents of `build/` to the `gh-pages` branch.
- The `homepage` field in `package.json` controls the published URL (currently set to the project GitHub Pages URL).

After deployment the site should be available at the URL specified in `package.json`'s `homepage` field.

## Local Development

Start the development server locally with:

```bash
npm start

# Open the website locally:
http://localhost:3000
```
