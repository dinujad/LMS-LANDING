import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import './BorderBeam.css';

export const BorderBeam = ({
    className,
    size = 50,
    delay = 0,
    duration = 6,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    transition,
    style,
    reverse = false,
    initialOffset = 0,
    borderWidth = 1.5,
}) => {
    return (
        <div
            className={cn("border-beam-container", className)}
            style={{
                "--border-beam-width": `${borderWidth}px`,
                ...style
            }}
        >
            <motion.div
                className="border-beam"
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`, // Note: this works in standard CSS but 'rect' is experimental. Framer motion handles offsetPath animation usually via offsetDistance
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--size": size
                }}
                initial={{ offsetDistance: `${initialOffset}%` }}
                animate={{
                    offsetDistance: reverse
                        ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
                        : [`${initialOffset}%`, `${100 + initialOffset}%`],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration,
                    delay: -delay,
                    ...transition,
                }}
            />
        </div>
    );
};

export default BorderBeam;
