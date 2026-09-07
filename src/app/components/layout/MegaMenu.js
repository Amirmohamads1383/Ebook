"use client";
import { ArrowLeft2 } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";

const menuData = [
  {
    id: 1,
    title: "ادبیات",
    heading: "همه کتاب‌های ادبیات",
    items: [
      "شعر و شاعری",
      "ادبیات فارسی",
      "نقد و بررسی ادبی",
      "زندگینامه نویسندگان",
      "کتاب‌های ادبی کلاسیک",
    ],
    images: [
      "/images/mega-menu/literature-1.webp",
      "/images/mega-menu/literature-2.webp",
    ],
  },
  {
    id: 2,
    title: "تاریخ",
    heading: "همه کتاب‌های تاریخی",
    items: [
      "تاریخ ایران",
      "تاریخ جهان",
      "تاریخ اسلام",
      "تاریخ معاصر",
      "زندگینامه شخصیت‌های تاریخی",
    ],
    images: [
      "/images/mega-menu/history-1.webp",
      "/images/mega-menu/history-2.webp",
    ],
  },
  {
    id: 3,
    title: "داستان و رمان",
    heading: "همه کتاب‌های داستان و رمان",
    items: [
      "رمان ایرانی",
      "رمان خارجی",
      "داستان کوتاه",
      "جنایی و معمایی",
      "عاشقانه",
      "فانتزی و علمی تخیلی",
    ],
    images: [
      "/images/mega-menu/novel-1.webp",
      "/images/mega-menu/novel-2.webp",
    ],
  },
  {
    id: 4,
    title: "روانشناسی",
    heading: "همه کتاب‌های روانشناسی",
    items: [
      "موفقیت و رشد فردی",
      "روانشناسی کودک",
      "روانشناسی خانواده",
      "عزت نفس",
      "مدیریت استرس",
      "روابط و ارتباطات",
    ],
    images: [
      "/images/mega-menu/psychology-1.webp",
      "/images/mega-menu/psychology-2.webp",
    ],
  },
  {
    id: 5,
    title: "درسی و کمک درسی",
    heading: "همه کتاب‌های درسی و کمک درسی",
    items: [
      "ابتدایی",
      "متوسطه اول",
      "متوسطه دوم",
      "کنکور",
      "دانشگاه",
      "آزمون‌های آزمایشی",
    ],
    images: [
      "/images/mega-menu/educational-1.webp",
      "/images/mega-menu/educational-2.webp",
    ],
  },
];

export default function MegaMenu({ isMegaOpen, setIsMegaOpen }) {
  /* State */
  const [activeMenu, setActiveMenu] = useState(menuData[0]);

  return (
    <div
      onMouseLeave={() => setIsMegaOpen(false)}
      className={`absolute right-0 top-14 w-275 p-6 bg-white rounded-lg border-2 border-Primary-200 shadow-lg z-100 transition-all duration-200 before:w-full before:h-full before:absolute before:-top-6 before:right-0 before:-z-50
        ${
          isMegaOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }
      `}
    >
      <div className="flex gap-4">
        <ul className="w-48 shrink-0 flex flex-col gap-1.5">
          {menuData.map((menu) => (
            <li key={menu.id}>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu(menu)}
                className={`w-full p-2.5 text-right rounded-md transition ${activeMenu.id === menu.id ? "bg-Primary-100 text-Primary-700 font-bold" : "text-gray-900 hover:bg-Gray-50"}`}
              >
                {menu.title}
              </button>
            </li>
          ))}
        </ul>
        {/* Menu Content */}
        <div className="flex-1 flex gap-6 p-5 bg-Gray-10 rounded-lg">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start">
            <h4 className="mb-4 font-bold text-Gray-950">
              {activeMenu.heading}
            </h4>
            <ul className="flex flex-col gap-1">
              {activeMenu.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-Gray-700 hover:text-Primary-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="flex gap-2 items-center mt-auto pt-4 text-sm font-bold text-Primary-600 hover:text-Primary-700"
            >
              مشاهده همه
              <ArrowLeft2 size={"16px"} variant="Outline" color="#8b6099" />
            </a>
          </div>
          <div className="flex gap-3 shrink-0">
            {activeMenu.images.map((image, index) => (
              <div
                key={index}
                className="relative w-70 h-75 overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`${activeMenu.title} ${index + 1}`}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
