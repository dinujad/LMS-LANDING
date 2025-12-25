import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={styles.container}>
            <Header />
            <main style={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative'
    },
    main: {
        flex: 1,
        width: '100%'
    }
};

export default Layout;
