'use client';
import { useEffect, useRef, useState } from 'react';
import { ProductHeader } from '@/components/common/Product/Header';
import ProductFooter from '@/components/common/Product/Footer';
import Product from './_components/product';


export default function Page({ params }: { params: { food: string } }) {
    // return <div>My Post: {params.food}</div>
    const [sidebar, setSidebar] = useState(false)

    // console.log(params.food)


    return (
        <div className="w-full min-h-full overflow-hidden">
            <ProductHeader
                setSidebar={setSidebar}
                sidebar={sidebar}
            />
            <Product
                food={params.food}
            />
            <ProductFooter />
        </div>
    );
}
