import React from 'react';

const Cta: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="bg-brand-gray border border-brand-gray-light rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute -right-40 -top-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>
                    <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Empower Your Brand With<br/>Bold Creative Solutions
                        </h2>
                        <p className="max-w-xl mx-auto text-brand-text-light mb-8">
                            Let us be the architects of your vision. We build digital solutions that inspire and connect. Let's talk about how to take your brand to new heights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+19177275779" className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-px hover:shadow-lg hover:shadow-brand-orange/20">
                                Schedule a Call
                            </a>
                             <a href="mailto:support@gomrezha.com?subject=Project%20Inquiry%20from%20Website" className="bg-brand-gray-light text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-gray-dark transition-all flex items-center justify-center gap-2 transform hover:-translate-y-px">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;