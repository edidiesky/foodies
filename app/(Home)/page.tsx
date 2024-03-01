'use client';
import { useRef, useState } from 'react';
import { Header } from '@/components/common/Header';
import Hero from './_components/hero';
import Sidebar from '@/components/common/Sidebar';
import Cta from './_components/cta';
import ProductList from './_components/productlist';
import Farmers from './_components/farmers';
import Collaboration from './_components/collaboration';
import Chefs from './_components/chefs';
import Footer from '@/components/common/Footer';

export default function Home() {
  const [sidebar, setSidebar] = useState(false)
  const Homeref = useRef<null | HTMLDivElement>(null);

  return (
    <div ref={Homeref} style={{ perspective: "1px", minHeight: "100vh" }}
      data-scroll-section className="w-full min-h-full overflow-hidden">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <Header setSidebar={setSidebar} sidebar={sidebar} />
      <Hero setSidebar={setSidebar} />
      <Cta />
      <ProductList />
      <Chefs />
      <Farmers />
      <Collaboration />
      <Footer />
    </div>
  );
}
