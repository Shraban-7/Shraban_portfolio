"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconUser, IconBriefcase, IconMail, IconCode } from "@tabler/icons-react";
import Dock from "@/components/Dock";

export const navItems = [
    {
        name: "About",
        link: "/#about",
        icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Projects",
        link: "/#projects",
        icon: <IconCode className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Services",
        link: "/#services",
        icon: <IconBriefcase className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "/#contact",
        icon: <IconMail className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
];

export default function Navbar() {
    return (
        <>
            <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block">
                <FloatingNav navItems={navItems} />
            </div>
            <div className="md:hidden">
                <Dock navItems={navItems} />
            </div>
        </>
    );
}