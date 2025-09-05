/*
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    { quote: "Professional and Reliable. The goMrezha team made the entire process seamless, consistently delivering results on time.", name: "Sarah M", title: "CEO", company: "Innovatech", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=80&w=100&h=100&fit=crop&crop=face" },
    { quote: "Innovative and Insightful. goMrezha brought fresh ideas to the table, transforming our vision into something extraordinary.", name: "David S", title: "Head of Product", company: "Visionary", imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&q=80&w=100&h=100&fit=crop&crop=face" },
    { quote: "Exceptional Service! They provided creative solutions that exceeded our expectations and delivered real growth.", name: "Amanda J", title: "Marketing Lead", company: "BlueWave", imageUrl: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&q=80&w=100&h=100&fit=crop&crop=face" },
    { quote: "Remarkable Detail. Every aspect of our brand was handled with care and precision, from start to finish.", name: "Chris W", title: "Founder", company: "Horizon Edge", imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&q=80&w=100&h=100&fit=crop&crop=face" },
    { quote: "Highly Recommended! goMrezha's expertise and creative solutions helped us achieve our business goals.", name: "Emily R", title: "Founder", company: "Green Horizon", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=100&h=100&fit=crop&crop=face" },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-brand-gray p-6 rounded-2xl border border-brand-gray-light h-full flex flex-col justify-between">
        <p className="text-white mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center gap-4">
            <img src={testimonial.imageUrl} alt={testimonial.name} width="100" height="100" loading="lazy" decoding="async" className="w-12 h-12 rounded-full object-cover" />
            <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-brand-text-light text-sm">{testimonial.title} at {testimonial.company}</p>
            </div>
        </div>
    </div>
);

const Arrow: React.FC<{ left?: boolean, onClick: (e: any) => void }> = ({ left, onClick }) => {
  const baseClasses = "absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gray border border-brand-gray-light rounded-full hidden md:flex items-center justify-center text-white hover:bg-brand-orange transition-all duration-300 cursor-pointer z-10 transform hover:scale-105";
  const positionClasses = left ? "left-4 lg:left-0 lg:-translate-x-1/2" : "right-4 lg:right-0 lg:translate-x-1/2";
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${positionClasses}`}>
      {left ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      )}
    </button>
  );
};


const Testimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        breakpoints: {
            '(min-width: 640px)': {
                slides: { perView: 2, spacing: 32 },
            },
        },
        slides: { perView: 1, spacing: 16 },
    });

    return (
        <section className="py-20 md:py-28 bg-brand-gray-dark">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:sticky top-28">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say About Us</h2>
                        <p className="text-brand-text-light mb-6">We pride ourselves on delivering exceptional results, but don't just take our word for it.</p>
                        <div className="bg-brand-gray p-4 rounded-lg flex items-center gap-4 border border-brand-gray-light">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="32" height="32" loading="lazy" decoding="async" className="w-8 h-8"/>
                            <div>
                                <p className="text-white font-semibold">15k+ Google Review</p>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <span>4.9</span>
                                    {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div ref={sliderRef} className="keen-slider">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="keen-slider__slide">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>
                            {loaded && instanceRef.current && (
                                <>
                                    <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />
                                    <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
                                </>
                            )}
                        </div>
                        {loaded && instanceRef.current && (
                            <div className="flex justify-center gap-2 mt-8">
                                {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === idx ? 'bg-brand-orange' : 'bg-brand-gray-light hover:bg-brand-orange/70'}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    ></button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
*/