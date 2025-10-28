import * as React from "react";
import Image from "next/image";
import type { Book } from "@/data/books";

export function BookCard({
  book,
  className = "",
  footer,
}: {
  book: Book;
  className?: string;
  footer?: React.ReactNode;
}) {
  const Wrapper = book.link ? "a" : "div";

  return (
    <Wrapper
      href={book.link}
      target={book.link ? "_blank" : undefined}
      rel={book.link ? "noopener noreferrer" : undefined}
      className={`
        group block h-full rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60
        p-6 md:p-7 transition-all duration-300 ease-out
        hover:scale-[1.05] hover:-translate-y-1
        hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
        hover:ring-1 hover:ring-white/40 dark:hover:ring-white/30
        hover:border-white/60 dark:hover:border-white/40
        hover:brightness-[1.06]
        ${className}
      `}
    >
      <div className="flex items-start gap-6">
        {/* Cover */}
        <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-md">
          {book.cover ? (
            <Image
              src={book.cover}
              alt={`${book.title} cover`}
              fill
              sizes="128px"
              className="
                object-cover transform-gpu transition-all duration-300
                group-hover:brightness-[1.08] group-hover:contrast-[1.05]
              "
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-xs text-zinc-500 dark:text-zinc-400">
              no cover
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 space-y-2">
          <h3 className="text-md font-semibold leading-snug">
            {book.title}
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {book.author}
            {book.year && <span className="opacity-60"> · {book.year}</span>}
          </p>

          {book.notes && (
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {book.notes}
            </p>
          )}

          {book.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {book.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {footer ? <div className="pt-1">{footer}</div> : null}
        </div>
      </div>
    </Wrapper>
  );
}
