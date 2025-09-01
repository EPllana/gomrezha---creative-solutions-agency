
import React from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => (
    <div className="bg-brand-gray p-6 rounded-2xl border border-brand-gray-light text-center">
        <img src={imageUrl} alt={name} width="200" height="200" loading="lazy" decoding="async" className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-brand-gray-light object-cover" />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-brand-orange mb-4">{role}</p>
        <div className="flex justify-center gap-4">
            <a href="#" className="text-brand-text-light hover:text-white transition-transform hover:scale-110"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            <a href="#" className="text-brand-text-light hover:text-white transition-transform hover:scale-110"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3l-1.5.5C3.3 15.2 4.6 11.2 4.4 9.1H2.1c-.5 0-1-.3-1.2-.8.2-2.3 1-6.1 4-8.3 2.1-1.5 5.2-1.8 7.3-1.8 1 0 2.8.2 4 .9 1.1.7 1.8 1.8 2 3.2.1 1.2-.5 2.5-1.2 3.4-1.2 1.4-3.4 2.2-3.4 3.7v.5c0 .3.2.5.5.5h3.3c.3 0 .5-.2.5-.5s0-1.4 1.4-2.8c.1-.1.2-.3.2-.4 0-.2-.1-.4-.2-.5-1.5-1.7-1.4-4.5.3-6.2 1.5-1.5 3.6-2.2 5.6-2.2.4 0 .8.4.6.8-.5 1.4-1.3 3.1-2.1 4.5-1.2 2.2-2.8 4.3-4.6 6.1-.5.5-1.1.9-1.8 1.3H18c.4 0 .7.3.8.7.1.3 0 .7-.3.9-2.2 1.5-4.4 2-6.5 2h-1.3c-1.4 0-2.8-.4-4-1z"/></svg></a>
            <a href="#" className="text-brand-text-light hover:text-white transition-transform hover:scale-110"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10C22 6.486 17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></pre><path d="M13 11.261 16.299 8 12 8zM8.701 16l3.298-3.261L8 16z"></path><path d="M13 12.739 12.021 12 8 14.701 11.979 16zM12.021 12 16 9.299 12 8z"></path></svg></a>
        </div>
    </div>
);

const Team: React.FC = () => {
    const teamMembers: TeamMemberProps[] = [
        { name: "Ernis ", role: "CEO", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=200&h=200&fit=crop&crop=face" },
        { name: "Adem", role: "CEO", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&q=80&w=200&h=200&fit=crop&crop=face" },
        { name: "Leotrim", role: "UI/UX Designer", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80&w=200&h=200&fit=crop&crop=face" },
        { name: "Leonita", role: "Front-End Developer", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&q=80&w=200&h=200&fit=crop&crop=face" },
    ];
    
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Our Dedicated Team</h2>
                    <p className="text-brand-text-light mt-4">Our talented team delivers exceptional results and distills experience, creativity, and growth in every project.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => <TeamMemberCard key={index} {...member} />)}
                </div>
            </div>
        </section>
    );
};

export default Team;