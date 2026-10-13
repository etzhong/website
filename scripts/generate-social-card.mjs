import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const portraitSize = 168;
const chipSize = 84;
const assets = new URL("../public/_static/", import.meta.url);
const [headshot, font, chipLogo] = await Promise.all([
  readFile(new URL("headshot.jpg", assets)),
  readFile(new URL("fonts/SpaceGrotesk-Regular.ttf", assets)),
  readFile(new URL("favicons/chip-icon-100x100.png", assets)),
]);

// Tint the chip white, enlarge its center, and trim the outer transparent padding.
const whiteChipLogo = Buffer.from(
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="2 2 96 96">
    <defs>
      <filter id="white-chip" x="0" y="0" width="100%" height="100%">
        <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
      </filter>
      <mask id="chip-core" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <rect width="100" height="100" fill="white" />
        <rect x="28" y="32" width="44" height="36" fill="black" />
      </mask>
    </defs>
    <image width="100" height="100" href="data:image/png;base64,${chipLogo.toString("base64")}" filter="url(#white-chip)" mask="url(#chip-core)" />
  </svg>
`,
).toString("base64");

// Keep this card aligned with the homepage's portrait, font, and dark palette.
const card = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "64px 88px",
      backgroundColor: "#09090b",
      color: "#f4f4f5",
      fontFamily: "Space Grotesk",
    },
  },
  h(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    h("img", {
      src: `data:image/jpeg;base64,${headshot.toString("base64")}`,
      width: portraitSize,
      height: portraitSize,
      style: { borderRadius: "50%", objectFit: "cover" },
    }),
    h("img", {
      src: `data:image/svg+xml;base64,${whiteChipLogo}`,
      width: chipSize,
      height: chipSize,
      alt: "Chip logo",
    }),
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        marginTop: 32,
        fontSize: 76,
        lineHeight: 1.1,
        letterSpacing: "-3px",
      },
    },
    "Hey, I'm Eric!",
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        marginTop: 24,
        fontSize: 32,
        lineHeight: 1.5,
        letterSpacing: "-0.75px",
        color: "#d4d4d8",
      },
    },
    "I'm an engineer and developer based in San Francisco—specializing in chip design and low-level systems. Thanks for stopping by my site!",
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        marginTop: "auto",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: 25,
        color: "#a1a1aa",
      },
    },
    h("div", { style: { display: "flex" } }, "erictzhong.com"),
  ),
);

const response = new ImageResponse(card, {
  width: 1200,
  height: 630,
  fonts: [{ name: "Space Grotesk", data: font, weight: 400, style: "normal" }],
});

await writeFile(
  new URL("eric-zhong-og.png", assets),
  Buffer.from(await response.arrayBuffer()),
);
console.log("Generated public/_static/eric-zhong-og.png (1200 × 630).");
