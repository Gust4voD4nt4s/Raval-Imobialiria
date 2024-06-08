import Header from "@/components/Header";
import Hero from '@/components/Hero'

import CarrouselSwiper from "@/components/Slides/Carrousel/CarrouselSwiper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="mt-[10px] bg-[#F9F9F9] text-center">
        <h1 className="py-[17px] font-medium text-3xl text-[#083B47]">NOSSOS IMOVEIS</h1>
        <CarrouselSwiper />
      </section>

    </>
  );
}
