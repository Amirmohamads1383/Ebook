import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function TitleHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between mb-3 md:mb-5 lg:mb-7">
      <h3 className="text-sm md:text-2xl font-bold text-Gray-950">{title}</h3>
      <Link href={href}>
        <button className="flex items-center gap-2 text-xs md:text-sm lg:text-base lg:font-medium text-Primary-700 cursor-pointer">
          مشاهده بیشتر
          <ArrowLeft2
            size={20}
            color="#744D7E"
            variant="Outline"
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
      </Link>
    </div>
  );
}
