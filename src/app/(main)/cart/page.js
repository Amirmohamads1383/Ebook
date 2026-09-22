"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash, ArrowLeft2, ShoppingCart, Book1 } from "iconsax-react";
import Swal from "sweetalert2";
import Breadcrumb from "@/components/modules/Breadcrump/Breadcrump";

const CART_KEY = "cart";

export default function Page() {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_KEY);

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error("خطا در خواندن سبد خرید:", error);
      setCart([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const removeFromCart = async (productId) => {
    const result = await Swal.fire({
      title: "حذف محصول",
      text: "آیا مطمئن هستید که می‌خواهید این محصول را از سبد خرید حذف کنید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "انصراف",
      reverseButtons: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
    });

    if (result.isConfirmed) {
      const newCart = cart.filter(
        (item) => item._id !== productId && item.id !== productId,
      );

      setCart(newCart);

      localStorage.setItem(CART_KEY, JSON.stringify(newCart));

      Swal.fire({
        title: "حذف شد",
        text: "محصول از سبد خرید حذف شد.",
        icon: "success",
        confirmButtonText: "باشه",
        confirmButtonColor: "#83518D",
      });
    }
  };

  const getOriginalPrice = (product) => {
    return Number(product.price || 0);
  };

  const getDiscountPrice = (product) => {
    const price = Number(product.price || 0);
    const discountPrice = Number(product.discountPrice || 0);

    // اگر تخفیف وجود نداشته باشد، همان قیمت اصلی محاسبه شود
    if (!discountPrice || discountPrice >= price) {
      return price;
    }

    return discountPrice;
  };

  const getQuantity = (product) => {
    const count = Number(product.count);
    return Number.isFinite(count) && count > 0 ? count : 1;
  };

  const totalOriginalPrice = cart.reduce((total, product) => {
    return total + getOriginalPrice(product) * getQuantity(product);
  }, 0);

  const totalDiscountPrice = cart.reduce((total, product) => {
    return total + getDiscountPrice(product) * getQuantity(product);
  }, 0);

  const totalDiscount = totalOriginalPrice - totalDiscountPrice;

  const formatPrice = (price) => {
    return Number(price).toLocaleString("fa-IR");
  };

  const getDiscountPercent = (product) => {
    const originalPrice = getOriginalPrice(product);
    const discountPrice = getDiscountPrice(product);

    if (!originalPrice || !discountPrice || discountPrice >= originalPrice) {
      return null;
    }

    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  };

  return (
    <>
      <Breadcrumb />
      {cart.length ? (
        <div className="container pt-8 md:pt-10 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-5 items-start">
            <section className="space-y-4">
              {cart.map((product, index) => {
                const productId = product._id || product.id || index;
                const originalPrice = getOriginalPrice(product);
                const discountPrice = getDiscountPrice(product);
                const quantity = getQuantity(product);
                const discountPercent = getDiscountPercent(product);

                return (
                  <div
                    key={productId}
                    className="bg-white rounded-xl p-4 md:p-5 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="relative w-full md:w-37.5 h-52.5 md:h-47.5 shrink-0">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.title || product.name || "محصول"}
                              fill
                              className="object-cover"
                              sizes="150px"
                              loading="eager"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Book1
                                size="50"
                                color="#ADADAD"
                                variant="Outline"
                              />
                            </div>
                          )}
                        </div>
                        {discountPercent && (
                          <span className="absolute top-2 right-2 min-w-10 h-7 px-2 rounded-md bg-Error-600 text-white text-xs font-bold flex items-center justify-center">
                            %{discountPercent.toLocaleString("fa-IR")}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex-1">
                          <h2 className="text-lg font-bold text-black mb-4">
                            {product.title || product.name || "نام محصول"}
                          </h2>
                          {product.author && (
                            <p className="text-sm text-Gray-700 mb-2">
                              <span className="font-bold">نویسنده:</span>{" "}
                              {product.author}
                            </p>
                          )}
                          {product.translator && (
                            <p className="text-sm text-Gray-700">
                              <span className="font-bold">مترجم:</span>{" "}
                              {product.translator}
                            </p>
                          )}
                          {quantity > 1 && (
                            <p className="text-sm text-Caption mt-3">
                              تعداد: {quantity.toLocaleString("fa-IR")}
                            </p>
                          )}
                        </div>
                        <div className="border-t border-gray-100 mt-5 pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                          <div className="flex items-center gap-3">
                            {originalPrice !== discountPrice && (
                              <span className="text-sm text-Gray-400 line-through">
                                {formatPrice(originalPrice * quantity)}
                              </span>
                            )}
                            <span className="text-sm font-bold text-gray-700">
                              {formatPrice(discountPrice * quantity)} تومان
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(productId)}
                            className="group h-12 px-5 rounded-lg border border-Error-600 text-Error-600 font-medium flex items-center justify-center gap-2 hover:bg-Error-600 hover:text-white transition-all cursor-pointer"
                          >
                            <Trash
                              size="20"
                              variant="Outline"
                              color="currentColor"
                            />
                            <span>حذف از سبد</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
            <aside className="bg-white rounded-xl p-5 md:p-6 lg:sticky lg:top-5 shadow-sm">
              <div className="mb-7">
                <h2 className="text-lg font-bold text-Title mb-4">کد تخفیف</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    disabled
                    placeholder="کد تخفیف را وارد کنید"
                    className="w-full h-11 px-3 rounded-lg border border-gray-200 outline-none text-sm text-right bg-white"
                  />

                  <button
                    type="button"
                    disabled
                    className="shrink-0 h-11 px-4 rounded-lg bg-gray-200 text-gray-400 text-sm cursor-not-allowed"
                  >
                    اعمال
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-5">
                <h2 className="text-lg font-bold text-Title mb-5">فاکتور</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">جمع کل:</span>
                    <span className="text-gray-700">
                      {formatPrice(totalOriginalPrice)} تومان
                    </span>
                  </div>
                  {totalDiscount > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">تخفیف:</span>
                      <span className="text-Error-600">
                        {formatPrice(totalDiscount)} تومان
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-Title">قابل پرداخت:</span>
                    <span className="font-bold text-lg text-Title">
                      {formatPrice(totalDiscountPrice)} تومان
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full h-12 mt-6 rounded-lg bg-[#83518D] text-white font-bold text-base hover:bg-[#70447A] transition-colors"
                >
                  پرداخت
                </button>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <div className="container pt-8 md:pt-10 lg:pt-16">
          <div className="bg-white rounded-2xl min-h-112.5 flex flex-col items-center justify-center px-6 text-center shadow-sm">
            <div className="w-24 h-24 rounded-full bg-Primary-100 flex items-center justify-center mb-6">
              <ShoppingCart size="48" color="#83518D" variant="Bold" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-Title mb-3">
              سبد خرید شما خالی است
            </h1>
            <p className="text-sm md:text-base text-Caption max-w-md leading-7 mb-7">
              هنوز هیچ کتابی به سبد خرید خود اضافه نکرده‌اید. از فروشگاه دیدن
              کنید و کتاب مورد علاقه خود را انتخاب کنید.
            </p>
            <Link
              href="/shop"
              className="h-12 px-8 rounded-xl bg-Primary-600 text-white flex items-center justify-center gap-2 font-bold hover:bg-Primary-700 transition-colors"
            >
              <span>رفتن به فروشگاه</span>
              <ArrowLeft2 size="18" variant="Outline" color="#ffffff" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
