import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Dock = ({ navItems }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "flex items-center justify-around fixed bottom-4 left-4 right-4 mx-auto bg-transparent backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 shadow-lg z-50 px-4 py-2",
                "rounded-full max-w-sm"
            )}
        >
            {navItems.map((navItem, idx) => (
                <motion.a
                    key={`dock-item-${idx}`}
                    href={navItem.link}
                    className={cn(
                        "p-2 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-white/20 dark:hover:bg-black/20 transition-colors",
                        "flex items-center justify-center"
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {navItem.icon}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Dock;