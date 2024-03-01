"use client";
import Smallarrow from "@/assets/svg/smallarrow";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
type HeaderProps = {
    sidebar?: boolean,
    setSidebar: (val: boolean) => void;
}
const productlistData = [
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/6169cfc20b135a56392542e4_California%20Organic%20Sushi%20Rice.png",
        title: "Sushi",
        description: "Set yourself up for sushi success: Kernels cling together perfectly while holding their shape. Great for stir fries and sides, too. Sweet, mild flavor. USDA Organic.",
        reviews: "11",
        price: "6.99"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/6169cfc20b135a1bec2542e3_California%20White%20Basmati%20Rice.png",
        title: "White Basmati",
        description: "Set yourself up for sushi success: Kernels cling together perfectly while holding their shape. Great for stir fries and sides, too. Sweet, mild flavor. USDA Organic.",
        reviews: "8.96",
        price: "8.99"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/6169cfc20b135af7ab2542e2_California%20Organic%20White%20Calrose%20Rice.png",
        title: "White Calrose",
        description: "Does it all: Stir fries, paellas, side dishes, salads—even risotto. Mild flavour. Plump, firm kernel with a silky feel. USDA Organic.",
        reviews: "7.00",
        price: "8"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/6169cfc20b135a164d2542e0_Calfironia%20Organic%20Brown%20Calrose%20Rice.png",
        title: "Brown Calrose",
        description: "Excellent for stir fries, dragon bowls, and salads. Mild, nutty flavor. Firm, chewy kernel. Really nutritious—oh hi magnesium, B vitamins, selenium and other plentiful nutrient friends. USDA Organic.",
        reviews: "12",
        price: "12.08"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/6169cfc20b135a906e2542e1_California%20Organice%20White%20Jasmine%20Rice.png",
        title: "White Jasmine",
        description: "00% pure variety, never blended, for maximum aroma, taste and textural quality. Stellar for coconut curries, stir fries, seafood and pilafs. Highly aromatic—releases a delicate floral scent as it cooks. Tender kernel.",
        reviews: "13",
        price: "13.098"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/6169cfc20b135a86532542de_California%20White%20Jasmine%20Rice.png", title: "White Jasmine Red",
        description: "100% pure variety, never blended, for maximum aroma, taste and textural quality. Stellar for coconut curries, stir fries, seafood and pilafs. Highly aromatic—releases a delicate floral scent as it cooks. Tender kernel.",
        reviews: "13",
        price: "13.098"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/61f8388a95fc651b970543d3_True-Origin-Foods-Organic-Black-Turtle-Beans-850030824004-Front.png",
        title: "Black Turtle Beans",
        description: "Organic black turtle beans with velvety texture, mild in flavor and versatile for soups, stews and sides.",
        reviews: "12",
        price: "4.99"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/63d744ce9c1d37258d4c9003_True-Origin-Foods-Organic-Garbanzo-Beans-850030824011-Front.png",
        title: "Garbanzo Beans",
        description: "Slightly starchy making them perfect to hold up in soups, salads and sauces.",
        reviews: "20",
        price: "10"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/61f83f9b22436c4a4a7c9fe0_True-Origin-Foods-Organic-Yellow-Popcorn-850030824035-Front.png",
        title: "Yellow Popcorn",
        description: "A delicious, whole grain and high-fiber snack making your movie theater jealous.",
        reviews: "120",
        price: "12.77"
    },
    {
        image: "https://assets-global.website-files.com/6169cfc20b135a64482542d4/61f83c0b66042765a785a443_True-Origin-Foods-Organic-Rainbow-Popcorn-850030824028-Front.png",
        title: "Rainbow Popcorn",
        description: "Making beautiful, white fluffy bowls of hearty popcorn high in fiber and flavor.",
        reviews: "2",
        price: "200"
    },
]
const ProductList = () => {
    const [activetab, setActiveTab] = useState({
        index: 0,
        active: false
    })
    // console.log(productlistData[activetab?.index].image)
    return (
        <>
            <div className="pb-56 w-full bg-[#FCFBF9]">
                <div className="w-full grid grid-cols-custom_2 justify-between">
                    <div className="w-full bg-[#FCFBF9]">
                        <div className="flex  w-full lg:w-[380px] px-12 py-12 mx-auto items-start justify-end flex-col gap-y-4 gap-x-4">
                            {
                                productlistData?.map((x?: any, index?: any) => {
                                    return <h2 key={index} onMouseOver={() => setActiveTab({
                                        index: index,
                                        active: true
                                    })}
                                        className={`text-4xl ${activetab?.index === index ? 'text-text_dark_1' : "text-dark_grey"} cursor-pointer font-shop_bold`}>
                                        <span className="block text-sm">California</span>
                                        <span className="flex items-center gap-1">
                                            {x?.title}
                                            <span className={`${activetab?.index === index ? 'opacity-1' : "opacity-0"}`}>
                                                <Smallarrow />
                                            </span>
                                        </span>
                                    </h2>
                                })
                            }
                        </div>
                    </div>
                    <div className="w-full bg-[#F2EEEB] md:flex hidden item-center justify-end">
                        <span className="flex items-center justify-center">
                            <div className="py-8 w-[80%] mx-auto relative flex item-center justify-center">
                                <div className="flex-1">
                                    <img src={productlistData[activetab?.index]?.image} alt="" className="w-full" />
                                </div>
                                <div className="flex flex-1 items-start justify-center flex-col gap-8">
                                    <h4 className="font-shop_bold text-lg">

                                        Flavorful, creamy texture and hearty
                                    </h4>
                                    <h4 className="font-shop_light text-lg">
                                        {productlistData[activetab?.index].description}
                                    </h4>
                                    <h5 className="text-dark_grey text-base">
                                        Starting at ${productlistData[activetab?.index].price}
                                    </h5>

                                    <div className="w-full flex items-center">
                                        <Button className="text-bold px-4 text-base text-white">
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
        </>


    );
};

export default ProductList