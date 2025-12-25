import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    ShieldCheck,
    UserPlus,
    CheckCircle,
    AlertCircle,
    Phone,
    Lock,
    LogIn,
    Truck
} from "lucide-react";

// --- Font Instructions ---
// ඔයාගේ index.html එකේ <head> කොටසට මේ Link එක තියෙන බව තහවුරු කරගන්න:
// <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400;500;600;700&display=swap" rel="stylesheet">

const StepCard = ({ number, title, children, icon: Icon, isWarning = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow ${isWarning
            ? "bg-red-50/90 border-red-500"
            : "bg-white border-purple-500"
            }`}
    >
        {/* Number Circle */}
        <div className="shrink-0">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl text-white shadow-md ring-4 ring-white ${isWarning ? "bg-red-500" : "bg-purple-600"}`}>
                {number}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
                <h3 className={`text-xl font-bold font-['Gemunu_Libre'] tracking-wide ${isWarning ? "text-red-800" : "text-gray-800"}`}>
                    {title}
                </h3>
                {Icon && <Icon size={20} className={isWarning ? "text-red-500" : "text-purple-500"} strokeWidth={2} />}
            </div>

            <div className={`text-base leading-relaxed text-justify ${isWarning ? "text-red-700" : "text-gray-600"}`}>
                {children}
            </div>
        </div>
    </motion.div>
);

