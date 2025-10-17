'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const affiliations = [
  {
    src: '/logos/dra-adriana/sirio.webp',
    alt: 'Hospital Sírio-Libanês',
    label: 'Hospital Sírio-Libanês'
  },
  {
    src: '/logos/dra-adriana/hub.webp',
    alt: 'Hospital Universitário de Brasília (HUB)',
    label: 'Hospital Universitário de Brasília'
  },
  {
    src: '/logos/dra-adriana/unb.webp',
    alt: 'Universidade de Brasília (UnB)',
    label: 'Universidade de Brasília'
  }
];

export default function AffiliationsStrip() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      containScroll: 'trimSnaps'
    },
    [
      Autoplay({ 
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true
      })
    ]
  );

  return (
    <section 
      className="relative py-12 overflow-hidden"
      style={{ backgroundColor: '#FAFAF7' }}
      data-testid="affiliations-strip"
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#EAEDEA' }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#EAEDEA' }} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 
          className="text-center text-lg md:text-xl font-semibold mb-8"
          style={{ color: '#0F2C4D' }}
        >
          Reconhecida por instituições de excelência
        </h2>

        {/* Desktop: Carousel with autoplay */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
            
            <div 
              className="overflow-hidden" 
              ref={emblaRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Instituições afiliadas"
            >
              <div className="flex gap-16">
                {/* Duplicate items for seamless loop */}
                {[...affiliations, ...affiliations, ...affiliations].map((affiliation, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_auto] flex items-center justify-center"
                  >
                    <img
                      src={affiliation.src}
                      alt={affiliation.alt}
                      aria-label={affiliation.label}
                      className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                      data-testid={`logo-${affiliation.label.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Static grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:hidden items-center justify-items-center">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={affiliation.src}
                alt={affiliation.alt}
                aria-label={affiliation.label}
                className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                data-testid={`logo-${affiliation.label.toLowerCase().replace(/\s+/g, '-')}-mobile`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
