
import React from 'react';

interface ProcessStepProps {
    step: number;
    title: string;
    description: string;
    imageUrl: string;
    isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, imageUrl, isLast }) => (
    <div className="relative group">
        <div className="relative bg-brand-gray rounded-2xl border border-brand-gray-light z-10 overflow-hidden h-80 flex items-center justify-center p-4">
            {/* The image is now contained within the padded container */}
            <img 
                src={imageUrl} 
                alt={title}
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Overlay for text, covers the entire card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Text content container, positioned at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {step}
                        </div>
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                    </div>
                    <p className="text-brand-text-light mt-3 pl-11">{description}</p>
                </div>
            </div>
        </div>
        {!isLast && (
            <svg className="absolute top-1/2 left-full -translate-y-1/2 hidden lg:block" width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C20.3333 12 70.4 12 99 12" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                <circle cx="95" cy="12" r="4" fill="#FF602A" className="opacity-0 group-hover:opacity-100 transition-opacity"/>
            </svg>
        )}
    </div>
);

const Process: React.FC = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">How Our Process Works</h2>
                    <p className="text-brand-text-light mt-4">We've refined our process to ensure every project is a masterpiece of efficiency and creativity.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
                    <ProcessStep 
                        step={1} 
                        title="Choose Your Plan" 
                        description="Explore our tailored plans to find the perfect fit for your agency's needs."
                        imageUrl="https://framerusercontent.com/images/ZVRnEnK1NIPis4YynhhF9bzJK9w.png?w=600&f=webp"
                    />
                    <ProcessStep 
                        step={2} 
                        title="Streamline Your Tasks"
                        description="Seamlessly manage your projects and tasks with our intuitive system."
                        imageUrl="https://framerusercontent.com/images/arihFNNyuK7GBFBTQmGTHmBzN8.png?w=600&f=webp"
                    />
                    <ProcessStep 
                        step={3} 
                        title="Perfect Your Vision"
                        description="Refine your work to ensure it aligns with your vision."
                        imageUrl="https://framerusercontent.com/images/FfiHRngiHieg6Q78ioLcSAKcUs4.png?w=600&f=webp"
                        isLast
                    />
                </div>
            </div>
        </section>
    );
};

export default Process;