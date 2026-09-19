"use client";

import ProductCard from "@/components/modules/ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function SwiperPro() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/product");

        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const data = await response.json();

        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("GET PRODUCTS ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-10 text-center">
        در حال دریافت محصولات...
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="w-full py-10 text-center">
        محصولی پیدا نشد
      </div>
    );
  }

  return (
    <div className="relative">
      <button className="image-swiper-button-next absolute -left-5 top-1/2 w-9 h-9 bg-white rounded-full z-100 flex -translate-y-1/2 items-center justify-center cursor-pointer">
        <ArrowLeft2
          variant="Outline"
          color="#9D9D9D"
          size={24}
        />
      </button>

      <Swiper
        className="w-full rounded-md"
        modules={[Navigation, Autoplay]}
        loop={products.length > 1}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
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
            slidesPerGroup: 1,
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
      <button className="image-swiper-button-prev absolute -right-5 top-1/2 w-9 h-9 bg-white rounded-full z-100 flex -translate-y-1/2 items-center justify-center cursor-pointer">
        <ArrowRight2
          variant="Outline"
          color="#9D9D9D"
          size={24}
        />
      </button>
    </div>
  );
}