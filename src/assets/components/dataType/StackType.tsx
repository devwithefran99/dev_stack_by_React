export interface Technology {
  name: string;
  category: string;
  level: string;
  rating: number;
   image: string;
   description: string;
}
export const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
     image: "/react.png",
      description: "A popular library for building user interfaces.",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
     image: "/vue.png",
      description: "A popular library for building user interfaces.",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Beginner-Friendly",
    rating: 4.8,
     image: "/node.png",
      description: "A popular library for building user interfaces.",
  },
  
];