import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const assets = new URL("../public/_static/", import.meta.url);
const [headshot, font] = await Promise.all([
  readFile(new URL("headshot.jpg", assets)),
  readFile(new URL("fonts/SpaceGrotesk-Regular.ttf", assets)),
]);

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
  h("img", {
    src: `data:image/jpeg;base64,${headshot.toString("base64")}`,
    width: 152,
    height: 152,
    style: { borderRadius: "50%", objectFit: "cover" },
  }),
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
        fontSize: 30,
        color: "#d4d4d8",
      },
    },
    "Engineer & developer in San Francisco.",
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        marginTop: 8,
        fontSize: 30,
        color: "#d4d4d8",
      },
    },
    "Chip design and low-level systems.",
  ),
  h(
    "div",
    {
      style: {
        display: "flex",
        marginTop: "auto",
        fontSize: 25,
        color: "#a1a1aa",
      },
    },
    "erictzhong.com",
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
