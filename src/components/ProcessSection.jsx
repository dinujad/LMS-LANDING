import React, { useRef } from "react";
import { MagicCard } from "./ui/MagicCard";
import { motion } from "framer-motion";
import { AnimatedBeam } from "./ui/AnimatedBeam";
import {
    BookOpen,
    PenTool,
    FileText,
    ListTodo,
    Trophy,
    GraduationCap,
} from "lucide-react";

const ProcessCard = React.forwardRef(
    ({ title, description, icon: Icon, className, dark = false }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={`z-10 flex flex-col items-start justify-start shadow-2xl w-full max-w-[420px] border-l-[4px] rounded-3xl transition-all duration-500 hover:-translate-y-2 
                ${dark
                        ? "bg-neutral-900/50 backdrop-blur-md border-[1px] border-white/10 shadow-black/50 border-l-[#9c40ff]"
                        : "bg-white border-l-[#9c40ff] shadow-purple-500/10 bg-gradient-to-br from-white via-white to-purple-50/30 hover:shadow-purple-500/20"
                    } ${className}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
            >
                <div className="p-10 flex flex-col items-start gap-6 w-full relative">

                    <motion.div
                        className={`p-4 rounded-2xl relative z-10 ${dark ? "bg-white/10 text-[#9c40ff]" : "bg-white shadow-lg shadow-purple-100 text-[#9c40ff]"}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </motion.div>

                    <div>
                        <h3 className={`text-2xl font-bold font-['Gemunu_Libre'] tracking-wide mb-2 ${dark ? "text-white" : "text-black"}`}>
                            {title}
                        </h3>
                        <p className={`text-base leading-relaxed font-medium ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>
        );
    }
);

ProcessCard.displayName = "ProcessCard";

const Circle = React.forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={`z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-blue-200 bg-white p-2 shadow-md ${className}`}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export default function ProcessSection({ theme = "light" }) {
    const containerRef = useRef(null);
    const hubRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);

    const isDark = theme === "dark";

    return (
        <section
            className={`scroll-mt-32 pb-32 overflow-hidden ${isDark ? "bg-transparent" : "bg-white"}`}
            id="process"
            style={isDark ? {} : { paddingTop: "150px" }}
        >
            <div className="container mx-auto px-4 mb-32 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-5xl font-bold tracking-wide sm:text-6xl mb-6 font-['Gemunu_Libre'] mt-12 ${isDark ? "text-white" : "text-neutral-900"}`}
                >
                    අපගේ වැඩපිලිවෙළ
                </motion.h2>
            </div>

            <div
                className={`relative flex min-h-[800px] h-auto w-full items-center justify-center rounded-lg p-10 md:min-h-[600px] md:h-auto ${isDark ? "bg-transparent" : "bg-white"}`}
                ref={containerRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl mx-auto items-center justify-items-center relative">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8 md:gap-16 justify-center order-2 md:order-1">
                        <ProcessCard
                            ref={card1Ref}
                            title="Theory & Revision"
                            description="සම්පූර්ණ විෂය නිර්දේශයම විභාගයට මාසයකට පෙර ආවරණය කරමින් සිත් ඇදගන්නා සුළු විශිශ්ඨ ඉගැන්වීම් රටාව"
                            icon={BookOpen}
                            dark={isDark}
                        />
                        <ProcessCard
                            ref={card2Ref}
                            title="Essay Package"
                            description="විභාග ඉලක්කගත රචනා ප්‍රශ්න වැඩ පිළිවලක් වන අතර,සෑම වසරකම ලංකාවේ වැඩිම පිරිසක් සහභාගි වන රචනා ප්‍රශ්න වැඩපිළිවෙළයි."
                            icon={PenTool}
                            dark={isDark}
                        />
                    </div>

                    {/* Center Column (Hub) */}
                    <div className="flex flex-col items-center justify-center order-1 md:order-2 mb-8 md:mb-0">
                        <Circle
                            ref={hubRef}
                            className="h-24 w-24 border-none shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/30 transition-all duration-500"></div>
                            <GraduationCap className="h-10 w-10 text-white relative z-10" />
                        </Circle>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 md:gap-16 justify-center order-3">
                        <ProcessCard
                            ref={card3Ref}
                            title="Paper Class"
                            description="සරළ ප්‍රශ්න සිට ක්‍රමක් ක්‍රමයෙන් සංකීර්ණ ප්‍රශ්න දක්වා ප්‍රශ්න පත්‍ර ලිවීම සහ විවරණය තුලින් විභාග ප්‍රශ්න පත්‍ර සදහා සාර්ථකව පිළිතුරු ලිවීමට හුරුවක් ලබා දේ."
                            icon={FileText}
                            dark={isDark}
                        />
                        <ProcessCard
                            ref={card4Ref}
                            title="Todo List/ Day Plan"
                            description="බොහෝ ළමයින්ට ඇති ගැටලුවක් වන කාළය කළමනාකරණය කරගැනීමට ඇති නොහැකියාව මගහැර, දෛනිකව සිදුකල යුතු පාඩම් වැඩ ලබා දේ."
                            icon={ListTodo}
                            dark={isDark}
                        />
                        <ProcessCard
                            ref={card5Ref}
                            title="විශිෂ්ට ප්‍රතිඵල"
                            description="F to A , S to A, C to A ලෙස ප්‍රතිඵල පෙරළියක් ඇති කරමින් ළමුන්ගේ ජීවිත අතිසාර්ථකත්වයට පත්කල No.01 BIOLOGY පංතියයී."
                            icon={Trophy}
                            dark={isDark}
                        />
                    </div>
                </div>

                {/* Beams */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={hubRef}
                    toRef={card1Ref}
                    curvature={-50}
                    pathColor="#3b82f6"
                    gradientStartColor="#3b82f6"
                    gradientStopColor="#8b5cf6"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={hubRef}
                    toRef={card2Ref}
                    curvature={-20}
                    pathColor="#3b82f6"
                    gradientStartColor="#3b82f6"
                    gradientStopColor="#8b5cf6"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={hubRef}
                    toRef={card3Ref}
                    curvature={20}
                    pathColor="#3b82f6"
                    gradientStartColor="#3b82f6"
                    gradientStopColor="#8b5cf6"
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={hubRef}
                    toRef={card4Ref}
                    curvature={50}
                    pathColor="#3b82f6"
                    gradientStartColor="#3b82f6"
                    gradientStopColor="#8b5cf6"
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={hubRef}
                    toRef={card5Ref}
                    curvature={75}
                    pathColor="#3b82f6"
                    gradientStartColor="#3b82f6"
                    gradientStopColor="#8b5cf6"
                    reverse
                />
            </div>
        </section>
    );
}
