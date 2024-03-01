"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="py-16">
                <div className=" w-full gap-x-32 justify-between">
                    <div className="flex w-full lg:w-[90%] md:pl-16 lg:px-12 mx-auto items-center flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h3 className="text-[2.5rem] leading-[0.9] text-start font-font_sans md:text-center font-extrabold">
                            Products
                        </h3>
                    </div>

                </div>
            </div>
        </>


    );
};

export default Hero