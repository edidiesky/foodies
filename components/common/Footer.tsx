"use client";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Button } from "../ui/button";
const Footer = () => {
    return (
        <>
            <div className="py-20 w-full flex flex-col gap-32">
                <div className="px-8 m-auto max-w-custom_1 gap-x-24 gap-y-24 justify-between">
                    <div className="flex items-center w-[90%] justify-center flex-col gap-y-12 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="text-[4rem] lg:w-[800px] mx-auto text-start lg:text-center lg:text-[5rem] leading-[1.2] font-shop_bold">
                            <span>Ethical. Sustainable.</span>  <span className="font-shop_italic">Incredibly </span> delicious.
                        </h1>
                        <div className="w-full flex items-center justify-center">
                            <Button className="font-bold text-lg ">
                                Shop Now
                            </Button>
                        </div>
                    </div>

                </div>

                <div className="m-auto w-full max-w-custom_1 pt-20 border-t border-[rgba(0,0,0,1)]">
                    <div className="px-8 w-full gap-x-24 gap-y-24 justify-between">
                        <div className="flex items-center w-[90%] justify-center flex-col gap-y-12 gap-x-4">
                          <div className="w-[400px] mx-auto flex flex-wrap justify-start lg:justify-center items-center gap-4">
                                <h3 className="text-xl text-dark_grey text-start lg:text-center">
                                    Shop now
                                </h3>
                                <h3 className="text-xl text-dark_grey text-start lg:text-center">
                                    Facebook
                                </h3> <h3 className="text-xl text-dark_grey text-start lg:text-center">
                                    Instagram
                                </h3> <h3 className="text-xl text-dark_grey text-start lg:text-center">
                                  
                                    Twitter
                                </h3> <h3 className="text-xl text-dark_grey text-start lg:text-center">
                                  
                                    hello@trueoriginfoods.com
                                </h3>
                          </div>
                        </div>

                    </div>
               </div>
            </div>
        </>


    );
};

export default Footer