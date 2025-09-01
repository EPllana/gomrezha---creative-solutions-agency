
import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    // Fix: Changed icon type from JSX.Element to React.ReactNode to fix type error.
    icon: React.ReactNode;
}

// Fix: Changed icon type from JSX.Element to React.ReactNode to fix type error.
const Pill: React.FC<{ children: React.ReactNode, icon: React.ReactNode }> = ({ children, icon }) => (
    <div className="inline-flex items-center gap-2 border border-brand-gray-light bg-brand-gray-dark px-3 py-1 rounded-full text-sm text-brand-text-light mb-4">
        {icon}
        <span>{children}</span>
    </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
    <div className="bg-brand-gray rounded-2xl p-6 border border-brand-gray-light transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50">
        <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-brand-text-light">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const services: ServiceCardProps[] = [
        { title: "Web Design & Development", description: "Custom-designed websites that combine stunning visuals with flawless functionality to elevate your web.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> },
        { title: "Brand Identity & Logo Design", description: "Creating unique brand identities that make a lasting impression and set your business apart.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> },
        { title: "Graphic Design", description: "Crafting thoughtful, user-centered experiences for businesses to thrive web and mobile flows.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> },
        { title: "Innovative UI/UX Design", description: "Designing user-focused solutions that create compelling & intuitive experiences across web and mobile.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> },
        { title: "Content Creation", description: "Engaging content that effectively communicates your message and connects with your audience.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> },
        { title: "SEO & Digital Marketing", description: "Designing user-focused solutions that create compelling & intuitive experiences across web and mobile.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
    ];
    const tags = ["Design", "Copywriting", "Digital Marketing", "Logo Design", "Digital Marketing", "Services", "Video Production", "Logo Design", "App Development"];

    return (
        <section className="py-20 md:py-28 bg-brand-gray-dark">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <Pill icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF602A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>}>
                        Services
                    </Pill>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Expertise That Drives Success</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => <ServiceCard key={index} {...service} />)}
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-brand-gray border border-brand-gray-light px-4 py-2 rounded-lg text-brand-text-light">{tag}</span>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <a href="#contact" className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-px hover:shadow-lg hover:shadow-brand-orange/20">
                        Book a Call
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
