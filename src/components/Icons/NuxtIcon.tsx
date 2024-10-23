"use client";

import React from "react";

interface NuxtIconProps extends React.SVGProps<SVGSVGElement> {
    color1?: string; // Optional prop for the first path color
    color2?: string; // Optional prop for the second path color
}

const NuxtIcon: React.FC<NuxtIconProps> = ({
    color1 = "#80EEC0", // Default Nuxt.js primary color
    color2 = "#00DC82", // Default Nuxt.js secondary color
    ...props // Spread other SVG props
}) => (
    <svg
        viewBox="0 0 124 124"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        {...props}
    >
        <path
            d="M55.7498 27.1551C52.5277 21.615 44.4723 21.615 41.2502 27.1551L6.13404 87.5346C2.91191 93.0747 6.93956 100 13.3838 100H40.7724C38.9697 97.8066 38.3003 94.7873 39.3485 92.0637L65.0901 45.6429L55.7498 27.1551Z"
            fill={color1} // Use color1 for the first path
        />
        <path
            d="M82.7019 43.1559C85.9239 37.6158 93.9794 37.6158 97.2014 43.1559L118.379 80.1493C121.601 85.6894 117.573 92.6148 111.129 92.6148H68.7744C62.3306 92.6148 58.3029 85.6894 61.5251 80.1493L82.7019 43.1559Z"
            fill={color2} // Use color2 for the second path
        />
    </svg>
);

export default NuxtIcon;
