
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

const PartnerLogo: React.FC<{ imageUrl: string; invert?: boolean }> = ({ imageUrl, invert }) => (
    <div className="flex items-center justify-center h-20">
        <img 
            src={imageUrl} 
            alt="Partner logo" 
            loading="lazy"
            decoding="async"
            className={`max-h-12 w-auto object-contain ${invert ? 'invert' : ''}`} 
        />
    </div>
);

interface Partner {
    imageUrl: string;
    invert?: boolean;
}

const Partners: React.FC = () => {
    const partners: Partner[] = [
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/05/2020NewLogoUPDATED-2.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-2-6.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-1-1.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-2-2.png', invert: true },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-2-7.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-3-1.png', invert: true },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-4-1.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/05/2020NewLogoUPDATED-1.png', invert: true },
        
    ];

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        slides: {
            perView: 3,
            spacing: 26,
        },
        breakpoints: {
            '(min-width: 640px)': {
                slides: { perView: 3, spacing: 48 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 5, spacing: 64 },
            },
        },
    });

    React.useEffect(() => {
        const slider = instanceRef.current;
        if (!slider) return;

        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => {
            clearTimeout(timeout);
        };

        const nextTimeout = () => {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
                slider.next();
            }, 1000); // 1-second interval
        };
        
        const mouseoverHandler = () => {
            mouseOver = true;
            clearNextTimeout();
        };

        const mouseoutHandler = () => {
            mouseOver = false;
            nextTimeout();
        };
        
        slider.on("created", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.container.addEventListener("mouseover", mouseoverHandler);
        slider.container.addEventListener("mouseout", mouseoutHandler);

        return () => {
            clearNextTimeout();
            // Fix: Replaced incorrect `.off()` method with `.on(..., true)` to remove event listeners, as per keen-slider API.
            slider.on("created", nextTimeout, true);
            slider.on("dragStarted", clearNextTimeout, true);
            slider.on("animationEnded", nextTimeout, true);
            slider.on("updated", nextTimeout, true);
            if (slider.container) {
                slider.container.removeEventListener("mouseover", mouseoverHandler);
                slider.container.removeEventListener("mouseout", mouseoutHandler);
            }
        };
    }, [instanceRef]);

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-6 text-center">
                <p className="text-xl text-brand-text-light mb-12">
                    Powering success for 100+ companies globally
                </p>
                <div ref={sliderRef} className="keen-slider">
                    {partners.map((partner, index) => (
                         <div className="keen-slider__slide" key={index}>
                            <PartnerLogo imageUrl={partner.imageUrl} invert={partner.invert} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;