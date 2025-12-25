import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaMicroscope, FaDna, FaGlobeAmericas, FaQuoteLeft, FaCheckCircle, FaBookOpen, FaFlask, FaFileAlt } from 'react-icons/fa';
import heroImage from '../assets/hero-image.png';
import HeroParticles from '../components/HeroParticles';
import { BorderBeam } from '../components/BorderBeam';
import ProcessSection from '../components/ProcessSection';
import AiTutor from '../components/AiTutor';
import SmartMarksAnalyst from '../components/SmartMarksAnalyst';
import LoginHelpSection from '../components/LoginHelpSection';


import { motion } from 'framer-motion';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div style={styles.home}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <HeroParticles />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        <span style={styles.gradientText}>Lakmal Chamara</span><br />
                        Biology
                    </h1>
                    <p style={styles.heroSubtitle}>
                        සිහින බලගන්වන වෙනස්ම BIO පන්තිය<br />
                        <span style={styles.heroSubtitleSmall}>ලංකාවේ ජනප්‍රියතම biology online Learning platform එකට සාදරයෙන් පිලිගමු</span>
                    </p>
                    <div style={styles.buttonGroup}>
                        <button
                            style={styles.primaryBtn}
                            onClick={() => window.location.href = 'https://lms.sarasavimaga.com/register'}
                        >
                            Class Registration
                        </button>
                        <button
                            style={styles.secondaryBtn}
                            onClick={() => window.location.href = 'https://lms.sarasavimaga.com/'}
                        >
                            Log In
                        </button>
                    </div>
                </div>

                <div style={styles.heroVisual}>
                    <img src={heroImage} alt="Lakmal Chamara" style={styles.heroImage} />
                </div>
            </section>

            {/* Content Wrapper with Curved Top */}
            <div style={styles.contentWrapper}>
                {/* Features Section (Replaces Featured Topics) */}
                <section style={styles.featured}>
                    <div style={styles.grid}>
                        {[
                            {
                                title: "නිවැරැදි විෂය කරුණු",
                                description: "විෂය නිර්දේශය ආවරණය වන නිවැරදි විෂය කරුණු සම්පිණ්ඩණය කර සිසුන්ට ඉගැන්වීම",
                                colorFrom: "#ffaa40",
                                colorTo: "#9c40ff",
                                icon: <FaBookOpen />
                            },
                            {
                                title: "විෂයානුබද්ධ ක්‍රියාකාරකම්",
                                description: "විෂය කරුණු මතක තබා ගැනීම පහසු කිරීම උදෙසා සුවිශේෂ ක්‍රමවේද සතිපතා සිදුකිරීම",
                                colorFrom: "#00c6ff",
                                colorTo: "#0072ff",
                                icon: <FaFlask />
                            },
                            {
                                title: "විශේෂ ප්‍රශ්න පත්‍ර",
                                description: "සුවිශේෂ ප්‍රශ්න පත්‍ර මඟින් සිසුන් දැනුමින් සහ අත්දැකීම් මඟින් උසස් පෙළ විභාගයට සූදානම් කරවීම",
                                colorFrom: "#11998e",
                                colorTo: "#38ef7d",
                                icon: <FaFileAlt />
                            }
                        ].map((item, index) => (
                            <div key={index} style={styles.cardLight} className="feature-card">
                                <div style={styles.cardIcon}>
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            scale: [1, 1.1, 1],
                                            filter: [`drop-shadow(0 0 0px ${item.colorTo}00)`, `drop-shadow(0 0 10px ${item.colorTo}80)`, `drop-shadow(0 0 0px ${item.colorTo}00)`]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>
                                <h3 style={styles.featureTitle}>{item.title}</h3>
                                <p style={styles.featureText}>{item.description}</p>
                                <BorderBeam
                                    size={100}
                                    duration={8 + index} // Stagger durations slightly
                                    delay={index * 2}
                                    colorFrom={item.colorFrom}
                                    colorTo={item.colorTo}
                                    borderWidth={2}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Spacer for visual separation */}
                <div className="h-24 md:h-32"></div>

                {/* AI Tutor Section */}
                <AiTutor />

                {/* Spacer */}
                <div className="h-24 md:h-32"></div>

                {/* Smart Marks Analyst Section */}
                <SmartMarksAnalyst />
            </div>

            {/* Process Section (Now on Dark Background) */}
            <section style={{ ...styles.sectionDark, paddingTop: '0', paddingBottom: '6rem' }}>
                <ProcessSection theme="dark" />
            </section>

            {/* White Section Wrapper with Curved Top */}
            <div style={styles.whiteSectionWrapper}>

                {/* Login & Registration Help Section */}
                <LoginHelpSection />

                {/* Contact Section */}

            </div>



        </div >
    );
};

