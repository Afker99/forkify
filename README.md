# Forkify

Forkify is a recipe search app built with JavaScript. Search the Forkify recipe API, view recipe details, adjust servings, bookmark recipes, and upload your own recipes.

## Features

- Search recipes by ingredient or recipe name
- Browse paginated search results
- View recipe ingredients, cooking time, servings, and source
- Adjust ingredient quantities when changing servings
- Bookmark recipes and keep bookmarks in local storage
- Submit a recipe to the Forkify API

## Getting started

### Requirements

- Node.js and npm
- Internet access to use the Forkify API

### Install and run

From the `starter` directory, install dependencies and start the Parcel development server:

```bash
npm install
npm start
```

Parcel prints a local URL in the terminal. Open that URL in your browser. To create a production build, run:

```bash
npm run build
```

The generated files are written to `dist/`.

## API

The app uses the [Forkify API](https://forkify-api.jonas.io/) for recipe searches, recipe details, and recipe uploads. API access requires a key; the current key is configured in `src/js/config.js`.

## Project structure

```text
starter/
├── index.html
└── src/
    ├── img/       # App images and SVG icons
    ├── js/        # App state, controller, helpers, and views
    └── sass/      # Styles
```

The JavaScript follows an MVC-style structure: `model.js` manages application data and API calls, `controller.js` connects user actions to the model and views, and `views/` contains the UI rendering code.

## Recipe upload format

Each ingredient should be entered as three comma-separated values:

```text
quantity, unit, description
```

For example: `1, cup, flour`. Leave quantity or unit empty when the ingredient does not need one.
