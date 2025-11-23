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
    title: "RTL Modeling with SystemVerilog for Simulation and Synthesis",
    author: "Stuart Sutherland",
    link: "https://www.goodreads.com/en/book/show/35409207-rtl-modeling-with-systemverilog-for-simulation-and-synthesis",
    cover: "/books/rtl-modeling.jpg",
    notes: "A comprehensive reference for everything modern SV has to offer",
  },
  {
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    link: "https://www.goodreads.com/book/show/25499718-children-of-time",
    cover: "/books/children-of-time.jpg",
    notes: "A gripping science-fiction take on a dwindling humanity's future among the stars after fleeing a dying Earth",
  }
];

export const PLAN_TO_READ: Book[] = [
  {
    title: "A Tour of C++",
    author: "Bjarne Stroustrup",
    link: "https://www.goodreads.com/book/show/59964594",
    cover: "/books/a-tour-of-cpp.jpg",
    notes: "An excellent overview of modern C++20 features from the man himself"
  },
  {
    title: "Effective Modern C++",
    author: "Scott Meyers",
    link: "https://www.goodreads.com/book/show/22800553-effective-modern-c",
    cover: "/books/effective-modern-cpp.jpg",
    notes: "The classic modern C++ book with effective practices to live by"
  },
];

export const FINISHED_READING: Book[] = [
  {
    title: "Parallel Computer Organization and Design",
    author: "Michel Dubois, Murali Annavaram, Per Stenström",
    link: "https://www.goodreads.com/book/show/40534545-ikigai",
    cover: "/books/pcoad.jpg",
    notes: "My USC comparch professor's book. A great modern revision of Hennessey and Patterson"
  },
  {
    title: "The Three-Body Problem (trilogy)",
    author: "Cixin Liu",
    link: "https://www.goodreads.com/book/show/40534545-ikigai",
    cover: "/books/three-body-problem.jpg",
    notes: "One of the most imaginative fiction series I've ever read. Leaves you questioning the nature of reality and our place in it"
  },
  {
    title: "Getting Started with FPGAs",
    author: "Russell Merrick",
    link: "https://www.goodreads.com/en/book/show/119031481-getting-started-with-fpgas",
    cover: "/books/getting-started-with-fpgas.jpg",
    notes: "An amazing 0 to 1 intro to FPGAs and digital logic design "
  },
  {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Hector Garcia, Francesc Miralles",
    link: "https://www.goodreads.com/book/show/40534545-ikigai",
    cover: "/books/ikigai.jpg",
    notes: "How to live your life, and find your purpose within it"
  },
];
