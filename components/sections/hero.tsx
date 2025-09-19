import React, { useRef, useEffect } from 'react'

const Hero = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     // Auto-play video when component mounts
//     if (videoRef.current) {
//       videoRef.current.play().catch(error => {
//         console.log("Video autoplay failed:", error);
//         // Many browsers require user interaction before video can play
//       });
//     }
//   }, []);

  return (
    <section className="relative w-full max-h-screen overflow-hidden aspect-video">
      {/* Full screen video */}
      {/* <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/your-video-file.mp4" type="video/mp4" />
      </video> */}
      
      {/* Dark overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Bottom-right aligned content with padding */}
      <div className="relative z-1 flex flex-col items-start justify-end w-full h-full text-white p-5 md:p-10 lg:p-12">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-left font-satoshi">tech@nyu</h1>
          <p className="text-sm sm:text-base md:text-lg text-left font-satoshi">
            The Space for Artists, Makers, and Hackers to Build @ NYU.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
