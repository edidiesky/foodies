"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3CenterLeft, HiBars2 } from "react-icons/hi2";
import React from "react";

const Cta = () => {
    return (
        <>
            <div className="py-32">
                <div className="px-8 m-auto max-w-custom grid grid-cols-1 lg:grid-cols-custom_2 gap-x-24 gap-y-24 justify-between">
                    <div className="flex items-center justify-center flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="md:text-[4rem] text-start lg:text-center lg:text-[5rem] leading-[1.2] font-shop_bold">
                            Farmer’s
                            Reserve Rice
                        </h1>
                        <h4 className=" lg:text-lg text-start lg:text-center font-shop_light w-100">
                            Our farmers grow for flavor with practices that respect people, wildlife and the planet, because that’s just the right thing to do. While that sometimes means smaller harvests, it makes for an exceptional meal, every time.
                        </h4>
                        <div className="w-full justify-center flex items-start">
                            <Button className="text-lg text-white font-bold ">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 md:flex hidden item-center justify-end">
                        <img src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a796725431f_PI_NGF_0604.jpg" alt="" className="w-full" />
                    </div>

                </div>
            </div>
            <div className="py-20 bg-[#008A69]">
                {/* <h2 className="text-[7rem] font-shop_bold">
                    Sustainable.  Sustainable.
                </h2> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 w-[900px] gap-24 mx-auto items-center justify-center">
                    <div className="flex flex-col gap-y-12">
                        <h4 className="text-lg font-bold text-white">
                            Meet your farmer. {" "}
                            <span className="font-normal">
                                Knowing who grows your food just feels good. Enter the code on the bottom of your bag to meet the farmer who helped with dinner.

                            </span>
                        </h4>
                        <div className="w-full flex items-start">
                            <Button className="bg-white text-text_dark_1 text-sm">
                                No Code? We are here for You
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-12">
                       
                        <div className="w-full flex items-start">
                            <Button className="bg-white text-text_dark_1 text-sm">
                                No Code? We are here for You
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Cta