const LoginHelpSection = () => {
    return (
        <section className="w-full py-16 font-sans bg-gray-50/50">
            {/* Main Container - Adjusted to fill space better */}
            <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">

                {/* Header Section - Centered Alignment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <div className="flex justify-center mb-6">
                        <span className="py-2 px-6 rounded-full bg-purple-100 text-purple-800 font-bold text-sm tracking-wider shadow-sm">
                            STUDENT GUIDE
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-['Gemunu_Libre'] mb-6 tracking-tight leading-tight">
                        LMS එකට (Login) සහ ලියාපදිංචි වන ආකාරය
                    </h2>

                    {/* Intro Text Centered Properly */}
                    <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto">
                        අපගේ පන්තියට අලුතින් සම්බන්ධ වන හෝ දැනටමත් සම්බන්ධ වී සිටින සිසුන් සඳහා පහත උපදෙස් මාලාව සකස් කර ඇත.
                    </p>
                </motion.div>

                {/* Content Grid - 4:8 Split to extend right side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Login Instructions (Takes 4/12 space = 33%) */}
                    <div className="lg:col-span-4 flex flex-col gap-8 sticky top-8 z-20">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl ring-1 ring-white/20"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner">
                                        <LogIn size={32} className="text-white" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-3xl font-bold font-['Gemunu_Libre'] tracking-wide">
                                        Login වීම
                                        <span className="block text-lg font-normal text-purple-200 mt-1 font-sans opacity-90">පරණ ළමුන් සඳහා</span>
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Login Step 01 */}
                                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors group">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-purple-500/30 rounded-lg group-hover:bg-purple-500/50 transition-colors shrink-0">
                                                <Smartphone size={24} className="text-purple-100" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1 text-white">පියවර 01</h4>
                                                <p className="text-purple-100 text-sm leading-relaxed text-left">
                                                    වෙබ් අඩවියේ ඉහළින්ම ඇති <strong>"Student Login"</strong> බොත්තම Click කරන්න.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Login Step 02 */}
                                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors group">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-purple-500/30 rounded-lg group-hover:bg-purple-500/50 transition-colors shrink-0">
                                                <Lock size={24} className="text-purple-100" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1 text-white">පියවර 02</h4>
                                                <p className="text-purple-100 text-sm leading-relaxed text-left">
                                                    ඔබගේ <strong>ජංගම දුරකථන අංකය</strong> සහ <strong>මුරපදය</strong> ඇතුළත් කර Login වන්න.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>

                        {/* Hotline Box */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-white border border-purple-100 rounded-3xl p-8 shadow-xl shadow-purple-500/5 flex items-start gap-6 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-green-100"></div>
                            <div className="bg-green-100 p-4 rounded-2xl text-green-600 shadow-sm relative z-10 shrink-0">
                                <Phone size={28} strokeWidth={2.5} />
                            </div>
                            <div className="relative z-10 flex-1">
                                <h4 className="text-xl font-bold text-gray-800 font-['Gemunu_Libre'] mb-2">ගැටලුවක්ද?</h4>
                                <p className="text-gray-600 text-sm leading-relaxed text-left">
                                    Login වීමේදී හෝ OTP ලැබීමේදී යම් ගැටලුවක් පැන නැගුනේ නම්, අපගේ කාර්යාලීය දුරකථන අංකය (Hotline) අමතන්න.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Registration Steps (Takes 8/12 space = 66%) */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="flex items-center gap-4 mb-2 pb-6 border-b border-gray-100">
                            <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
                                <UserPlus size={32} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 font-['Gemunu_Libre']">අලුත් සිසුන් ලියාපදිංචි වීම</h3>
                                <p className="text-gray-500 font-medium">නව ගිණුමක් ආරම්භ කිරීම සඳහා පියවර</p>
                            </div>
                        </div>

                        <div className="relative space-y-8">
                            <div className="absolute left-[3rem] top-8 bottom-8 w-0.5 bg-purple-200 -z-0 hidden sm:block"></div>

                            <StepCard number="01" title="ගිණුමක් ඇරඹීම" icon={UserPlus}>
                                Login පිටුවේ ඇති <strong>"Create Account"</strong> (හෝ Create) බොත්තම Click කරන්න.
                            </StepCard>

                            <StepCard number="02" title="දුරකථන අංකය තහවුරු කිරීම" icon={Smartphone}>
                                <p className="mb-3 text-justify">
                                    ඔබගේ භාවිතයේ පවතින නිවැරදි ජංගම දුරකථන අංකය ඇතුළත් කරන්න.
                                </p>
                                <div className="bg-blue-50 border border-blue-100 text-blue-800 text-sm p-4 rounded-xl flex gap-3 items-start">
                                    <ShieldCheck size={20} className="mt-0.5 shrink-0 text-blue-600" />
                                    <span className="font-medium text-justify">මෙම අංකයට <strong>OTP කේතයක්</strong> ලැබෙන බැවින්, වැඩ කරන අංකයක් ලබා දීමට වග බලා ගන්න. SMS මගින් ලැබෙන කේතය ඇතුළත් කර Verify කරන්න.</span>
                                </div>
                            </StepCard>

                            <StepCard number="03" title="තොරතුරු ඇතුළත් කිරීම" icon={Truck} isWarning={true}>
                                <p className="mb-4 text-gray-800 text-justify">
                                    ලැබෙන Form එකේ ඔබේ නම, පාසල සහ අනෙකුත් විස්තර පුරවන්න.
                                    <span className="block mt-2 text-gray-600 text-sm">
                                        <Lock size={14} className="inline mr-1" />
                                        <strong>මුරපදය (Password)</strong> සඳහා ඔබට සැමදා මතක සිටින සරල මුරපදයක් ලබා දෙන්න.
                                    </span>
                                </p>

                                <div className="bg-red-50 border border-red-200 p-5 rounded-xl relative overflow-hidden">
                                    <div className="absolute right-0 top-0 p-4 opacity-5">
                                        <Truck size={100} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3 text-red-700 font-bold uppercase tracking-wider text-sm">
                                            <AlertCircle size={18} />
                                            <span>ඉතාම වැදගත්: Delivery Address</span>
                                        </div>
                                        <p className="text-red-900 text-sm leading-relaxed font-medium text-justify">
                                            නිවසට Tute ගෙන්වා ගැනීම සඳහා ලිපිනය ඇතුළත් කරන විට ඉතාමත් සැලකිලිමත් වන්න.
                                            අප විසින් කුරියර් (Courier) කරන Tute සහ Papers ලැබෙන්නේ ඔබ මෙහි ඇතුළත් කරන ලිපිනයට බැවින්,
                                            ලිපිනය <strong className="underline decoration-red-400 decoration-2 underline-offset-2">ඉතාම නිවැරදිව හා පැහැදිලිව</strong> සඳහන් කරන්න.
                                        </p>
                                    </div>
                                </div>
                            </StepCard>

                            <StepCard number="04" title="ලියාපදිංචිය සම්පූර්ණ කිරීම" icon={CheckCircle}>
                                සියලු විස්තර පරීක්ෂා කර බලා <strong>"Register"</strong> බොත්තම ඔබන්න. දැන් ඔබට LMS එක හරහා පන්ති සමඟ සම්බන්ධ විය හැක.
                            </StepCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginHelpSection;