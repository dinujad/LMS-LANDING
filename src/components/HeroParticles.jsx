import React, { useEffect, useRef } from 'react';

const HeroParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const particles = [];
        const particleCount = 50;
        const colors = ['rgba(217, 70, 239, 0.5)', 'rgba(56, 189, 248, 0.5)', 'rgba(168, 85, 247, 0.5)']; // Neon colors

        let mouse = { x: null, y: null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight; // Or specific hero height
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                // Spawn primarily at the edges (Left or Right)
                const isLeft = Math.random() > 0.5;
                this.x = isLeft ? -10 : canvas.width + 10; // Start slightly off-screen
                this.y = Math.random() * canvas.height; // Random height

                this.size = Math.random() * 5 + 2;

                // Move inwards
                this.speedX = isLeft ? (Math.random() * 1 + 0.5) : -(Math.random() * 1 + 0.5);
                this.speedY = Math.random() * 1 - 0.5; // Slight vertical drift

                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.originalX = this.x;
                this.originalY = this.y;
            }

            update() {
                // Normal movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction (Follow/Attract)
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = 200;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        const directionX = forceDirectionX * force * 2; // Attraction strength
                        const directionY = forceDirectionY * force * 2;
                        this.x += directionX;
                        this.y += directionY;
                    }
                }

                // Reset when going off screen (on the opposite side or top/bottom)
                if (this.x < -20 || this.x > canvas.width + 20 || this.y < -20 || this.y > canvas.height + 20) {
                    // Check if it's "too far" from its starting side to prevent instant reset
                    // Actually, just letting them flow across and reset is fine, or fade out.
                    // Simple reset logic:
                    if ((this.speedX > 0 && this.x > canvas.width) || (this.speedX < 0 && this.x < 0)) {
                        this.reset();
                    }
                    // Vertical boundary reset
                    if (this.y < 0 || this.y > canvas.height) {
                        this.reset();
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }} />;
};

export default HeroParticles;
