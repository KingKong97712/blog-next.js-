// carousel.tsx
'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const CarouselPart = ({
    data,
}: {
    data: {
        image: string
    }[]
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        const elem = carouselRef.current as unknown as HTMLDivElement
        const { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div>
            {/* Carousel container */}
            <div className="relative h-[127px] w-[127px] overflow-hidden rounded-md">
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width,
                    }}
                    className="absolute flex h-full w-full transition-all duration-300"
                >
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className="relative h-full w-full shrink-0">
                            <Image
                                className="pointer-events-none"
                                alt={`carousel-image-${i}`}
                                fill
                                src={v.image || '/images/carousel_interactive_part/image1.png'}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation buttons */}
            <div className="mt-3 flex justify-between" style={{ width: '250%' }}>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg((prev) => prev - 1)}
                    className={` font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {'< P R E V'}
                </button>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg((prev) => prev + 1)}
                    className={` font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    {' N E X T >'}
                </button>
            </div>
        </div>
    )
}

export default CarouselPart
