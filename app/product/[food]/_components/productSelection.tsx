"use client";
import { Button } from "@/components/ui/button";
import { productlistData } from "@/data/products";
import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import ProductDescription from "./productDescription";
import ProductReviews from "./productReviews";

type ProductDetailsType = {
    food: string
}

const ProductSelection: React.FC<ProductDetailsType> = ({ food }) => {
    const product = productlistData.find((x?: any, index?: any) => x?.title === decodeURIComponent(food))
    // console.log(product, productlistData, decodeURIComponent(food))
    return (
        <>
            <div className="py-20 border-t w-full flex flex-col items-start gap-12">
                <div className="w-[90%] m-auto max-w-custom_1 gap-12 items-start flex flex-col">
                    <h3 style={{letterSpacing:"5px"}} className="text-2xl font-bold text-start w-full md:text-center font-font_sans">
                     YOU MAY ALSO LIKE
                    </h3>
                    <div className="w-full m-auto grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-between">
                        {
                            productlistData.slice(0, 4).map((x?: any, index?: any) => {
                                return <Link key={index} href={`/product/${x?.title}`} className="w-full flex item-center justify-end">
                                    <span className="flex items-center w-full justify-center">
                                        <div className="py-8 w-[90%] mx-auto relative flex flex-col item-start justify-center gap-6">
                                            <div className="w-full flex items-center justify-center">
                                                <div className="w-[300px] flex items-center justify-center relative h-[300px] ">
                                                    <img src={x?.images[0]} alt="" className="w-[60%] md:w-[70%] lg:w-[90%] object-cover" />
                                                    {/* <img src={x?.images[1]} alt="" className="w-full" /> */}
                                                </div>
                                            </div>
                                            <div className="flex flex-1 px-2 font-font_sans items-center justify-center flex-col gap-2">
                                                <h4 className="font-bold hover:underline font-font_sans text-base leading-[1.1]">

                                                    {x?.title}
                                                </h4>
                                                <h5 className="text-[#EA0A0A] w-full text-center font-bold text-base">
                                                    ${x.price}
                                                </h5>
                                                {/* <div className="w-full flex items-center">
                                                <Button className="text-bold px-4 py-2 text-[12px] text-white">
                                                    Buy Now
                                                </Button>
                                            </div> */}
                                            </div>
                                        </div>
                                    </span>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </>


    );
};

export default ProductSelection