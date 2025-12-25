"use client"

import React, { useCallback, useEffect } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

export const MagicCard = React.forwardRef(({
    children,
    className,
    gradientSize = 200,
    gradientColor = "#262626",
    gradientOpacity = 0.8,
    gradientFrom = "#9E7AFF",
    gradientTo = "#FE8BBB",
}, ref) => {
    const mouseX = useMotionValue(-gradientSize)
    const mouseY = useMotionValue(-gradientSize)

    const reset = useCallback(() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
    }, [gradientSize, mouseX, mouseY])

    const handlePointerMove = useCallback(
        (e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        },
        [mouseX, mouseY]
    )

    useEffect(() => {
        reset()
    }, [reset])

    useEffect(() => {
        const handleGlobalPointerOut = (e) => {
            if (!e.relatedTarget) {
                reset()
            }
        }

        const handleVisibility = () => {
            if (document.visibilityState !== "visible") {
                reset()
            }
        }

        window.addEventListener("pointerout", handleGlobalPointerOut)
        window.addEventListener("blur", reset)
        document.addEventListener("visibilitychange", handleVisibility)

        return () => {
            window.removeEventListener("pointerout", handleGlobalPointerOut)
            window.removeEventListener("blur", reset)
            document.removeEventListener("visibilitychange", handleVisibility)
        }
    }, [reset])

    return (
        <div
            ref={ref}
            className={cn("group relative rounded-xl bg-white border border-transparent", className)}
            onPointerMove={handlePointerMove}
            onPointerLeave={reset}
            onPointerEnter={reset}
        >
            {/* Border Gradient Layer */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-[inherit] duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom}, 
            ${gradientTo}, 
            transparent 100%
            )
            `,
                }}
            />

            {/* Inner Background to mimic border effect */}
            <div className="absolute inset-[1px] rounded-[inherit] bg-white" />

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
                    opacity: gradientOpacity,
                }}
            />

            {/* Content */}
            <div className="relative h-full">{children}</div>
        </div>
    )
})

MagicCard.displayName = "MagicCard"
