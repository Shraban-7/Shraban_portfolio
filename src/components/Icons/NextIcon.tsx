"use client";

import React from "react";

interface NextIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;  // Optional prop for setting the fill color
}

const NextIcon: React.FC<NextIconProps> = ({
    color = "#000000", // Default to black (official Next.js color)
    ...props
}) => (
    <svg
        fill="none"
        viewBox="0 0 15 15"
        height="1em"
        width="1em"
        {...props}
    >
        <path
            fill={color} // Use the custom color or default black
            fillRule="evenodd"
            d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
            clipRule="evenodd"
        />
    </svg>
);

export default NextIcon;
