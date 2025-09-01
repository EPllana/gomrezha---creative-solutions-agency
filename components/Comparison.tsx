
import React from 'react';

// Fix: Changed icon type from JSX.Element to React.ReactNode to fix type error.
const Pill: React.FC<{ children: React.ReactNode, icon: React.ReactNode }> = ({ children, icon }) => (
    <div className="inline-flex items-center gap-2 border border-brand-gray-light bg-brand-gray-dark px-3 py-1 rounded-full text-sm text-brand-text-light mb-4">
        {icon}
        <span>{children}</span>
    </div>
);

const ComparisonItem: React.FC<{ children: React.ReactNode, isPositive: boolean }> = ({ children, isPositive }) => (
    <li className="flex items-start gap-3">
        {isPositive ? (
            <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex-shrink-0 flex items-center justify-center mt-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
            </div>
        ) : (
             <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex-shrink-0 flex items-center justify-center mt-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
            </div>
        )}
        <span className="text-brand-text-light">{children}</span>
    </li>
);

const Comparison: React.FC = () => {
    const otherAgencies = [
        "Slow and inconsistent communication",
        "Rely on single, outdated strategies",
        "Limited industry research and insight",
        "Outsource work to external teams",
        "Offer generalized, non-customized services"
    ];

    const goMrezhaFeatures = [
        "Fast and proactive communication approach",
        "Utilize omni-channel, updated strategies",
        "Tailored, data-driven strategies",
        "Specialized expertise in every project",
        "In-house, experienced professionals"
    ];

    return (
        <section className="py-20 md:py-28 bg-brand-gray-dark">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                     <Pill icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF602A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"></path><path d="M12 12L22 7"></path><path d="M12 12V22"></path><path d="M12 12L2 7"></path><path d="M7 4.5L17 9.5"></path></svg>}>
                        Comparison
                    </Pill>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Preferring goMrezha Over Competitors</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-brand-gray p-8 rounded-2xl border border-brand-gray-light">
                        <h3 className="text-2xl font-bold text-white mb-6">Other Agencies</h3>
                        <ul className="space-y-4">
                            {otherAgencies.map((item, index) => <ComparisonItem key={index} isPositive={false}>{item}</ComparisonItem>)}
                        </ul>
                    </div>
                    <div className="bg-brand-gray p-8 rounded-2xl border border-brand-orange/50">
                        <h3 className="text-2xl font-bold text-white mb-6">goMREZHA</h3>
                        <ul className="space-y-4">
                            {goMrezhaFeatures.map((item, index) => <ComparisonItem key={index} isPositive={true}>{item}</ComparisonItem>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;