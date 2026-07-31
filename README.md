# gihuncho.github.io

Personal site — <https://gihuncho.github.io>

Two files: `index.html` and `style.css`. No build step, no dependencies, no
JavaScript, no external requests (fonts resolve from the system stack).

## Editing

Open `index.html` and edit the text. Every section is a `<section>` with a
label in `<h2>`; entries follow one of two shapes:

- `article.pub` — publications: title, author list, venue, note, links.
- `article.entry` — everything else: a `div.head` holding the date and the
  title, followed by an optional `p.note`.

The date goes *before* the heading inside `div.head`; it floats right so the
title wraps around it.

To preview, open the file in a browser, or serve it:

```sh
python3 -m http.server
```

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yml`, which uploads the
repository as-is to GitHub Pages.
