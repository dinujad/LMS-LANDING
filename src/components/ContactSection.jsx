import React from "react";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="mt-16 mx-auto max-w-[1200px] bg-[#f0f0f0] rounded-[2rem] py-16 px-8 text-center"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-[2.5rem] text-[#222] font-semibold mb-4 font-sans">
                    Contact Me
                </h2>
                <p className="text-[#666] text-lg mb-12">
                    Ready to start your journey? Get in touch.
                </p>

                <div className="flex flex-wrap justify-center gap-16 mb-12">
                    <div className="min-w-[200px]">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 text-lg">+94 71 138 4559</p>
                    </div>
                    <div className="min-w-[200px]">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 text-lg">support@sarasavimaga.com</p>
                    </div>
                </div>

                <button className="bg-[var(--neon-purple)] text-white border-0 py-4 px-8 rounded-lg text-base font-bold cursor-pointer shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:opacity-90 transition-opacity">
                    Send Message
                </button>
            </div>
        </section>
    );
};

export default ContactSection;
