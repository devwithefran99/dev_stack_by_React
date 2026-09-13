export interface Technology {
    id: number;
  name: string;
  category: string;
  level: string;
  rating: number;
   image: string;
   description: string;
}
export const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: "Popular",
    rating: 4.9,
     image: "/react.png",
      description: "A declarative, component-based JavaScript library for building modern user",
  },
  {
    id:2,
    name: "Vue.js",
    category: "Frontend",
    level: "Versatile",
    rating: 4.8,
     image: "/vue.png",
      description: "An approachable, performant, and versatile framework for building web user interfaces.",
  },
  {
    id:3,
    name: "Node.js",
    category: "Backend",
    level: "Standard",
    rating: 4.8,
     image: "/node.png",
      description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    id:4,
    name: "Next.js",
    category: "Backend",
    level: "SSR/Edge",
    rating: 4.9,
     image: "/next.png",
      description: "The React framework for full-stack webapplications with hybrid static.",
  },
  {
    id : 5,
    name: "Svelte.js",
    category: "Backend",
    level: "Fast",
    rating: 4.8,
     image: "/sevellte.png",
      description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual",
  },
  {
    id:6,
    name: "PostgreSQL",
    category: "Database",
    level: "Fast",
    rating: 4.8,
     image: "/PostgreSQL.png",
      description: "A powerful, open-source object-relational database system with proven reliability.",
  },
  {
    id:7,
    name: "Redis",
    category: "Database",
    level: "Cache",
    rating: 4.8,
     image: "/redis.png",
      description: "In-memory data structure store used as a high-speed database, cache.",
  },
  {
    id:8,
    name: "JavaScript",
    category: "Language",
    level: "Ubiquitous",
    rating: 4.9,
     image: "/js.png",
      description: "The versatile, ubiquitous scripting language powering dynamic behavior.",
  },
  {
    id:9,
    name: "TypeScript",
    category: "Language",
    level: "Essential",
    rating: 4.8,
     image: "/ts.png",
      description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
  },
  {
    id : 10,
    name: "Java",
    category: "Robust",
    level: "Language",
    rating: 4.6,
     image: "/java.png",
      description: "A powerful, open-source object-relational database system with proven reliability.",
  },
  {
    id: 11, 
    name: "Tailwind CSS",
    category: "Styling",
    level: "Modern",
    rating: 4.8,
     image: "/tailwind.png",
      description: "A powerful, open-source object-relational database system with proven reliability.",
  },
  {
    id : 12,
    name: "Docker",
    category: "DevOps",
    level: "Containers",
    rating: 4.8,
     image: "/docker.png",
      description: "A platform designed to build, share, and run containerized applications reliably.",
  },
  
];