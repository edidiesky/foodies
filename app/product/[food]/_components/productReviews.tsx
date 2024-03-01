"use client";
import { Button } from "@/components/ui/button";
import { productlistData } from "@/data/products";
import React, { useState } from "react";

type productReviewsType = {
    food: string
}

const ProductReviews: React.FC<productReviewsType> = ({ food }) => {
    const product = productlistData.find((x?: any, index?: any) => x?.title === decodeURIComponent(food))
    // console.log(product, productlistData, decodeURIComponent(food))
    return (
        <>
            <div className="py-4 w-full">
                <div className="w-[90%] m-auto max-w-custom_3 grid-cols-1 gap-12 items-start">
                    <div className="w-full flex flex-col pt-20 gap-8">
                        <div className="flex w-full flex-col gap-8">
                            <h3 className="text-2xl font-bold font-font_sans">
                                Customer Reviews (0)
                                <span className="block text-text-dark_1 text-base font-normal leading-[2] font-font_karla">
                                    Be the first to leave a review.
                                </span>
                            </h3>
                            <span className="block text-text-dark_1 text-base font-normal leading-[2] font-font_karla">
                                There are no reviews yet.
                            </span>

                            <div className="flex flex-col gap-4">
                                <span className="block text-text-dark_1 text-base font-normal leading-[2] font-font_karla">
                                    Be the first to review “Suede Heeled Shoes”

                                </span>
                                <span className="block text-text-dark_1 text-base font-normal leading-[2] font-font_karla">
                                    Your email address will not be published. Required fields are marked *
                                </span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <label htmlFor="review" className="block text-text-dark_1 w-full text-base font-normal leading-[2] font-font_karla">
                                    Your review *
                                    <textarea id="review" className="block text-text-dark_1 h-[150px] w-full border border-[rgba(0,0,0,.4)] text-base font-normal leading-[2] font-font_karla" />
                                </label>

                                <label htmlFor="name" className="block text-text-dark_1 w-full text-base font-normal leading-[2] font-font_karla">
                                    Name *
                                    <input id="name" className="block text-text-dark_1 h-[50px] w-full border border-[rgba(0,0,0,.4)] text-base font-normal leading-[2] font-font_karla" />
                                </label>

                                <label htmlFor="email" className="block text-text-dark_1 w-full text-base font-normal leading-[2] font-font_karla">
                                    Email *
                                    <input id="email" className="block text-text-dark_1 h-[50px] w-full border border-[rgba(0,0,0,.4)] text-base font-normal leading-[2] font-font_karla" />
                                </label>
                                <div className="flex items-center">
                                    <Button className="text-sm px-12 md:px-20">SUBMIT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ProductReviews