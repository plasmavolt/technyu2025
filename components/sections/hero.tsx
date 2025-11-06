import React, { useRef, useEffect } from 'react'
import { MaskText } from '../inlinemask/inline-mask';
import { gsap } from 'gsap';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    let hasAnimated = false;

    const handleTimeUpdate = () => {
      // Trigger animation when 3 seconds remain
      const timeRemaining = video.duration - video.currentTime;
      
      if (timeRemaining <= 3 && !hasAnimated) {
        hasAnimated = true;
        
        // Create GSAP timeline for smooth, synchronized animation
        const tl = gsap.timeline({
          defaults: { duration: 1.5, ease: "power2.inOut" }
        });

        tl.to(container, {
          scale: 0.85,
          y: '10vh',
          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.3), 0 20px 40px -15px rgba(255, 255, 255, 0.15), 0 10px 20px -8px rgba(255, 255, 255, 0.1)",
          borderRadius: "24px",
          zIndex: 5
        });
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative w-[100svw] h-[100svh] overflow-x-hidden aspect-video flex items-center justify-center bg-black">
      {/* Video container with animation target */}
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-x-hidden"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Full screen video */}
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          autoPlay
          muted
          preload="auto"
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
        
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        
        {/* Bottom-right aligned content with padding */}
        <div className="relative z-1 flex flex-col items-start justify-end w-full h-full text-white p-5 md:p-10 lg:py-12 lg:px-[5vw]">
          <div className="max-w-xl sm:max-w-3xl lg:max-w-5xl xl:max-w-[80%]">
            <h1 className="text-[15vw] tracking-tight sm:text-[10vw] md:text-[8vw] lg:text-[5vw] font-bold md:mb-3 lg:mb-1 mb-[1.5vh] text-left font-satoshi z-[10]">
              <MaskText 
                phrases={['tech@nyu']} 
                customDelay={0.75} 
                duration={1.5}
              />
            </h1>
            <div className="text-2xl sm:text-4xl md:text-4xl lg:text-[2.25vw] text-left font-satoshi tracking-tight">
              <MaskText 
                phrases={['The Space for Artists, Makers, and Hackers to Build @ NYU.']} 
                customDelay={0.75} 
                duration={1.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
