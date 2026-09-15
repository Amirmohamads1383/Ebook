"use client";

import React from "react";
import { Award, Book, MedalStar, People, Star1 } from "iconsax-react";

const honors = [
  {
    icon: Award,
    title: "برگزیده برتر",
    text: "انتخاب‌شده به عنوان یکی از برترین پلتفرم‌های کتاب دیجیتال",
  },
  {
    icon: Book,
    title: "+۱۰ هزار کتاب",
    text: "مجموعه‌ای گسترده از کتاب‌های صوتی و متنی برای هر سلیقه",
  },
  {
    icon: People,
    title: "+۵۰ هزار کاربر",
    text: "اعتماد هزاران کتاب‌خوان برای تجربه‌ای متفاوت از مطالعه",
  },
  {
    icon: MedalStar,
    title: "رضایت کاربران",
    text: "تلاش همیشگی ما برای ارائه تجربه‌ای ساده و لذت‌بخش",
  },
];

export default function OurHonors() {
  return (
    <section className="container flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-10 lg:pt-16">
      <div className="flex flex-col gap-2">
        <span className="text-Primary-700 text-sm sm:text-base font-medium">
          دستاوردهای ما
        </span>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-Gray-950">
          بخشی از افتخارات ما
        </h3>
        <p className="text-sm sm:text-base text-Gray-600 leading-7 max-w-2xl">
          بخشی از مسیر موفقیت ما، نتیجه اعتماد و همراهی شماست. هر دستاورد برای
          ما انگیزه‌ای است تا تجربه‌ای بهتر برای کتاب‌خوان‌ها بسازیم.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {honors.map((honor, index) => {
          const Icon = honor.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-Gray-30 bg-white p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-Primary-200 hover:shadow-xl"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-Primary-50 transition-all duration-500 group-hover:scale-150" />
              <div className="relative z-10 flex flex-col gap-5">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-Primary-50 text-Primary-600 transition-all duration-300 group-hover:bg-Primary-100 group-hover:text-white">
                    <Icon size="28" variant="Bold" color="#8b6099"/>
                  </div>
                  <Star1
                    size="22"
                    variant="Bold"
                    className="text-Primary-200 transition-all duration-300 group-hover:text-Primary-500 group-hover:rotate-12"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-Gray-950">
                    {honor.title}
                  </h4>
                  <p className="text-sm text-Gray-600 leading-7">
                    {honor.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
