
import React from 'react';

interface ProjectCardProps {
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    url?: string;
    imageWidth: number;
    imageHeight: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, title, description, imageUrl, url, imageWidth, imageHeight }) => (
    <div className="group bg-brand-gray rounded-2xl p-6 border border-brand-gray-light transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/10 flex flex-col">
        <div className="mb-4 overflow-hidden rounded-lg">
            <img 
                src={imageUrl} 
                alt={title} 
                width={imageWidth} 
                height={imageHeight} 
                loading="lazy" 
                decoding="async" 
                className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500" 
            />
        </div>
        <div className="flex-grow">
            <span className="text-brand-orange text-sm font-semibold">{category}</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-3">{title}</h3>
            <p className="text-brand-text-light mb-6">{description}</p>
        </div>
        {url ? (
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center w-full bg-brand-gray-light text-white font-semibold py-3 rounded-lg hover:bg-brand-orange transition-all duration-300 transform group-hover:-translate-y-px"
            >
                Open Project
            </a>
        ) : (
            <button 
                className="w-full bg-brand-gray-dark text-brand-text-light font-semibold py-3 rounded-lg cursor-not-allowed"
                disabled
            >
                Coming Soon
            </button>
        )}
    </div>
);


const Showcase: React.FC = () => {
    const projects: ProjectCardProps[] = [
        {
            category: "Landing Page",
            title: "BuildPro – Construction & Renovation Services",
            description: "A professional and modern website designed to showcase our construction projects and services.",
            imageUrl: "https://wsrv.nl/?url=https://epllana.github.io/Construction/img/home-slide-1.jpg&w=800&q=85&output=webp",
            url: "https://epllana.github.io/Construction/",
            imageWidth: 800,
            imageHeight: 408,
        },
        {
            category: "Web Design",
            title: "DentalCare – Clinic Website",
            description: "A modern and professional website for a dental care clinic, designed to highlight services, treatments, and provide an easy booking experience.",
            imageUrl: "https://cdn.dribbble.com/userupload/13341174/file/original-9a151d99f8b103b3d32aa1cb2b21bc20.jpg?resize=800x600&vertical=center",
            url:"https://epllana.github.io/Dentist-webpage/",
            imageWidth: 800,
            imageHeight: 600,
        },

        {
            category: "E-Commerce Website",
            title: "Outdoor – Online Store",
            description: "An e-commerce platform offering premium outdoor gear for hiking, camping, and climbing enthusiasts.",
            imageUrl: "https://cdn.dribbble.com/userupload/18347388/file/original-218fd92f8a9e311ec4d6e1a753be1b07.jpg?resize=752x752&vertical=center",
            url: "https://outdoor.ks.gentrit.space/",
            imageWidth: 752,
            imageHeight: 752,
        },
       {
            category: "Rent A Car App",
            title: "Syncro - Premium Car Rental",
            description: "A modern and user-friendly car rental app template, designed for easy booking, premium car showcases, and a seamless customer experience.",
            imageUrl: "https://cdn.dribbble.com/userupload/4262909/file/original-751982bd9a8f84df747a2254c7fe7733.png?resize=800x600&vertical=center",
            url: "https://epllana.github.io/Rent/#",
            imageWidth: 800,
            imageHeight: 600,
            }

    ];

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Innovative Solutions Showcase</h2>
                    <p className="text-brand-text-light mt-4">We pick the best of the best, and this is what we got. See our work that we are proud of.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
                </div>
            </div>
        </section>
    );
};

export default Showcase;