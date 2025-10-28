// /components/animated-book-grid.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookCard } from "@/components/book-card";
import type { Book } from "@/data/books";

export function AnimatedBookGrid({ books }: { books: Book[] }) {
  const reduce = useReducedMotion();

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const visible = (i: number) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.35, delay: i * 0.12 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
        };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 items-stretch">
      {books.map((b, i) => (
        <motion.div
          key={b.title}
          className="h-full will-change-transform"
          initial={hidden}
          whileInView={visible(i)}
          viewport={{
            once: true,
            amount: 0.05,     // 👈 trigger when ~5% of the tile is visible
            // optional: start a touch earlier while scrolling down
            // margin: "0px 0px -5% 0px",
          }}
        >
          <BookCard book={b} className="h-full" />
        </motion.div>
      ))}
    </div>
  );
}
