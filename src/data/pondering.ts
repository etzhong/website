export type Question = {
  question: string;
  context?: string;
};

export const QUESTIONS: Question[] = [
  {
    question: `What can we do to make hardware design easier, more efficient, and more accessible to everyone?`,
    context: `It currently takes thousands of engineers, millions of dollars, and decades of expertise to create a
      single modern chip. The process is incredibly tedious, expensive, outdated, and closed-source. How can we make
      designing hardware more like software?`,
  },
  {
    question: `How can you truly be “full stack” as an engineer as hardware and software complexity grows
      exponentially?`,
    context: `Modern systems have become so intricate that achieving end-to-end visibility of hardware and software
      seems impossible. As a co-design engineer, how do you maintain that full-stack vision? Is it even realistic to
      try?`,
  },
  {
    question: `What does the next fundamental computing paradigm look like?`,
    context: `Reconfigurable? Quantum? Photonic? Neuromorphic? Some combination of all of these? What is the next big step in computing technology and how can we build integrated, programmable systems with it?`,
  },
  {
    question: `How do you sustain a life of learning after school while pursuing a career?`,
    context: `This hit me especially hard as a new grad. Learning new things has become an intentional choice
      rather than a structured obligation. How can you continuously learn with external obligations and no strict
      finish line in sight?`,
  },
  {
    question: `How do we properly educate people in an age of AI?`,
    context: `In the few years since ChatGPT released, AI has completely disrupted education and the learning process.
      How do we ensure the next generation learns how to think critically while still leveraging AI's incredible potential?`,
  },
  {
    question: `As a young adult, how can we have it all: love, friends, family, and a career we're proud of?`,
    context: `Borrowing this question from my friend Steve. Something I'm really trying to figure out in my 20s.`,
  },
];
