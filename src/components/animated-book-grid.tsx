"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookCard } from "@/components/book-card";
import type { Book } from "@/data/books";

export function AnimatedBookGrid({ books }: { books: Book[] }) {
  const reduce = useReducedMotion();
  const ease = [0.22, 0.61, 0.36, 1] as const;

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const visible = (i: number) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.35, delay: i * 0.1 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay: i * 0.1, ease },
        };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 items-stretch">
      {books.map((b, i) => (
        <motion.div
          key={b.title}
          className="h-full will-change-transform"
          initial={hidden}
          whileInView={visible(i)}
          viewport={{ once: true, amount: 0.1 }}
        >
          <BookCard book={b} className="h-full" />
        </motion.div>
      ))}
    </div>
  );
}
