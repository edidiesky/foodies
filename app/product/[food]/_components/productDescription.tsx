"use client";
import { Button } from "@/components/ui/button";
import { productlistData } from "@/data/products";
import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

type ProductDetailsType = {
    food: string
}

const ProductDescription: React.FC<ProductDetailsType> = ({ food }) => {
    const product = productlistData.find((x?: any, index?: any) => x?.title === decodeURIComponent(food))
    // console.log(product, productlistData, decodeURIComponent(food))
    return (
        <>
            <div className="py-12 w-full">
                <div className="w-[90%] m-auto max-w-custom_3 grid md:grid-cols-custom_4 grid-cols-1 gap-12 items-start">
                    <div className="w-full flex flex-col pt-20 gap-8">
                        <div className="flex w-full flex-col gap-4">
                            <h3 className="text-2xl font-bold font-font_sans">
                                Decsription
                            </h3>
                            <span className="block text-text-Drk_1 text-base font-normal leading-[2] font-font_karla">
                                Vestibulum tellus justo, vulputate ac nunc eu, laoreet pellentesque erat. Nulla in fringilla ex. Nulla finibus rutrum lorem vehicula facilisis. Sed ornare congue mi, et volutpat diam. Suspendisse eget augue id magna placerat dignissim. Fusce at turpis neque. Nullam commodo consequat risus et iaculis. Aenean felis diam, venenatis et congue non, luctus sed velit. Curabitur vel metus a tellus luctus venenatis. Praesent ultricies non arcu non tincidunt.
                            </span>
                            <ul className="flex flex-col gap-4">
                                <li className="px-8 text-sm font-font_karla font-normal">Premium Cotton Jersey Construction</li>
                                <li className="px-8 text-sm font-font_karla font-normal">Embroidered Trefoil Logo at Chest</li>
                                <li className="px-8 text-sm font-font_karla font-normal">High Stance Collarn</li>
                                <li className="px-8 text-sm font-font_karla font-normal">Full Zip with Branded Contrast Zip Pull</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col pt-20 gap-8">
                        <div className="flex w-full flex-col gap-4">
                            <h3 className="text-2xl font-bold font-font_sans">
                                Additional Information

                            </h3>
                            <span className="block text-text-Drk_1 text-base font-normal leading-[1.4] font-font_karla">
                                {/* Vestibulum tellus justo, vulputate ac nunc eu, laoreet pellentesque erat. Nulla in fringilla ex. Nulla finibus rutrum lorem vehicula facilisis. Sed ornare congue mi, et volutpat diam. Suspendisse eget augue id magna placerat dignissim. Fusce at turpis neque. Nullam commodo consequat risus et iaculis. Aenean felis diam, venenatis et congue non, luctus sed velit. Curabitur vel metus a tellus luctus venenatis. Praesent ultricies non arcu non tincidunt. */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ProductDescription