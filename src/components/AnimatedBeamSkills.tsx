import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "apache",
    "vercel",
    "jest",
    "docker",
    "nginx",
    "git",
    "tailwindcss",
    "github",
    "visualstudiocode",
    "figma",
    "laravel",
    "php"
];

export default function AnimatedBeamSkills() {
    return (
        <div className="relative flex size-full max-w-xl md:max-w-7xl items-center justify-center overflow-hidden  bg-transparent px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
