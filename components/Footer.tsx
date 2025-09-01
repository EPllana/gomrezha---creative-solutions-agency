import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-gradient-footer-top)"/>
            <path d="M2 7L2 17L12 22L12 12L2 7Z" fill="url(#logo-gradient-footer-left)"/>
            <path d="M22 7L22 17L12 22L12 12L22 7Z" fill="url(#logo-gradient-footer-right)"/>
            <defs>
                <linearGradient id="logo-gradient-footer-top" x1="12" y1="2" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF8A65"/>
                    <stop offset="1" stopColor="#FF602A"/>
                </linearGradient>
                <linearGradient id="logo-gradient-footer-left" x1="2" y1="12" x2="12" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF602A" stopOpacity="0.8"/>
                    <stop offset="1" stopColor="#C94B20"/>
                </linearGradient>
                <linearGradient id="logo-gradient-footer-right" x1="22" y1="12" x2="12" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF602A"/>
                    <stop offset="1" stopColor="#C94B20"/>
                </linearGradient>
            </defs>
        </svg>
        <span className="text-2xl font-bold text-white tracking-wide">goMrezha</span>
    </div>
);

const FooterLink: React.FC<{ children: React.ReactNode, href?: string }> = ({ children, href = "#" }) => (
    <li>
        <a href={href} className="inline-block text-brand-text-light hover:text-brand-orange transition-all duration-300 hover:translate-x-1 cursor-pointer">{children}</a>
    </li>
);

const Footer: React.FC = () => {
    const menuLinks = [
        { name: 'About', href: '#about' },
        { name: 'Works', href: '#works' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
    ];
    
    return (
        <footer className="bg-brand-gray-dark border-t border-brand-gray-light">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Logo & About */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <Logo />
                        <p className="mt-4 text-brand-text-light max-w-xs">
                            At goMrezha, we craft creative solutions that elevate brands. From web design to digital marketing to help you stand out and succeed.
                        </p>
                    </div>
                    
                    {/* Column 2: Menu */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Menu</h4>
                        <ul className="space-y-3">
                            {menuLinks.map((link) => (
                                <FooterLink key={link.name} href={link.href}>
                                    {link.name}
                                </FooterLink>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3: Utilities */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Utilities</h4>
                        <ul className="space-y-3">
                            <FooterLink>Privacy Policy</FooterLink>
                            <FooterLink>Terms of Service</FooterLink>
                            <FooterLink>404</FooterLink>
                        </ul>
                    </div>

                     {/* Column 4: Contact */}
                     <div>
                        <h4 className="font-bold text-white text-lg mb-4">Contact</h4>
                        <ul className="space-y-3">
                           <li><a href="tel:+19177275779" className="text-brand-text-light hover:text-brand-orange transition-colors">+1-917-727-5779</a></li>
                           <li><a href="mailto:support@gomrezha.com?subject=Project%20Inquiry%20from%20Website" className="text-brand-text-light hover:text-brand-orange transition-colors">support@gomrezha.com</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="border-t border-brand-gray-light py-6">
                <div className="container mx-auto px-6 text-center text-brand-text-light">
                    <p>&copy; goMrezha 2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;