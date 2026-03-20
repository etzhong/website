export type Book = {
  title: string;
  author: string;
  year?: number;
  link?: string;      // Goodreads / Amazon / official page
  cover?: string;     // /books/slug.jpg in /public
  tags?: string[];
  notes?: string;
};

export const CURRENTLY_READING: Book[] = [
  {
    title: "Programming Massively Parallel Processors",
    author: "David B. Kirk, Wen-Mei W. Hwu, Izzat El Hajj",
    link: "https://www.goodreads.com/book/show/59856387-programming-massively-parallel-processors",
    cover: "/books/programming-massively-parallel-processors.jpg",
    notes: "Fundamentals of GPUs, CUDA, and the most critical programming paradigm of our time",
  },
  {
    title: "Architecting and Building High-Speed SoCs",
    author: "Mounir Maaref",
    link: "https://www.goodreads.com/book/show/75404756-architecting-and-building-high-speed-socs",
    cover: "/books/architecting-and-building-high-speed-socs.jpg",
    notes: "A full-stack deep dive into modern SoC design and implementation with FPGAs. A delight for any co-design engineer",
  },
  {
    title: "RTL Modeling with SystemVerilog for Simulation and Synthesis",
    author: "Stuart Sutherland",
    link: "https://www.goodreads.com/en/book/show/35409207-rtl-modeling-with-systemverilog-for-simulation-and-synthesis",
    cover: "/books/rtl-modeling.jpg",
    notes: "The full power of modern SystemVerilog—and how to wield it in real hardware",
  },
  {
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    link: "https://www.goodreads.com/book/show/25499718-children-of-time",
    cover: "/books/children-of-time.jpg",
    notes: "A gripping evolutionary tale of a near-extinct humanity fleeing to the stars—and what happens when they're not alone",
  },
];

export const PLAN_TO_READ: Book[] = [
  {
    title: "A Tour of C++",
    author: "Bjarne Stroustrup",
    link: "https://www.goodreads.com/book/show/59964594",
    cover: "/books/a-tour-of-cpp.jpg",
    notes: "A quick no-frills trip through modern C++20 from the man himself"
  },
  {
    title: "Effective Modern C++",
    author: "Scott Meyers",
    link: "https://www.goodreads.com/book/show/22800553-effective-modern-c",
    cover: "/books/effective-modern-cpp.jpg",
    notes: "The classic modern C++ book with still-relevant best practices to live by"
  },
];

export const FINISHED_READING: Book[] = [
  {
    title: "Parallel Computer Organization and Design",
    author: "Michel Dubois, Murali Annavaram, Per Stenström",
    link: "https://www.goodreads.com/en/book/show/13728298-parallel-computer-organization-and-design",
    cover: "/books/pcoad.jpg",
    notes: "My computer architecture professor's book. A natural modern extension of Hennessey and Patterson"
  },
  {
    title: "Remembrance of Earth's Past (Three-Body Trilogy)",
    author: "Cixin Liu",
    link: "https://www.goodreads.com/book/show/34569357-remembrance-of-earth-s-past",
    cover: "/books/remembrance-of-earths-past.jpg",
    notes: "The most imaginative work of fiction I've ever read. Leaves you questioning the nature of reality and our humble place within it"
  },
  {
    title: "Getting Started with FPGAs",
    author: "Russell Merrick",
    link: "https://www.goodreads.com/en/book/show/119031481-getting-started-with-fpgas",
    cover: "/books/getting-started-with-fpgas.jpg",
    notes: "A concise 0 to 1 intro to FPGAs and digital logic design. Perfect for anyone coming in from software"
  },
  {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Hector Garcia, Francesc Miralles",
    link: "https://www.goodreads.com/book/show/36073585-ikigai",
    cover: "/books/ikigai.jpg",
    notes: "How to live a long life, and find your purpose within it"
  },
];
