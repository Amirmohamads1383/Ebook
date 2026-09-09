"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function SwiperBanner() {
  return (
    <section className="pb-14">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/banner/Hero-1.webp"
            alt="بنر"
            width={1000}
            height={200}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner/Hero-2.webp"
            alt="بنر"
            width={1000}
            height={200}
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}