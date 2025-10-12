import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface ParallaxImageData {
  src: string
  alt: string
  style: string // Tailwind classes for positioning and styling
}

interface ParallaxScrollGalleryProps {
  images: ParallaxImageData[]
  containerHeight?: string // Height of the container (e.g., 'h-screen', 'h-[200vh]')
  className?: string
}

const ParallaxScrollGallery: React.FC<ParallaxScrollGalleryProps> = ({
  images,
  containerHeight = 'h-[100vh]',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const imageElements = imageRefs.current.filter(Boolean)

    // Create ScrollTrigger for each image with different parallax speeds
    imageElements.forEach((imageElement, index) => {
      if (!imageElement) return

      // Different parallax speeds for variety
      const speeds = [-0.8, -0.5, -0.3, -0.6, -0.4, -0.7]
      const speed = speeds[index % speeds.length]

      gsap.fromTo(
        imageElement,
        {
          y: 0,
        },
        {
          y: speed * window.innerHeight,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [images])

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${containerHeight} ${className}`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          ref={el => { imageRefs.current[index] = el }}
          className={`absolute ${image.style}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default ParallaxScrollGallery
