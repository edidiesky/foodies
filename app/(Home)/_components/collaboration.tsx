"use client";
import React from "react";
const collaborationData = [
    {
        text: 'Creating Habitat for Wild Birds',
        subtext: "Did you know that if rice fields are flooded at just the right time, they create a perfect place for some migratory birds to feed and rest? This work helps protect endangered species and enhances biodiversity.",
        image: "https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a01b9254316_The%20Nature%20Conservancy.svg"
    },
    {
        text: 'Nurturing vital nesting sites',
        subtext: "The conservation arm of the US Department of Agriculture partners with farmers to stagger the draining of winter-flooded rice fields in a way that creates vital nesting sites for endangered migratory shorebirds.",
        image: "https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a338525430d_usda-symbol%201.svg"
    },
    {
        text: 'Creating Habitat for Wild Birds',
        subtext: "Mission: Enhance the ecological value of California rice fields to help sustain the millions of waterbirds and other wildlife in the Pacific Flyway for future generations.",
        image: "https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135a6b0c254318_CaliforniaRicelands.png"
    }
]
const Collaboration = () => {
    return (
        <>
            <div className="py-32">
                <div className="px-8 m-auto max-w-custom_1 gap-x-24 gap-y-24 justify-between">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="text-[4rem] text-start lg:text-[4rem] leading-[1.2] font-shop_bold">
                            <span className="text-green_1 block text-lg font-bold">
                                The Land
                            </span>
                            Collaborating with nature
                        </h1>
                        <h4 className="text-lg font-shop_light">
                            Our farmers share our deep affinity for protecting the land and wildlife, while ensuring a safe and sustainable food supply and work in partnership with public, research, and non-profit organizations, some of which are listed below.
                        </h4>

                    </div>

                </div>
            </div>
            <div className="py-4 grid grid-cols-1 m-auto max-w-custom_1 gap-16 px-8 md:grid-cols-3">
                {
                    collaborationData?.map((x?: any, index?: any) => {
                        return <div className="flex flex-col gap-6 py-2 px-4 border-l">
                            <img src={x?.image} alt="" className="w-20" />
                            <h4 className="text-base font-bold ">{x?.text}</h4>
                            <h5 className="text-sm">{x?.subtext}</h5>
                        </div>
                    })
                }
            </div>
        </>


    );
};

export default Collaboration