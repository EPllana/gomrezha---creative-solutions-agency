import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-gradient-header-top)"/>
            <path d="M2 7L2 17L12 22L12 12L2 7Z" fill="url(#logo-gradient-header-left)"/>
            <path d="M22 7L22 17L12 22L12 12L22 7Z" fill="url(#logo-gradient-header-right)"/>
            <defs>
                <linearGradient id="logo-gradient-header-top" x1="12" y1="2" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF8A65"/>
                    <stop offset="1" stopColor="#FF602A"/>
                </linearGradient>
                <linearGradient id="logo-gradient-header-left" x1="2" y1="12" x2="12" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF602A" stopOpacity="0.8"/>
                    <stop offset="1" stopColor="#C94B20"/>
                </linearGradient>
                <linearGradient id="logo-gradient-header-right" x1="22" y1="12" x2="12" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF602A"/>
                    <stop offset="1" stopColor="#C94B20"/>
                </linearGradient>
            </defs>
        </svg>
        <span className="text-2xl font-bold text-white tracking-wide">goMrezha</span>
    </div>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Works', href: '#works' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
    ];

    // Effect to lock body scroll when mobile menu is open
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        if (isMenuOpen) {
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
        } else {
            html.style.overflow = '';
            body.style.overflow = '';
        }
        
        return () => {
            html.style.overflow = '';
            body.style.overflow = '';
        };
    }, [isMenuOpen]);
    
    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
    };

    const MobileMenu: React.FC = () => (
        <div className={`fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <nav className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} onClick={handleMobileLinkClick} className="text-2xl text-brand-text-light hover:text-white transition-colors">
                        {item.name}
                    </a>
                ))}
                 <a href="#contact" onClick={handleMobileLinkClick} className="mt-4 bg-brand-orange text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all">
                    Work with us
                </a>
            </nav>
        </div>
    );

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 p-3">
                <div className="container mx-auto px-4">
                     <div className="flex items-center justify-between bg-brand-gray/50 backdrop-blur-lg border border-brand-gray-light rounded-full px-4 py-2">
                        <Logo />
                        <nav className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} className="text-brand-text-light hover:text-white transition-colors text-base px-3 py-1 cursor-pointer">
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center gap-2">
                             <a href="#contact" className="hidden md:inline-block bg-brand-orange text-white font-semibold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all text-base transform hover:-translate-y-px cursor-pointer">
                                Work with us
                            </a>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2 z-50">
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu />
        </>
    );
};

export default Header;