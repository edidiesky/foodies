import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
const sidebarData = [
    {
        title: "Our Products",
        path: "",
    },
    {
        title: "What Chefs Say",
        path: "",
    },
    {
        title: "Our Story",
        path: "",
    },
    {
        title: "Recipes",
        path: "",
    },
    {
        title: "The Land",
        path: "",
    },
    {
        title: "Retails Locations",
        path: "",
    },
    {
        title: "Farmer Profiles",
        path: "",
    },
];

type sidebarProps = {
    active?: boolean,
    sidebar?: boolean,
    setSidebar: (val: boolean) => void;
}
const Sidebar: React.FC<sidebarProps> = ({ active, sidebar, setSidebar }) => {

    return (

        <div className={`${sidebar ? "right-0" : "-right-[100%]"} w-[90%] md:w-[480px] lg:w-[550px] h-full py-4 transition-all ease duration-300 z-40 fixed flex top-0 bg-[#e9e5e2] column gap-2`}>
            <div className="w-full Header_wrapper flex item-center flex-col justify-space gap-2">
                <div className="w-full flex items-center justify-end px-8">
                    <div onClick={() => setSidebar(!sidebar)} className="w-12 cursor-pointer rounded-full flex items-center justify-center h-12 bg-[#fff] ">
                        <RxCross2 fontSize={'25px'} color="black" />
                    </div>
                </div>
                <h4 className="text-sm py-1 px-8 text-text_dark_1 font-bold font-shop_bold">Browse Sections</h4>
                <ul className="flex flex-col w-full">
                    {
                        sidebarData.map((x?: any, key?: any) => {
                            return (
                                <div
                                    key={key}
                                    className="text-dark flex items-center gap-2 w-full font-shop_bold font-bold hover:bg-[rgba(255,255,255,.1)]
                                     px-8 text-[2.6rem]"
                                >
                                    {<span>{x.title}</span>}
                                </div>
                            );
                        })
                    }

                </ul>
                <div className="w-full flex py-6 px-8 items-center gap-4">
                  <Button className="bg-[#fff] text-text_dark_1">
                    Meet Your Farmer
                  </Button>
                    <Button>
                       Shop Now
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Sidebar