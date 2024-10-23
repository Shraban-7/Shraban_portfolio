import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center justify-center fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] bg-transparent backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.05)] dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.05)] z-[5000] px-8 py-2",
        "rounded-lg max-w-fit"
      )}
    >
      {navItems.map((navItem, idx) => (
        <motion.a
          key={`nav-item-${idx}`}
          href={navItem.link}
          className={cn(
            "relative px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors",
            "flex items-center space-x-2"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {navItem.icon}
          <span>{navItem.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};