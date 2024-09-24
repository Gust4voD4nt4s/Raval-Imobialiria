import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from '@/components/Hero'
import icon from '@/images/ArrowSelect.png'

import CarrouselSwiper from "@/components/Slides/Carrousel/CarrouselSwiper";
import Image from "next/image";
import AdvertisingSlide from "@/components/Slides/Slide/AdvertisingSlide";
import Footer from "@/components/Footer";
import ReviewSlide from "@/components/Slides/Slide/ReviewSlide";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <section id="Imoveis" className="mt-[10px] bg-[#F9F9F9] text-center">
        <h1 className="py-[17px] font-medium text-3xl text-[#083B47]">NOSSOS IMOVEIS</h1>
        {/* <CarrouselSwiper /> */}
        <div className="w-full flex justify-center py-[44px]">
          <Button
            text={"VER MAIS"}
            className="bg-white text-black text-3xl font-medium w-[250px] h-[50px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
          />
        </div>
      </section>
      <section className="h-52 flex items-center">
        <AdvertisingSlide />
      </section>
      <section className="flex flex-col items-center">
        <ReviewSlide />
      </section>
      <Footer />
    </>
  );
}
