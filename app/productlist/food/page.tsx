'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from './_components/hero';
import Cta from './_components/cta';
import ProductList from './_components/productlist';
import Footer from '@/components/common/Footer';
import Sidebar from '@/components/common/Sidebar';
import { ProductHeader } from '@/components/common/Product/Header';
import ProductFooter from '@/components/common/Product/Footer';

export default function Home() {
  const [sidebar, setSidebar] = useState(false)


  return (
    <div style={{ perspective: "1px", minHeight: "100vh" }}
      data-scroll-section className="w-full min-h-full overflow-hidden">
      <ProductHeader
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <Hero />
      <ProductList />
      <ProductFooter />
    </div>
  );
}
