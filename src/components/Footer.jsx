import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 Developed By Dinuja D @E media solution (pvt) Ltd</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: 'var(--dark-bg)',
        color: '#fff',
        marginTop: 'auto'
    }
};

export default Footer;
