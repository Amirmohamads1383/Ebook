"use client";

import React from "react";
import ProductCard from "@/components/modules/ProductCard/ProductCard";
import TitleHeader from "@/components/modules/TitleHeader/TitleHeader";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function RelatedProducts({ title, products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="container py-10 md:py-14">
      <TitleHeader title={title} href="/" />
      <div className="relative">
        <button
          className="related-swiper-next absolute -left-5 top-1/2 z-100 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white"
          type="button"
        >
          <ArrowLeft2 variant="Outline" color="#9D9D9D" size={24} />
        </button>
        <Swiper
          className="w-full rounded-md"
          modules={[Navigation, Autoplay]}
          loop={products.length > 1}
          navigation={{
            nextEl: ".related-swiper-next",
            prevEl: ".related-swiper-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
            1330: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="related-swiper-prev absolute -right-5 top-1/2 z-100 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white"
          type="button"
        >
          <ArrowRight2 variant="Outline" color="#9D9D9D" size={24} />
        </button>
      </div>
    </section>
  );
}