const styles = {
    home: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0', // Removed inner gap as spacing is handled by wrapper
        paddingTop: '8rem',
        maxWidth: '100%', // Full width for wrapper
        margin: '0',
        paddingLeft: '0',
        paddingRight: '0',
        paddingBottom: '0'
    },
    hero: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '60vh',
        position: 'relative',
        maxWidth: '100%', // Allow full width
        margin: '0 auto',
        padding: '0 2rem 4rem 2rem' // Minimal padding to push to edges
    },
    heroContent: {
        flex: 1,
        maxWidth: '600px',
        zIndex: 2
    },
    heroTitle: {
        fontSize: '4.5rem',
        fontWeight: 'bold',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
        color: '#fff'
    },
    gradientText: {
        background: 'var(--primary-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
        fontSize: '2rem',
        color: 'var(--text-muted)',
        marginBottom: '2.5rem',
        maxWidth: '800px',
        lineHeight: '1.2',
        fontFamily: "'Gemunu Libre', sans-serif",
        fontWeight: '800',
        letterSpacing: '0.5px'
    },
    heroSubtitleSmall: {
        display: 'block',
        marginTop: '0.5rem',
        fontSize: '1.5rem',
        color: '#fff',
        fontFamily: "'Gemunu Libre', sans-serif",
        fontWeight: '700'
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem'
    },
    primaryBtn: {
        background: 'var(--neon-purple)',
        color: '#fff',
        border: 'none',
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(217, 70, 239, 0.4)'
    },
    secondaryBtn: {
        background: 'rgba(255,255,255,0.1)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    heroVisual: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '50%'
    },
    heroImage: {
        width: '100%',
        maxWidth: '500px',
        maxHeight: '500px', // Constrain height to frame
        height: 'auto',
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 20px rgba(217, 70, 239, 0.3))'
    },

    // NEW STYLES FOR WHITE SECTION
    contentWrapper: {
        position: 'relative', // Ensure it sits on top of fixed particles
        zIndex: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        borderBottomLeftRadius: '80px', // Added rounded bottom
        borderBottomRightRadius: '80px', // Added rounded bottom
        padding: '4rem 2rem',
        marginTop: '2rem',
        color: '#333',
        marginBottom: '4rem' // Spacing before next section
    },
    featured: {
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '2rem'
    },
    section: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem'
    },
    sectionDark: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '4rem'
    },
    sectionTitleLight: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--bg-dark)', // Dark title for white bg
        textAlign: 'center'
    },
    sectionTitleDark: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: '#fff', // White title for dark bg
        textAlign: 'center'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    },
    cardLight: {
        backgroundColor: '#f5f5f5',
        padding: '2.5rem 2rem', // Increased padding
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
        textAlign: 'center',
        position: 'relative', // Critical for BorderBeam
        overflow: 'hidden', // Contain the beam
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
    },
    featureTitle: {
        fontSize: '1.8rem',
        color: '#222',
        marginBottom: '1rem',
        fontFamily: "'Gemunu Libre', sans-serif",
        fontWeight: '700'
    },
    featureText: {
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        fontFamily: "'Inter', sans-serif" // Or Sinhala font if needed for body, Gemunu is clear enough
    },
    cardIcon: {
        fontSize: '2.5rem',
        color: 'var(--neon-purple)',
        marginBottom: '1rem'
    },
    processGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem'
    },
    processStepLight: {
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '1rem',
        border: '1px solid #eee',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    stepNumber: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'var(--neon-blue)',
        marginBottom: '1rem',
        opacity: 0.8
    },
    reviewCardLight: {
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '1rem',
        borderLeft: '4px solid var(--neon-purple)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        color: '#333'
    },
    quoteIcon: {
        color: 'var(--neon-purple)',
        fontSize: '1.5rem',
        marginBottom: '1rem'
    },
    reviewTextLight: {
        fontStyle: 'italic',
        marginBottom: '1rem',
        color: '#555'
    },
    reviewerLight: {
        fontWeight: 'bold',
        color: '#000'
    },
    contactSectionLight: {
        marginTop: '4rem',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: '4rem 2rem',
        borderRadius: '2rem',
        maxWidth: '1200px',
        margin: '4rem auto 0 auto'
    },
    contactTextLight: {
        color: '#666',
        marginBottom: '2rem',
        fontSize: '1.2rem'
    },
    contactGrid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
    },
    contactItem: {
        minWidth: '200px'
    },
    whiteSectionWrapper: {
        backgroundColor: '#fff',
        borderTopLeftRadius: '80px',
        borderTopRightRadius: '80px',
        padding: '6rem 2rem 4rem 2rem', // Top padding for spacing inside the curve
        marginTop: '-2rem', // Negative margin to pull it up slightly against the dark section if needed, or 0
        position: 'relative',
        zIndex: 10
    }
};

export default Home;
