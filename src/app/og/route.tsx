import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const postTitle = searchParams.get("title")?.slice(0, 100) || "Blog";

    const [groteskRegular, background] = await Promise.all([
      readFile(
        path.join(
          process.cwd(),
          "public/_static/fonts/SpaceGrotesk-Regular.ttf",
        ),
      ),
      readFile(path.join(process.cwd(), "public/_static/blog-og-card.png")),
    ]);

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url(data:image/png;base64,${background.toString("base64")})`,
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            display: "flex",
            fontSize: 65,
            fontFamily: "SpaceGrotesk",
            fontStyle: "normal",
            color: "white",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "SpaceGrotesk",
            data: new Uint8Array(groteskRegular).buffer,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    console.error("Failed to generate the blog preview image:", error);
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
