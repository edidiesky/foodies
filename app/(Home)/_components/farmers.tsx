"use client";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const Farmers = () => {
    return (
        <>
            <div className="py-32">
                <div className="px-8 m-auto max-w-custom_1 gap-x-24 gap-y-24 justify-between">
                    <div className="flex items-center w-[90%] lg:w-[700px] justify-center flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="text-[4rem] text-start lg:text-[4rem] leading-[1.2] font-shop_bold">
                            Just two farmers who believe your pantry deserves better
                        </h1>

                    </div>

                </div>
            </div>
            <div className="py-12">
                <div className="px-8 m-auto max-w-custom_1 grid grid-cols-1 lg:grid-cols-custom_2 gap-x-40 gap-y-24 justify-between">
                    <div className="flex items-center justify-center flex-col gap-y-8 gap-x-4">
                        <span className="w-full relative">
                            <img src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a8ee6254321_michael.jpg" alt="" className="w-full" />
                            <span className="w-32 h-32 absolute -bottom-10 left-0 bg-light_grey rounded-full flex items-center justify-center text-xl text-bold text-green_1">
                                <span className="text-center w-[90%] mx-auto">Meet Andrew</span>
                            </span>
                        </span>
                    </div>
                    <div className="flex-1 md:flex hidden item-center justify-end">
                        <span className="w-full relative flex flex-col gap-20">
                            <span className="text-xl font-shop_light text-text_dark_1">
                                Most rice is grown to maximize yield, at the expense of taste and texture. We carefully select the most flavorful varieties to bring you rice like you've never tasted before.
                            </span>
                            <img src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a2cb2254324_andrew.jpg" alt="" className="w-full" />
                            <span className="w-32 h-32 absolute -bottom-10 right-0 bg-light_grey rounded-full flex items-center justify-center text-xl text-bold text-green_1">
                                <span className="text-center w-full">Meet Timothy</span>
                            </span>
                        </span>
                    </div>

                </div>
            </div>


            <div className="py-32">
                <div className="flex px-8 m-auto w-[90%] max-w-custom_1 flex-col gap-y-12">
                    <div className="flex">

                        <h2 className="text-[3rem] lg:text-[5rem] flex font-bold font-shop_bold text-center text-text_dark_1">
                            <span><ImQuotesLeft /></span>
                            If it doesn’t taste good, I don’t want to grow it.
                            <span><ImQuotesRight /></span>
                        </h2>

                    </div>
                   
                </div>
            </div>

            <div className="py-8 w-full flex item-center justify-center">
                <video
                    src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a2d8125432b_Home%20Land%20video-%20720p-900px-transcode.webm"
                    loop
                    muted
                    autoPlay
                    className="w-90%"
                ></video>
            </div>
        </>


    );
};

export default Farmers