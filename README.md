# gihuncho.github.io

Personal site — <https://gihuncho.github.io>

Two files: `index.html` and `style.css`, plus three woff2 faces in `fonts/`.
No build step, no dependencies, no JavaScript, and no external requests —
the fonts are served from this repository.

## Look

Monokai Pro on its darker ground (`#221f22`), set in JetBrains Mono. Hue is
spent only where greyscale cannot do the job: one green for the name, one
pink for links. Title, prose, author list, date and comment are separated by
the theme's neutral ramp instead. Italics appear only where the theme and the
citation style agree — section labels (comments) and journal names. Dark
only; `@media print` falls back to ink on paper.

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
