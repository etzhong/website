import { generatePageMetadata } from "../seo";
import React from "react";
import {
  CURRENTLY_READING,
  PLAN_TO_READ,
  FINISHED_READING,
} from "@/data/books";
import { AnimatedBookGrid } from "@/components/animated-book-grid";

export const metadata = generatePageMetadata({
  title: "Bookshelf",
  description: "What I am, have, and plan to be reading",
});

export default function Bookshelf() {
  return (
    <div className="space-y-12 lg:space-y-12">
      <section className="space-y-6 lg:space-y-8">
        <h1 className="text-5xl font-semibold tracking-tight">
          What I&apos;ve been reading... 📖
        </h1>
        <h3 className="text-zinc-600 dark:text-zinc-400 max-w-4xl">
          A living shelf of notable books I&apos;m currently reading, already read, or plan to
          read. Currently a mix of technical, introspective, and just-for-fun.
        </h3>
      </section>

      {/* CURRENTLY READING */}
      <section className="space-y-6 lg:space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Currently Reading</h2>
        <AnimatedBookGrid books={CURRENTLY_READING} />
      </section>

      {/* PLAN TO READ */}
      <section className="space-y-6 lg:space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Plan to Read</h2>
        <AnimatedBookGrid books={PLAN_TO_READ} />
      </section>

      {/* FINISHED READING */}
      <section className="space-y-6 lg:space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Finished Reading</h2>
        <AnimatedBookGrid books={FINISHED_READING} />
      </section>
    </div>
  );
}
