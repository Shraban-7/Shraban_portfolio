// techData/index.ts
import ReactIcon from "@/components/Icons/ReactIcon";
import NuxtIcon from "@/components/Icons/NuxtIcon";
import MySQLIcon from "@/components/Icons/MySQLIcon";
import PHPIcon from "@/components/Icons/PHPIcon";
import LaravelIcon from "@/components/Icons/LaravelIcon";
import VueIcon from "@/components/Icons/VueIcon";
import NextIcon from "@/components/Icons/NextIcon";
import JavaScriptIcon from "@/components/Icons/JSIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import TailwindIcon from "@/components/Icons/TailwindIcon";

export const technologies = [
  {
    name: "React",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture, virtual DOM, and unidirectional data flow.",
    icon: ReactIcon,
    color: "#61DAFB",
  },
  {
    name: "Vue.js",
    description:
      "The Progressive JavaScript Framework known for its simplicity, flexibility, and powerful tooling ecosystem.",
    icon: VueIcon,
    color: "#42b883",
  },
  {
    name: "Next.js",
    description:
      "The React Framework for Production, offering server-side rendering, static site generation, and optimized performance out of the box.",
    icon: NextIcon,
    color: "#ffffff", // Changed to white for better contrast in dark mode
  },
  {
    name: "Nuxt.js",
    description:
      "The Intuitive Vue Framework, simplifying the development of universal, server-side rendered, and static websites and applications.",
    icon: NuxtIcon,
    color: "#00C58E",
  },
  {
    name: "Laravel",
    description:
      "The PHP Framework for Web Artisans, providing expressive syntax, robust features, and an elegant development experience.",
    icon: LaravelIcon,
    color: "#FF2D20",
  },
  {
    name: "MySQL",
    description:
      "The world's most popular open-source relational database management system, known for its reliability, performance, and ease of use.",
    icon: MySQLIcon,
    color: "#00758F",
  },
  {
    name: "PHP",
    description:
      "A popular general-purpose scripting language especially suited for web development, powering millions of websites and applications.",
    icon: PHPIcon,
    color: "#777BB4",
  },
  {
    name: "JavaScript",
    description:
      "The programming language of the Web, enabling interactive and dynamic content, client-side scripting, and full-stack development capabilities.",
    icon: JavaScriptIcon,
    color: "#F7DF1E",
  },
  {
    name: "GitHub",
    description:
      "A platform for developers to host and review code, manage projects, and build software together.",
    icon: GitHubIcon,
    color: "#ffffff", // Changed to white for better contrast in dark mode
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    icon: TailwindIcon,
    color: "#0ea5e9", // Darker blue variant for better dark mode visibility
  },
];
