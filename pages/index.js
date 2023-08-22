import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="container">
              <main>
                <Image
                  src="/cover.jpeg"
                  layout="fill"
                  // objectFit="cover"
                  objectPosition="center"
                  alt="La Gazette Patata"
                />
              </main>
            </div>
          </div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    </div>

  )
}
