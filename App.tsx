import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Process from './components/Process';
import Comparison from './components/Comparison';
//import Team from './components/Team';
//import Pricing from './components/Pricing';
import Faq from './components/Faq';
//import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import SectionAnimator from './components/SectionAnimator';

const App: React.FC = () => {
  // This effect handles smooth scrolling for all in-page anchor links (e.g., '#works').
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Find the anchor tag, bubbling up if the click was on a child element
      const anchor = target.closest('a[href^="#"]');

      // Ensure it's a valid in-page anchor link
      if (!anchor) {
        return;
      }
      
      const href = anchor.getAttribute('href');
      // Ignore if it's just "#"
      if (!href || href === '#') {
          return;
      }
      
      try {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          event.preventDefault();
          const headerOffset = 100; // Offset for the fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } catch (e) {
        // Ignores invalid selectors, preventing crashes
        console.warn(`Invalid selector for anchor link: ${href}`);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-brand-dark font-sans overflow-x-hidden">
      <Header />
      <main className="pt-24">
        <Hero />
        <SectionAnimator>
          <section id="about"><About /></section>
        </SectionAnimator>
        <SectionAnimator>
          <Partners />
        </SectionAnimator>
        <SectionAnimator>
          <section id="works"><Showcase /></section>
        </SectionAnimator>
        <SectionAnimator>
          <section id="services"><Services /></section>
        </SectionAnimator>
        <SectionAnimator>
          <Process />
        </SectionAnimator>
        <SectionAnimator>
          <Comparison />
        </SectionAnimator>
        <SectionAnimator>
       
        </SectionAnimator>
        <SectionAnimator>

        </SectionAnimator>
        <SectionAnimator>
          <Faq />
        </SectionAnimator>
        <SectionAnimator>
        </SectionAnimator>
        <SectionAnimator>
          <section id="contact">
            <Cta />
          </section>
        </SectionAnimator>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;