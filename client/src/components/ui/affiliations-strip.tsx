'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const affiliations = [
  {
    src: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/redimen22.webp',
    alt: 'Hospital Sírio-Libanês',
    label: 'Hospital Sírio-Libanês'
  },
  {
    src: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/redimen1086.webp',
    alt: 'Hospital Universitário de Brasília (HUB) - UnB',
    label: 'Hospital Universitário de Brasília'
  },
  {
    src: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/logo-ebserh.webp',
    alt: 'EBSERH - Empresa Brasileira de Serviços Hospitalares',
    label: 'EBSERH'
  }
];

export default function AffiliationsStrip() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: false
    },
    [
      AutoScroll({ 
        speed: 1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
        playOnInit: true
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

        {/* Desktop: Continuous marquee carousel */}
        <div className="hidden md:block">
          <div className="relative">
            <div 
              className="overflow-hidden" 
              ref={emblaRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Instituições afiliadas"
            >
              <div className="flex gap-x-24">
                {/* Duplicate items multiple times for seamless continuous loop */}
                {[...affiliations, ...affiliations, ...affiliations, ...affiliations].map((affiliation, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_auto] flex items-center justify-center"
                  >
                    <img
                      src={affiliation.src}
                      alt={affiliation.alt}
                      aria-label={affiliation.label}
                      className="h-12 w-auto object-contain transition-all duration-300"
                      data-testid={`logo-${affiliation.label.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Static grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 md:hidden items-center justify-items-center">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={affiliation.src}
                alt={affiliation.alt}
                aria-label={affiliation.label}
                className="h-10 w-auto object-contain transition-all duration-300"
                data-testid={`logo-${affiliation.label.toLowerCase().replace(/\s+/g, '-')}-mobile`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
