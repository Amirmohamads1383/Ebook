import { Archive, Star1 } from "iconsax-react";
import Image from "next/image";
import React from "react";

export default function ProductInfo() {
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-6">
      <div className="flex items-center gap-8 p-6 bg-white rounded-lg">
        <Image
          src={"/images/Book image.png"}
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
                وقتی نیچه گریست
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
                  <span className="text-Gray-950">اروین د. یالوم</span>
                </li>
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">مترجم :</span>
                  <span className="text-Gray-950">سپیده حبیب</span>
                </li>
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">تعداد صفحات :</span>
                  <span className="text-Gray-950">۹۳۵</span>
                </li>
                <li className="flex items-center gap-1 font-medium">
                  <span className="text-Gray-300">سال انتشار :</span>
                  <span className="text-Gray-950"> ۱۳۹۸</span>
                </li>
              </ul>
              <span className="absolute top-0 left-0 p-2 border-2 border-Gray-30 rounded-md cursor-pointer">
                <Archive size={20} color="#8A8A8A" variant="Bold" />
              </span>
            </div>
            {/* Price */}
            <div className="flex flex-col items-end justify-end gap-2 pt-4 border-t border-t-Gray-30">
              <div className="flex items-center gap-2">
                <span className="text-Gray-200 line-through">118,000</span>
                <span className="w-12 h-6 text-sm font-bold flex items-center justify-center rounded-full bg-Error-600 text-white">
                  ٪۳۰
                </span>
              </div>
              <p className="text-lg font-bold flex items-center gap-1 text-Gray-950">
                82,600
                <span className="text-Gray-300 text-sm">تومان</span>
              </p>
            </div>
          </div>
          <button className="text-center py-4 bg-Primary-700 hover:bg-Primary-900 text-white rounded-lg cursor-pointer transition">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg"></div>
    </div>
  );
}
