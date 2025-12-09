"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "@/components/slider/SliderArrows"

export default function AutoPlaySlider({ wrapperClasses = " ", options, children, arrows = true, arrowPosition = "" }) {
    const plugins = [
        Autoplay({ delay: 5000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true, ...options }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                <div className="flex [margin-left:calc(1.25rem_*_-1)]">
                    {children}
                </div>
            </div>
            {arrows && <div className={`flex gap-10 justify-center mt-10 ${arrowPosition}`}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>}
        </>
    )
}