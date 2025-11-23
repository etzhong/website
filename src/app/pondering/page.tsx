"use client";

import { QUESTIONS, Question } from "@/data/pondering";
import { motion, useReducedMotion } from "framer-motion";

function QuestionItem({ question }: { question: Question }) {
  return (
    <li className="space-y-2">
      <div className="text-zinc-900 dark:text-zinc-100">
        {question.question}
      </div>
      {question.context && (
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {question.context}
        </div>
      )}
    </li>
  );
}

export default function Questions() {
  const reduce = useReducedMotion?.() ?? false;

  const blockHidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const blockShow = (delay = 0) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.35, delay } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] },
        };

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Title + subtitle */}
      <section className="space-y-6 lg:space-y-8">
        <motion.h1
          className="text-5xl font-semibold tracking-tight"
          initial={blockHidden}
          whileInView={blockShow(0.0)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Things I&apos;m thinking about... 🤔
        </motion.h1>

        <motion.p className="mt-4 mb-4" initial={blockHidden} whileInView={blockShow(0.08)}
          viewport={{ once: true, amount: 0.2 }}>
            A collection of open-ended questions, problems, and challenges I&apos;m exploring across engineering,
            life, society, and beyond. Updated semi-regularly as thoughts come and go.
        </motion.p>
      </section>

      {/* Pondering List */}
      <motion.section
        initial={blockHidden}
        whileInView={blockShow(0.12)}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ul className="space-y-6 text-xl leading-relaxed">
          {QUESTIONS.map((question, index) => (
            <QuestionItem key={index} question={question} />
          ))}
        </ul>
      </motion.section>

      {/* Footer note */}
      <motion.div
        className="pt-8 text-sm text-zinc-500 dark:text-zinc-500"
        initial={blockHidden}
        whileInView={blockShow(0.3)}
        viewport={{ once: true, amount: 0.2 }}
      >
        Have thoughts on any of these? Feel free to reach out! Would love to chat about it over some coffee.
      </motion.div>
    </div>
  );
}

