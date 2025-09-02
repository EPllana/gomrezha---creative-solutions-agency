
import React, { useState, useEffect, useRef } from 'react';

// Fix: Changed icon type from JSX.Element to React.ReactNode to fix type error.
const Pill: React.FC<{ children: React.ReactNode, icon: React.ReactNode }> = ({ children, icon }) => (
    <div className="inline-flex items-center gap-2 border border-brand-gray-light bg-brand-gray-dark px-3 py-1 rounded-full text-sm text-brand-text-light mb-4">
        {icon}
        <span>{children}</span>
    </div>
);

const AnimatedStatItem: React.FC<{ value: number; label: string; suffix?: string; startAnimation: boolean; }> = ({ value, label, suffix = '', startAnimation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (startAnimation) {
            let start = 0;
            const end = value;
            // Dynamic duration for a more natural feel across different values.
            // Capped at 2 seconds to avoid being too slow.
            const duration = Math.min(1000 + end * 10, 2000);
            const startTime = performance.now();

            const animateCount = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Ease-out cubic function for a smooth stop
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                // Use Math.round instead of Math.floor for a smoother transition to the final number
                const currentCount = Math.round(easedProgress * (end - start) + start);
                
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                } else {
                    setCount(end); // Ensure it ends on the exact value
                }
            };
            requestAnimationFrame(animateCount);
        }
    }, [startAnimation, value]);

    return (
        <div>
            <p className="text-4xl font-bold text-brand-orange">{count}{suffix}</p>
            <p className="text-brand-text-light">{label}</p>
        </div>
    );
};


const About: React.FC = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is in view, start the animation
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    // We only need to trigger this once, so disconnect the observer
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Clean up the observer when the component unmounts
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Pill icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF602A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>}>
                            About Us
                        </Pill>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Explore Who We Are and What Drives Us
                        </h2>
                        <p className="text-brand-text-light mb-8">
                            We have provided creative solutions for businesses to grow and succeed in the digital world.
                        </p>
                        <div className="grid grid-cols-2 gap-8" ref={statsRef}>
                            <AnimatedStatItem startAnimation={startAnimation} value={100} suffix="+" label="Projects Completed" />
                            <AnimatedStatItem startAnimation={startAnimation} value={7} suffix="+" label="Years of Experience" />
                            <AnimatedStatItem startAnimation={startAnimation} value={100} suffix="+" label="Satisfied Clients" />
                            <AnimatedStatItem startAnimation={startAnimation} value={10} suffix="+" label="Awards Won" />
                        </div>
                    </div>
                    <div>
                        <img src="https://miro.medium.com/v2/da:true/resize:fit:1000/format:webp/0*N9yijk5iJVqHaADD" alt="A modern and bright office space at goMrezha, fostering creativity and collaboration." width="1000" height="667" loading="lazy" decoding="async" className="rounded-2xl shadow-lg w-full h-auto object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;