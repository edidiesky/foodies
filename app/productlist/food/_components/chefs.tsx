"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Chefs = () => {
    return (
        <>
            <div className="py-32 bg-light_grey flex flex-col gap-y-32">
                <div className="m-auto w-[1000px] max-w-custom gap-x-40 gap-y-32 grid-cols-1 grid lg:grid-cols-2">
                    <span className="w-full -mt-0 lg:-mt-56">
                        <img src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a6b3725431d_chef.jpg" alt="" className="w-full" />
                    </span>
                    <span className="w-full relative -mt-0 lg:-mt-32">
                        <span className="w-32 h-32 absolute -bottom-10 right-0 bg-white rounded-full flex items-center justify-center text-xl text-bold text-green_1">
                            <span className="text-center w-full"> always delicious</span>
                        </span>
                        <img src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a189925431e_bowl_of_rice.jpg" alt="" className="w-full" />
                    </span>

                </div>
                <div className="px-8 m-auto w-[900px] max-w-custom grid gap-x-24 gap-y-24 justify-between">
                    <div className="flex items-center w-[600px] justify-center flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="text-[3.6rem] md:text-[4rem] text-start lg:text-[5rem] leading-[1.2] font-shop_bold">
                            Kind of a cult favorite among picky chefs
                        </h1>
                        <h4 className=" lg:text-lg text-start font-shop_light w-full">
                            Our farmers grow for flavor with practices that respect people, wildlife and the planet, because that’s just the right thing to do. While that sometimes means smaller harvests, it makes for an exceptional meal, every time.
                        </h4>
                        <div className="w-full flex items-start">
                            <Button className="text-lg text-white font-bold ">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 md:flex hidden item-center justify-end">
                    </div>

                </div>
            </div>
        </>


    );
};

export default Chefs