'use client';
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/embla-carousel/embla-carousel-dot-button'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/embla-carousel/embla-carousel-arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

type PropType = {
  slides: string[] | undefined // Array of image source URLs
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options = { loop: true } } = props // Ensure loop is default
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="embla__slide__img"
                width={800} // Adjust based on your needs
                height={400} // Adjust based on your needs
                style={{ objectFit: 'contain' }}
                priority={index === 0} // Prioritize first image for LCP
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-between">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-row gap-3 py-5 px-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel