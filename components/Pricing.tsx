
import React from 'react';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    isCustom?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, features, isPopular, isCustom }) => (
    <div className={`p-8 rounded-2xl border ${isPopular ? 'border-brand-orange bg-brand-gray' : 'border-brand-gray-light bg-brand-gray-dark'}`}>
        <div className="flex justify-between items-start">
            <div>
                 <h3 className="text-2xl font-bold text-white">{title}</h3>
                 <p className="text-brand-text-light mt-1">{description}</p>
            </div>
             {isPopular && <span className="text-xs bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full font-semibold">2 Spots Available</span>}
        </div>
        
        <div className="my-8">
            <span className="text-5xl font-extrabold text-white">{price}</span>
            {!isCustom && <span className="text-brand-text-light">/project</span>}
        </div>
        
        <a href="#contact" className={`block text-center w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-px ${isPopular ? 'bg-brand-orange text-white hover:bg-opacity-90' : 'bg-brand-gray-light text-white hover:bg-brand-orange'}`}>
            {isCustom ? 'Reach Out Today' : 'Get Started'}
        </a>
        
        <ul className="space-y-4 mt-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-brand-text">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-brand-gray-dark">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Flexible Plans for Every Need</h2>
                    <p className="text-brand-text-light mt-4">We offer tailored solutions to fit your business, whether you're just starting out or looking to scale.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard 
                        title="Basic Package"
                        description="Great for small projects"
                        price="$1,499"
                        features={[
                            "Up to 3 Unique Subpages",
                            "Basic SEO setup",
                            "72-hour delivery",
                            "Initial discovery call",
                            "High-quality design included",
                            "User-friendly interface",
                            "24/7 customer support",
                            "Satisfaction guaranteed"
                        ]}
                    />
                     <PricingCard 
                        title="Pro Package"
                        description="For established businesses"
                        price="$2,999"
                        features={[
                            "Pause or cancel anytime",
                            "Up to 3 Unique Subpages",
                            "Basic SEO setup",
                            "72-hour delivery",
                            "Initial discovery call",
                            "High-quality design included",
                            "User-friendly interface",
                            "24/7 customer support",
                            "Satisfaction guaranteed"
                        ]}
                        isPopular
                    />
                     <PricingCard 
                        title="Custom Solutions"
                        description="Tailored to your specific needs"
                        price="$1,199"
                        isCustom
                        features={[
                            "Ongoing support options available",
                            "Custom Design & Development",
                            "Consultation to define scope"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
