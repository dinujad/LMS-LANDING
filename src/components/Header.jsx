import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={styles.headerWrapper}>
            <header style={styles.header}>
                <div style={styles.logo}>
                    <span style={styles.logoText}>Lakmal Chamara Biology</span>
                </div>

                {/* Desktop Navigation - Exact same style as before */}
                {!isMobile && (
                    <nav>
                        <ul style={styles.navList}>
                            <li style={styles.navItem}>
                                <Link to="/">Home</Link>
                            </li>
                            {/* Topics removed as requested */}
                            <li style={styles.navItem}>
                                {isHome ? (
                                    <span onClick={() => scrollToSection('process')}>Our Process</span>
                                ) : (
                                    <Link to="/#process">Our Process</Link>
                                )}
                            </li>
                            <li style={styles.navItem}>
                                {isHome ? (
                                    <span onClick={() => scrollToSection('reviews')}>Student Reviews</span>
                                ) : (
                                    <Link to="/#reviews">Student Reviews</Link>
                                )}
                            </li>
                            <li style={styles.navItem}>
                                {isHome ? (
                                    <span onClick={() => scrollToSection('contact')}>Contact</span>
                                ) : (
                                    <Link to="/#contact">Contact</Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Actions (Login) - Hidden on mobile in the header to save space, moved to menu */}
                {!isMobile && (
                    <div style={styles.actions}>
                        <button
                            style={styles.bookBtn}
                            onClick={() => window.location.href = 'https://lms.sarasavimaga.com/'}
                        >
                            Student Login
                        </button>
                    </div>
                )}

                {/* Mobile Toggle Button */}
                {isMobile && (
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={styles.mobileToggle}>
                        {isMenuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
                    </button>
                )}
            </header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        style={styles.mobileMenu}
                    >
                        <ul style={styles.mobileNavList}>
                            <li style={styles.mobileNavItem}>
                                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            </li>
                            <li style={styles.mobileNavItem}>
                                {isHome ? (
                                    <span onClick={() => scrollToSection('process')}>Our Process</span>
                                ) : (
                                    <Link to="/#process" onClick={() => setIsMenuOpen(false)}>Our Process</Link>
                                )}
                            </li>
                            <li style={styles.mobileNavItem}>
                                {isHome ? (
                                    <span onClick={() => scrollToSection('reviews')}>Student Reviews</span>
                                ) : (
                                    <Link to="/#reviews" onClick={() => setIsMenuOpen(false)}>Student Reviews</Link>
                                )}
                            </li>
                            <li style={styles.mobileNavItem}>
                                {isHome ? (
                                    <span onClick={() => scrollToSection('contact')}>Contact</span>
                                ) : (
                                    <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                                )}
                            </li>
                            <li style={{ ...styles.mobileNavItem, marginTop: '1rem' }}>
                                <button
                                    style={{ ...styles.bookBtn, width: '100%', justifyContent: 'center' }}
                                    onClick={() => window.location.href = 'https://lms.sarasavimaga.com/'}
                                >
                                    Student Login
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Exact original styles preserved + Mobile styles added
const styles = {
    headerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        pointerEvents: 'none'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--nav-bg)', // Keep original ref
        background: 'rgba(255, 255, 255, 0.9)', // Fallback/match original look
        backdropFilter: 'blur(10px)',
        padding: '0.75rem 2rem',
        borderRadius: '50px',
        width: '90%',
        maxWidth: '1200px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        color: '#000',
        pointerEvents: 'auto',
        position: 'relative' // Needed for local stacking
    },
    logo: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '-0.5px',
        whiteSpace: 'nowrap'
    },
    logoText: {
        color: '#000'
    },
    navList: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    navItem: {
        fontSize: '0.9rem',
        fontWeight: '500',
        color: '#333',
        cursor: 'pointer',
        transition: 'color 0.2s',
        whiteSpace: 'nowrap'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
    },
    bookBtn: {
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        padding: '0.6rem 1.5rem',
        borderRadius: '25px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        display: 'flex'
    },
    // New Mobile Styles
    mobileToggle: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mobileMenu: {
        position: 'absolute',
        top: '100px', // Just below the header
        width: '90%',
        maxWidth: '400px', // Mobile menu width constraint
        backgroundColor: '#fff',
        borderRadius: '2rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        padding: '2rem',
        pointerEvents: 'auto',
        zIndex: 1001
    },
    mobileNavList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        textAlign: 'center'
    },
    mobileNavItem: {
        fontSize: '1.1rem',
        fontWeight: '500',
        color: '#333',
        cursor: 'pointer'
    }
};

export default Header;
