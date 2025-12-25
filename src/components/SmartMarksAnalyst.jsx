import React from "react";
import { motion } from "framer-motion";
import { BarChart3, LineChart, Target, ClipboardList, ArrowUpRight } from "lucide-react";

const features = [
    {
        title: "සියලුම ලකුණු එකම තැනකින් (All-in-One Performance Tracker)",
        description: "දැන් ඔබට LMS එකේ කරන Online Exams වල ලකුණු වගේම, පන්තියට ඇවිත් ලියන Papers (Physical Exams) වල ලකුණුත් එකම තැනක සටහන් කර තබාගත හැක. ඔබේ සම්පූර්ණ ප්‍රගතිය තනි තිරයකින් බලාගන්න.",
        icon: BarChart3
    },
    {
        title: "දෘශ්‍යමය දත්ත විශ්ලේෂණය (Visual Progress Chart)",
        description: "නිකම්ම ලකුණු ලිස්ට් එකක් දිහා බලන් ඉන්නවාට වඩා, ඔබේ දියුණුව (හෝ පසුබෑම) පැහැදිලි ප්‍රස්ථාරයක් (Line Chart) මගින් පෙන්වයි. \"මගේ ප්‍රස්ථාරය ඉහළටද? පහළටද?\" යන්න බැලීමෙන් ඔබටම ස්වයං ඇගයීමක් කරගත හැක.",
        icon: LineChart
    },
    {
        title: "දුර්වලතා හඳුනා ගැනීම (Identify Weaknesses)",
        description: "පසුගිය මාස කිහිපය තුළ ඔබේ ලකුණු රටාව (Trend) නිරීක්ෂණය කිරීමෙන්, ඔබට අතපසු වූ පාඩම් හෝ කොටස් මොනවාදැයි පහසුවෙන් තේරුම් ගත හැක. විභාගයට පෙර වැරදි හදාගන්න හොඳම ක්‍රමයයි.",
        icon: Target
    },
    {
        title: "භෞතික පන්ති ලකුණු කළමනාකරණය (Physical Exam Log)",
        description: "පන්තියේදී ලියන Paper වල ලකුණු නැතිවෙන්නට නොදී, ගෙදර ආපු ගමන් මෙම System එකට ඇතුළත් කරන්න. විභාගය ළං වූ විට ඔබේ පැරණි ලකුණු සියල්ල ආරක්ෂිතව මෙහි ඇත.",
        icon: ClipboardList
    }
];

const AnimatedChart = () => {
    // Data points mimicking the user's image pattern
    // Scale: Y 0-100 mapped to SVG coord 250-50
    const essayPoints = [
        { x: 50, y: 220 },  // ~15
        { x: 150, y: 200 }, // ~25
        { x: 250, y: 180 }, // ~35
        { x: 350, y: 175 }, // ~37
        { x: 450, y: 160 }, // ~45
        { x: 550, y: 185 }, // ~32
    ];

    const mcqPoints = [
        { x: 50, y: 230 },  // ~10
        { x: 150, y: 210 }, // ~20
        { x: 250, y: 200 }, // ~25
        { x: 350, y: 170 }, // ~40
        { x: 450, y: 155 }, // ~47
        { x: 550, y: 225 }, // ~12
    ];

    const generatePath = (points) => {
        return points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
    };

    return (
        <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-xl shadow-purple-100 border border-purple-50 relative overflow-hidden">
            <h4 className="absolute top-6 left-8 text-neutral-400 font-['Gemunu_Libre'] text-sm tracking-widest uppercase">Performance Analytics</h4>

            <svg viewBox="0 0 600 300" className="w-full h-full max-w-[600px] overflow-visible">
                {/* Checkered Grid Background */}
                <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f0f0f0" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="600" height="250" fill="url(#grid)" opacity="0.5" />

                {/* Y Axis Labels */}
                {[0, 20, 40, 60, 80, 100].map((val, i) => (
                    <text key={i} x="-10" y={250 - (i * 40)} className="text-[10px] fill-neutral-300" textAnchor="end">{val}</text>
                ))}

                {/* Chart Lines */}
                {/* Essay Line (Purple) */}
                <motion.path
                    d={generatePath(essayPoints)}
                    fill="none"
                    stroke="#4c1d95" // Deep Purple
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* MCQ Line (Pink) */}
                <motion.path
                    d={generatePath(mcqPoints)}
                    fill="none"
                    stroke="#fb7185" // Rose Pink
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Points & Tooltips Simulation */}
                {essayPoints.map((p, i) => (
                    <motion.circle
                        key={`e-${i}`}
                        cx={p.x}
                        cy={p.y}
                        r="6"
                        fill="#4c1d95"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 2 + (i * 0.1) }}
                    />
                ))}
                {mcqPoints.map((p, i) => (
                    <motion.circle
                        key={`m-${i}`}
                        cx={p.x}
                        cy={p.y}
                        r="6"
                        fill="#fb7185"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 2.5 + (i * 0.1) }}
                    />
                ))}

                {/* X Axis Labels */}
                {['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Final'].map((label, i) => (
                    <text key={i} x={50 + (i * 100)} y="275" className="text-[10px] fill-neutral-400" textAnchor="middle">{label}</text>
                ))}
            </svg>

            {/* Legend */}
            <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#4c1d95]"></span>
                    <span className="text-xs font-bold text-[#4c1d95]">ESSAY MARKS</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fb7185]"></span>
                    <span className="text-xs font-bold text-[#fb7185]">MCQ MARKS</span>
                </div>
            </div>
        </div>
    );
};

export default function SmartMarksAnalyst() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row min-h-[600px] w-full gap-12 bg-white items-center">

                    {/* Right: Content (Now on Right) */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2 pl-0 lg:pl-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                                <BarChart3 size={24} />
                            </div>
                            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Analytics System</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 font-['Gemunu_Libre'] leading-tight mb-4">
                            Smart Marks Analyst<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-3xl md:text-4xl">
                                ඔබේ ලකුණු ප්‍රගතිය විශ්ලේෂනය සදහා 📊
                            </span>
                        </h2>

                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            ඔබේ අධ්‍යාපන ගමන නිවැරදි දිශාවට යනවාදැයි බලාගන්න, ලංකාවේ ප්‍රථම වතාවට ඔන්ලයින් සහ භෞතික පන්ති දෙකම ආවරණය වන පරිදි සැකසූ සුවිශේෂී විශ්ලේෂණ පද්ධතියකි.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
                                >
                                    <feature.icon className="text-purple-600 mb-3" size={24} />
                                    <h4 className="text-lg font-bold text-neutral-800 font-['Gemunu_Libre'] mb-2">{feature.title}</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Left: Chart Visual (Now on Left) */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
                        <AnimatedChart />
                    </div>

                </div>
            </div>
        </section>
    );
}
