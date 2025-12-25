import React from 'react';

const topicsData = [
    {
        id: 1,
        title: "Cell Biology",
        description: "The study of cell structure and function, and it revolves around the concept that the cell is the fundamental unit of life.",
        image: "https://placehold.co/600x400/2E7D32/FFF?text=Cell+Biology"
    },
    {
        id: 2,
        title: "Genetics",
        description: "The study of genes, genetic variation, and heredity in organisms.",
        image: "https://placehold.co/600x400/81C784/333?text=Genetics"
    },
    {
        id: 3,
        title: "Evolutionary Biology",
        description: "The subfield of biology that studies the evolutionary processes (natural selection, common descent, speciation) that produced the diversity of life on Earth.",
        image: "https://placehold.co/600x400/FFEB3B/333?text=Evolution"
    },
    {
        id: 4,
        title: "Ecology",
        description: "The branch of biology that deals with the relations of organisms to one another and to their physical surroundings.",
        image: "https://placehold.co/600x400/1B2631/FFF?text=Ecology"
    }
];

const Topics = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Explore pixCells</h1>
            {/* Renamed to match Nav */}
            <div style={styles.grid}>
                {topicsData.map((topic) => (
                    <div key={topic.id} style={styles.card}>
                        <img src={topic.image} alt={topic.title} style={styles.image} />
                        <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>{topic.title}</h2>
                            <p style={styles.cardDesc}>{topic.description}</p>
                            <button style={styles.readMore}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '8rem 2rem 2rem 2rem', // Top padding for fixed header
        maxWidth: '1200px',
        margin: '0 auto'
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: '#fff'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.05)', // Dark translucent bg
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'transform 0.3s ease',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        opacity: 0.8
    },
    cardContent: {
        padding: '1.5rem'
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#fff'
    },
    cardDesc: {
        color: '#B0B0B0',
        marginBottom: '1.5rem',
        lineHeight: '1.5'
    },
    readMore: {
        backgroundColor: 'transparent',
        border: '1px solid var(--neon-purple)',
        color: 'var(--neon-purple)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s'
    }
};

export default Topics;
