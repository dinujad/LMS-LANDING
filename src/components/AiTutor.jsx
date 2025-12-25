import React from "react";
import { Ripple } from "./ui/Ripple";
import { motion } from "framer-motion";
import { Bot, AlertTriangle, Target, Moon, Languages } from "lucide-react";

const features = [
    {
        title: "AI පාඩම් සහායකයා (AI-Powered Study Assistant)",
        description: "මෙය ලක්මාල් චාමර සර්ගේ සිසුන් සඳහා සකස් කළ බාහිර අධ්‍යාපනික මෙවලමකි. ඔබේ පාඩම් වැඩ පහසු කරගැනීමට සහ ඉක්මනින් කරුණු මතක් කරගැනීමට මෙය අමතර සහායකයෙක් ලෙස (Secondary Support) භාවිතා කළ හැක.",
        icon: Bot
    },
    {
        title: "නිරවද්‍යතාවය සහ තහවුරු කරගැනීම (Accuracy & Verification)",
        description: "මෙය කෘතිම බුද්ධිය (AI) මගින් ස්වයංක්‍රීයව ක්‍රියාත්මක වන පද්ධතියක් බැවින්, කලාතුරකින් වැරදි හෝ අසම්පූර්ණ පිළිතුරු ලබා දිය හැක. එබැවින් සැක සහිත තැනකදී සැමවිටම සර්ගේ පන්තියේ සටහන් (Tute/Notes) සහ සම්පත් පොත් මගින් කරුණු තහවුරු කරගන්න.",
        icon: AlertTriangle
    },
    {
        title: "A/L ජීව විද්‍යාවට පමණක් සීමා වේ (Strictly A/L Biology)",
        description: "ඔබේ අවධානය වෙනතක යොමු වීම වැළැක්වීමට, මෙම AI සහායකයා පුහුණු කර ඇත්තේ ජීව විද්‍යාව විෂය නිර්දේශයට අදාළ ප්‍රශ්න වලට පමණක් පිළිතුරු දීමටයි. වෙනත් බාහිර මාතෘකා (දේශපාලනය, චිත්‍රපට ආදිය) ප්‍රතික්ෂේප කරනු ලැබේ.",
        icon: Target
    },
    {
        title: "24/7 ක්ෂණික පිළිතුරු (Instant Help Anytime)",
        description: "රාත්‍රී කාලයේ පාඩම් කරන විට එන ගැටලු විසඳා ගැනීමට මෙය කදිම විසඳුමකි. ගුරුතුමා සම්බන්ධ කරගැනීමට නොහැකි වෙලාවකදී මූලික මගපෙන්වීමක් ලබා ගැනීමට මෙය භාවිතා කළ හැක.",
        icon: Moon
    },
    {
        title: "සිංහල හා ඉංග්‍රීසි මාධ්‍ය සහාය (Bilingual Support)",
        description: "ඔබට පහසු ඕනෑම භාෂාවකින් (සිංහල, English හෝ Singlish) ප්‍රශ්න ඇසීමේ හැකියාව ඇත. සංකීර්ණ ජීව විද්‍යාත්මක සංකල්ප සරලව තේරුම් ගැනීමට මෙය උපකාරී වේ.",
        icon: Languages
    }
];

// Custom Animated AI Bot Component
const AnimatedBot = () => (
    <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8 relative z-20"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
        {/* Glow Effect */}
        <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="url(#glow)"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Head Base */}
        <rect x="60" y="60" width="80" height="70" rx="20" fill="white" stroke="#9c40ff" strokeWidth="4" />

        {/* Eyes Container */}
        <rect x="70" y="75" width="60" height="25" rx="12" fill="#1a1a1a" />

        {/* Eyes (Blinking) */}
        <motion.circle
            cx="85"
            cy="87.5"
            r="5"
            fill="#3B82F6"
            animate={{ scaleY: [1, 0.1, 1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1, 0.8, 1] }}
        />
        <motion.circle
            cx="115"
            cy="87.5"
            r="5"
            fill="#3B82F6"
            animate={{ scaleY: [1, 0.1, 1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1, 0.8, 1] }}
        />

        {/* Mouth/Voice Line */}
        <motion.rect
            x="90"
            y="110"
            width="20"
            height="4"
            rx="2"
            fill="#9c40ff"
            animate={{ width: [20, 10, 25, 15, 20] }}
            transition={{ duration: 1, repeat: Infinity }}
        />

        {/* Antenna */}
        <line x1="100" y1="60" x2="100" y2="40" stroke="#9c40ff" strokeWidth="4" />
        <motion.circle
            cx="100"
            cy="35"
            r="6"
            fill="#D946EF"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Leaf/Bio Element */}
        <motion.path
            d="M130 120 C130 120 150 110 160 130 C170 150 150 160 150 160"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <path d="M160 130 L150 160" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />

        <defs>
            <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(80)">
                <stop stopColor="#9c40ff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#9c40ff" stopOpacity="0" />
            </radialGradient>
        </defs>
    </motion.svg>
);

export default function AiTutor() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row min-h-[700px] w-full gap-8 bg-white overflow-hidden">
                    {/* Left: Ripple Effect */}
                    <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-full bg-slate-50 rounded-[3rem] border border-purple-100 flex flex-col items-center justify-center overflow-hidden shadow-lg shadow-purple-500/5 order-2 lg:order-1">
                        <Ripple />

                        {/* Animated Visual */}
                        <AnimatedBot />

                        <div className="z-10 text-center px-6">
                            <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-['Gemunu_Libre'] drop-shadow-sm">
                                BIOLOGY<br />AI BUDDY
                            </h3>
                            <p className="mt-4 text-lg text-neutral-500 font-medium">Your 24/7 Smart Study Companion</p>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2 pl-0 lg:pl-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 font-['Gemunu_Libre'] leading-tight mb-4">
                            ලංකාවේ ප්‍රථම වතාවට <span className="text-[#9c40ff]">BIOLOGY</span> සදහාම වෙන් වූ <span className="text-blue-600">AI</span> එකක් ඔබට අපගේ LMS එක මගින් අත්දැකීමට හැක
                        </h2>
                        <p className="text-xl text-neutral-600 font-medium mb-10 leading-relaxed border-l-4 border-[#9c40ff] pl-4 bg-purple-50/50 py-2 rounded-r-lg">
                            මෙය මගින් ඔබට ඕනෙම BIOLOGY සම්බන්ද ගැටලුවක් දැනගත හැක.
                        </p>

                        <h4 className="text-2xl font-bold text-neutral-800 font-['Gemunu_Libre'] mb-6 flex items-center gap-3">
                            <span className="p-2 bg-blue-100/50 rounded-lg text-blue-600">✨</span>
                            Biology AI Tutor - විශේෂාංග (Key Features)
                        </h4>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="mt-1 p-2 rounded-full bg-purple-50 text-[#9c40ff] group-hover:bg-[#9c40ff] group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <feature.icon size={20} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-neutral-800 font-['Inter'] group-hover:text-[#9c40ff] transition-colors">{feature.title}</h5>
                                        <p className="text-sm text-neutral-600 leading-relaxed mt-1">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
