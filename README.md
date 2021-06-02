# Cameron Kleiman's Personal Website

Personal website rewrite project, Spring 2021. Started mostly because I got super into React and theming and my old website is a wall of text. The goal of this project is to streamline my web design and focus my attention towards the things I care about: theming (Theme UI) and content (MDX).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project uses [Theme UI](https://theme-ui.com/) for styling and [@next/mdx](https://www.npmjs.com/package/@next/mdx) to render my Markdown pages. GitHub Actions (in `.github/workflows`) handle all of the work of pushing to the live site.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.mdx`. The page auto-updates as you edit the file.

(We don't do APIs here because I'm hosting on GitHub Pages. Sorry. 😕)

## How I build this site

To build the site for production, you can run:

```bash
npm run build
# or
yarn build
```

This will put the static files you need in the `out` directory. Internally, this runs:

```bash
next build && next export
```

...so that we generate a static site that can be hosted anywhere as opposed to one dependent on running on Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
