"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft2, Trash, ShoppingBag } from "iconsax-react";
import { toast } from "sonner";

export default function MiniCart({ IsShowMiniCart, setIsShowMiniCart }) {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) {
      setCart([]);
      return;
    }

    try {
      const parsedCart = JSON.parse(savedCart);

      if (Array.isArray(parsedCart)) {
        setCart(parsedCart);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error("Cart Parse Error:", error);
      setCart([]);
    }
  };

  useEffect(() => {
    getCart();

    const handleCartUpdate = () => {
      getCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const removeProduct = (id) => {
    const newCart = cart.filter((item) => item._id !== id);

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));

    // اطلاع دادن به Header
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("محصول از سبد خرید حذف شد");
  };

  const totalCount = cart.reduce(
    (total, item) => total + Number(item.count || 1),
    0,
  );

  const totalPrice = cart.reduce((total, item) => {
    const price =
      Number(item.discountPrice) > 0
        ? Number(item.discountPrice)
        : Number(item.price);

    return total + price * Number(item.count || 1);
  }, 0);

  const formatPrice = (price) => {
    return Number(price).toLocaleString("fa-IR");
  };

  return (
    <div
      className={`absolute left-0 top-15 w-96 p-5 bg-Gray-10 border border-Gray-30 rounded-lg shadow-lg transition-all duration-200 z-110 ${
        IsShowMiniCart
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-Gray-30">
        <div className="flex items-center gap-2">
          <ShoppingBag size={20} color="#744D7E" variant="Outline" />
          <h3 className="font-bold text-Gray-90">سبد خرید</h3>
        </div>
        {totalCount > 0 && (
          <span className="text-sm text-Gray-60">
            {totalCount.toLocaleString("fa-IR")} کالا
          </span>
        )}
      </div>
      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-Gray-20 mb-3">
            <ShoppingBag size={28} color="#ADADAD" />
          </div>
          <p className="text-sm text-Gray-60">سبد خرید شما خالی است</p>
          <Link
            href="/shop"
            onClick={() => setIsShowMiniCart(false)}
            className="mt-4 text-sm font-medium text-Primary-700"
          >
            مشاهده فروشگاه
          </Link>
        </div>
      ) : (
        <>
          {/* Products */}
          <div className="max-h-80 overflow-y-auto space-y-3 pl-1">
            {cart.map((item) => {
              const price =
                Number(item.discountPrice) > 0
                  ? Number(item.discountPrice)
                  : Number(item.price);

              const count = Number(item.count || 1);

              return (
                <div
                  key={item._id}
                  className="flex gap-3 pb-3 border-b border-Gray-20 last:border-0"
                >
                  {/* Image */}
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={() => setIsShowMiniCart(false)}
                    className="relative w-16 h-20 shrink-0 bg-white rounded-md overflow-hidden"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name || "محصول"}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-Gray-50">
                        بدون تصویر
                      </div>
                    )}
                  </Link>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={() => setIsShowMiniCart(false)}
                      className="block text-sm font-medium text-Gray-90 line-clamp-2 hover:text-Primary-700 transition"
                    >
                      {item.name}
                    </Link>
                    {/* Count + Delete */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-Gray-60">
                        تعداد: {count.toLocaleString("fa-IR")}
                      </span>

                      <button
                        type="button"
                        onClick={() => removeProduct(item._id)}
                        className="p-1 text-Error-500 hover:bg-Error-50 rounded-md transition cursor-pointer"
                      >
                        <Trash
                          size={16}
                          variant="Outline"
                          color="currentcolor"
                        />
                      </button>
                    </div>
                    {/* Price */}
                    <div className="mt-2 text-sm font-bold text-Primary-700">
                      {formatPrice(price * count)} تومان
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Total */}
          <div className="mt-4 pt-4 border-t border-Gray-30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-Gray-60">جمع کل:</span>
              <span className="font-bold text-Gray-90">
                {formatPrice(totalPrice)} تومان
              </span>
            </div>
            {/* Cart Button */}
            <Link
              href="/cart"
              onClick={() => setIsShowMiniCart(false)}
              className="w-full h-11 flex items-center justify-center gap-2 bg-Primary-700 text-white rounded-lg hover:bg-Primary-600 transition"
            >
              مشاهده سبد خرید
              <ArrowLeft2 size={18} color="currentColor" variant="Outline" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
