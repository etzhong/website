# erictzhong.com

This is my personal website, blog, and portfolio built using:

- Framework : [Next.js](https://nextjs.org/)
- Styling : [Tailwind CSS](https://tailwindcss.com/)
- Markdown : [MDX](https://mdxjs.com/), [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote), and [gray-matter](https://github.com/jonschlinkert/gray-matter)
- Deployment: [Vercel](https://vercel.com/)

Original inspiration + template credit to [Adarsha Acharya](https://github.com/adarshaacharya)

Use Node.js 22.21 or newer within Node 22 and the pnpm version specified in
`package.json`. The `engines.node` setting also selects Node 22 on Vercel.
`.npmrc` sets the Node baseline used for package compatibility checks, including
when pnpm runs as a standalone binary.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Before deploying, run `pnpm lint`, `pnpm type-check`, and `pnpm build`.
Builds need development dependencies, including TypeScript and Tailwind CSS.

For Vercel, use the Next.js framework preset, `pnpm build`, and the default
dependency installation and output directory. Optional Google Analytics and
AdSense scripts are enabled only when `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` and
`NEXT_PUBLIC_ADSENSE_CLIENT_ID`, respectively, are configured before the build.

The social preview is a static image. After changing its text, portrait, or styling,
run `pnpm generate:og` and include the updated `public/_static/eric-zhong-og.png`
in the deployment.

The dependency audit was checked on October 12, 2026. Three upstream findings
remain: `braces` in ESLint's glob tooling and `sprintf-js` in an unused YAML CLI
have no patched releases; Tailwind's typography plugin pins an older
`postcss-selector-parser` major. Recheck with `pnpm audit` when updating these
packages rather than forcing incompatible dependency overrides.
