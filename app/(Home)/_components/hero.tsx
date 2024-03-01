"use client";
import { Button } from "@/components/ui/button";
import gsap from 'gsap'
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HeaderProps = {
    sidebar?: boolean,
    setSidebar: (val: boolean) => void;
}
const Hero: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
    const firstTextRef = useRef(null)
    const secondTextRef = useRef(null)
    const sliderRef = useRef(null)
    let xpercentValue = 0
    let direction = -1
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        

        gsap.to(sliderRef?.current, {
            x: "-=500px",
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: .2,
                onUpdate: e => direction = e.direction * -1
            }
        })
        requestAnimationFrame(animation)
    }, [])

    const animation = () => {
        if (xpercentValue <= -120) {
            xpercentValue = 0
        }

        if (xpercentValue > 0) {
            xpercentValue = -120
        }
        gsap.set(firstTextRef.current, { xPercent: xpercentValue })
        gsap.set(secondTextRef.current, { xPercent: xpercentValue })
        xpercentValue += 0.1 * direction
        requestAnimationFrame(animation)
    }
    return (
        <>
            <div className="py-16">
                <div className="w-full grid grid-cols-custom_3 gap-x-32 justify-between">
                    <div className="flex w-full lg:w-[90%] md:pl-16 lg:px-12 mx-auto items-start flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-shop_bold">
                            Growing
                            <span className="font-shop_italic leading-[1] text-green_1 block">
                                delicious
                            </span>

                        </h1>
                        <h4 className="text-lg font-shop_light w-full">
                            You never knew rice could taste like this. Our farmers grow for flavor — with practices that respect people, wildlife and the planet, because that’s just the right thing to do.
                        </h4>
                        <div className="w-full flex items-start">
                            <Button className="text-xl text-white font-bold ">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:flex hidden item-center justify-end">
                        <div className="py-8 w-full relative flex item-center justify-center">
                            <video
                                src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135ac24b254329_True%20Origins%20Hero%20Video%20-%20web%20-%20smaller-transcode.mp4"
                                loop
                                muted
                                autoPlay
                                className="w-full"
                            ></video>
                        </div>
                    </div>

                </div>
            </div>
            <div className="py-20 bg-[#F2EEEB]">
                <div ref={sliderRef} className="slider relative w-full flex whitespace-nowrap">
                    <h2 ref={firstTextRef} className="text-[7rem] font-shop_bold">
                        Sustainable. {" "} Delicious. {" "} Traceable.
                    </h2>
                    <h2 ref={secondTextRef} className="text-[7rem] absolute left-[130%] font-shop_bold">
                        Sustainable. {" "} Delicious. {" "} Traceable.
                    </h2>
                </div>
            </div>
        </>


    );
};

export default Hero
