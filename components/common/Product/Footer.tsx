"use client";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Button } from "../../ui/button";
const ProductFooter = () => {
    return (
        <>
            <div className="py-8 bg-[rgb(30,33,36)] w-full flex flex-col gap-32">


                <div className="m-auto w-full max-w-custom_1 flex items-center gap-4 flex-col">
                    <h4 className="text-[12px] font-bold text-white">
                        © Copyright 2024 | All Rights Reserved | VICTOR ESSIEN
                    </h4>
                    <img src="https://avada.website/classic-shop/wp-content/uploads/sites/48/2015/09/payment_cards_footer.png" alt="" />
                </div>
            </div>
        </>


    );
};

export default ProductFooter