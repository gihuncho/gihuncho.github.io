# Changelog

## 2026-07-31 — rewritten from scratch

The site was scaffolded by [v0](https://v0.app) and last touched in September
2025. One 500-line `app/page.tsx` held the entire site; around it sat a full
Next.js application. Content still described a master's student.

Rewritten as two hand-written files. `73ee063..40d4750`, 33 files changed,
**+623 / −5676**.

### Stack

Next.js, React and the whole toolchain removed. The site is one static page;
nothing here needed a bundler, a router or a server.

|                | before                                   | after                    |
| -------------- | ---------------------------------------- | ------------------------ |
| source         | `app/`, `components/`, `lib/`, `styles/`  | `index.html`, `style.css` |
| dependencies   | 50                                       | 0                        |
| build          | `next build`                             | none                     |
| runtime JS     | React bundle                             | none                     |
| external calls | Geist fonts, Vercel Analytics            | none                     |
| deploy         | 1 m 16 s                                 | 19 s                     |

`package.json` listed **vue**, **svelte**, **@remix-run/react**, recharts,
embla-carousel, cmdk and react-day-picker. The page used one Radix dialog.
Deleted along with the 169 KB lockfile and the Next, PostCSS and TypeScript
configs. `app/globals.css` and `styles/globals.css` were near-duplicates of
each other; `public/` held nothing but placeholder images.

The tag filter and the project modal are gone too — three projects behind a
filter is furniture, and details worth hiding in a modal are details worth
printing on the page. That removed the last of the JavaScript.

The deploy workflow no longer installs Node; it uploads the repository as-is.
It does one thing first: rewrites `style.css?v=dev` to the commit SHA, because
Pages serves assets with `cache-control: max-age=600` and a stylesheet change
was otherwise invisible for ten minutes behind a browser cache.

### Content

Citations were verified against the published record rather than carried over.

- **Now at Motif Technologies** as AI Research Engineer. Experience leads the
  page; the six-item list is down to the two research positions.
- **CREPE** — full author list and the ACL Anthology entry
  ([2025.emnlp-main.1102](https://aclanthology.org/2025.emnlp-main.1102/)).
- **LLM encoders for image–text retrieval** — added. Published in *IEEE
  Journal of Biomedical and Health Informatics*
  ([10.1109/JBHI.2026.3591866](https://doi.org/10.1109/JBHI.2026.3591866)).
- **SeamXSim** — was listed as under review; it appeared in *Computers in
  Biology and Medicine* **198**, 111217 (2025).
- M.S. completion fixed to 2026. GPA, awards, the high-school club line and
  the `@snu.ac.kr` address dropped.

### Design

Monokai Dimmed, taken from the VS Code theme's own values: `#1e1e1e` ground,
`#c5c8c6` editor foreground as the middle of the neutral ramp. Dark only —
Monokai has no light counterpart worth faking — and `@media print` still falls
back to black on white, so the page prints as a two-page CV.

Hue is spent only where greyscale cannot do the job: the theme's function
orange for the name, its numeric blue for links. An earlier pass coloured
titles, organisations and dates as well, which put three hues on every heading
line and read as noise; those distinctions moved onto the neutral ramp.

Two faces, split by what the reader does with the text. Reference data —
titles, dates, author lists, journal names — is JetBrains Mono, where a uniform
advance width aligns columns. Running prose is Inter on a narrower measure,
where that same uniform width would stop words forming recognisable shapes.
Italics appear only where the theme and the citation convention agree: section
labels, which render as `// experience`, and journal names.

Fonts are vendored as five woff2 files (141 KB), so the page still makes no
external request.
