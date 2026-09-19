import { Book, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  const hasDiscount =
    product.discountPrice &&
    product.discountPrice < product.price;

  const discountPercent = hasDiscount
    ? Math.round(
      ((product.price - product.discountPrice) /
        product.price) *
      100
    )
    : 0;

  return (
    <div className="rounded-lg">
      <div className="relative flex items-center justify-center p-9 bg-Gray-20 rounded-t-lg">
        {/* Image */}
        <Link href={`/product/${product.slug}`} className="w-32 h-49.5 object-cover">
          <Image src={product.image} alt={product.name} height={198} width={125} className="product-image-shadow rounded-lg"/>
        </Link>
        {/* Discount */}
        {hasDiscount && (
          <span className="absolute right-0 top-5 w-10 md:w-14 flex items-center justify-center font-semibold text-sm md:text-lg bg-Error-600 text-white border-2 border-Gray-20 rounded-tl-lg rounded-bl-lg">
            {discountPercent}%
          </span>
        )}
        {/* Category */}
        <span className="absolute bottom-3 left-0 py-1 px-2 bg-Gray-300 text-Gray-20 rounded-tr-full rounded-br-full">
          <Book
            variant="Outline"
            size={16}
            color="#ebebeb"
          />
        </span>
      </div>

      <div className="p-3 bg-white rounded-b-lg">
        <div className="flex flex-col items-start gap-1 md:gap-2">
          {/* Product Title */}
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-sm md:text-base font-semibold line-clamp-1 text-gray-950 hover:text-Primary-900 transition">
              {product.name}
            </h3>
          </Link>

          {/* Author */}
          <span className="text-xs text-Gray-200">
            {product.author}
          </span>
          {/* Star */}
          <div className="flex items-center gap-1">
            <Star1
              color="#E1BD09"
              size={16}
              variant="Bold"
            />
            <span className="text-xs text-Gray-950">
              4.1
            </span>
            <span className="text-xs text-Gray-50">
              (۹۸)
            </span>
          </div>
        </div>
        <div className="pt-3 mt-3 md:pt-4 md:mt-4 flex items-center justify-between border-t border-t-Gray-30">
          {/* Old Price */}
          {hasDiscount ? (
            <div className="text-xs sm:text-sm relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-px before:bg-Gray-100 text-Gray-100">
              {product.price.toLocaleString("fa-IR")}
            </div>
          ) : (
            <div></div>
          )}
          {/* Final Price */}
          <span className="flex items-center gap-1 font-bold text-sm sm:text-base text-Gray-950">
            {(
              hasDiscount
                ? product.discountPrice
                : product.price
            ).toLocaleString("fa-IR")}
            <span className="text-xs font-normal">
              تومان
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}