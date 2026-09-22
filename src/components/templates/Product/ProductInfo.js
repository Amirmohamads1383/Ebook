"use client";
import {
  Archive,
  ArrowCircleDown2,
  ArrowCircleUp2,
  Star1,
} from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ProductInfo({ product }) {
  const [readMore, setReadMore] = useState(false);
  const [count, setCount] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length) {
      const isInCart = cart.some((item) => item.id === product._id);

      if (isInCart) {
        cart.forEach((item) => {
          if (item.id === product._id) {
            item.count = item.count + count;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("محصول با موفقیت به سبد خرید اضافه شد");
      } else {
        const cartItem = {
          id: product._id,
          image: product.image,
          name: product.name,
          price: product.price,
          discountPrice: product.discountPrice,
          count,
          author: product.author,
          translator: product.translator,
        };

        cart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("محصول با موفقیت به سبد خرید اضافه شد");
      }
    } else {
      const cartItem = {
        id: product._id,
        image: product.image,
        name: product.name,
        price: product.price,
        discountPrice: product.discountPrice,
        count,
        author: product.author,
        translator: product.translator,
      };

      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    }
  };

  const addToMyLibrary = () => {
    const library = JSON.parse(localStorage.getItem("my_library")) || [];

    const isExist = library.some((item) => item._id === product._id);

    if (isExist) {
      const updatedLibrary = library.filter((item) => item._id !== product._id);

      localStorage.setItem("my_library", JSON.stringify(updatedLibrary));

      toast.error("محصول از کتابخانه شما حذف شد");
    } else {
      const updatedLibrary = [...library, product];

      localStorage.setItem("my_library", JSON.stringify(updatedLibrary));

      toast.success("محصول به کتابخانه شما اضافه شد");
    }
  };

  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-6">
      <div className="flex items-center gap-8 p-6 bg-white rounded-lg">
        <Image
          src={product.image}
          alt="test"
          width={274}
          className="rounded-lg"
          height={415}
        />
        <div className="flex flex-col gap-6 grow">
          <div className="flex flex-col gap-4">
            {/* Title */}
            <div className="flex items-center justify-between pb-4 border-b border-b-Gray-30">
              <h2 className="text-xl font-semibold text-Gray-950">
                {product.name}
              </h2>
              <span className="flex items-center gap-1.5 text-sm lg:text-base text-Gray-950">
                <Star1 variant="Bold" color="#E1BD09" size={20} />
                4.3
              </span>
            </div>
            {/* Features */}
            <div className="relative">
              <ul className="flex flex-col gap-3 items-start">
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">نویسنده:</span>
                  <span className="text-Gray-950">{product.author}</span>
                </li>
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">مترجم :</span>
                  <span className="text-Gray-950">{product.translator}</span>
                </li>
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">تعداد صفحات :</span>
                  <span className="text-Gray-950">{product.pages}</span>
                </li>
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">سال انتشار :</span>
                  <span className="text-Gray-950">{product.publishYear}</span>
                </li>
              </ul>
              <span
                className="absolute top-0 left-0 p-2 border-2 border-Gray-30 rounded-md cursor-pointer"
                onClick={addToMyLibrary}
              >
                <Archive size={20} color="#8A8A8A" variant="Bold" />
              </span>
            </div>
            {/* Price */}
            <div className="flex flex-col items-end justify-end gap-2 pt-4 border-t border-t-Gray-30">
              <div className="flex items-center gap-2">
                <span className="text-Gray-200 line-through">
                  {product.price.toLocaleString()}
                </span>
                <span className="w-12 h-6 text-sm font-bold flex items-center justify-center rounded-full bg-Error-600 text-white">
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) *
                      100,
                  ) + "%"}
                </span>
              </div>
              <p className="text-lg font-bold flex items-center gap-1 text-Gray-950">
                {product.discountPrice.toLocaleString()}
                <span className="text-Gray-300 text-sm">تومان</span>
              </p>
            </div>
          </div>
          <button
            className="text-center py-4 bg-Primary-700 hover:bg-Primary-900 text-white rounded-lg cursor-pointer transition"
            onClick={addToCart}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg">
        <span className="font-semibold text-Gray-950">درباره کتاب:</span>
        <p
          className={`text-sm/relaxed font-medium my-3 text-Gray-950 ${readMore ? "line-clamp-none" : "line-clamp-3"}`}
        >
          {product.description}
        </p>
        <button
          className="flex items-center gap-1.5 text-Primary-700 cursor-pointer"
          onClick={() => setReadMore(!readMore)}
        >
          {!readMore ? (
            <>
              <span>مشاهده بیشتر</span>
              <ArrowCircleDown2 variant="Outline" size={20} color="#744D7E" />
            </>
          ) : (
            <>
              <span>مشاهده کمتر</span>
              <ArrowCircleUp2 variant="Outline" size={20} color="#744D7E" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
