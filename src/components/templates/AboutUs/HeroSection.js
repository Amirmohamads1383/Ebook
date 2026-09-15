import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 pt-8 lg:pt-14">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed">
          دنیای الکترونیکتان را کتابخانه کردیم
        </h3>
        <p className="text-Gray-700 text-sm sm:text-base lg:text-lg font-normal leading-8 lg:leading-9 text-justify">
          کنج، جایی برای کشف دوباره لذت کتاب‌خوانی‌ست. چه در مسیر شلوغ مترو
          باشی، چه نیمه‌شب کنار پنجره، کنج با صدای داستان‌ها و متن‌های الهام‌بخش
          همراه توست. اینجا دیگر لازم نیست بین "خواندن" و "شنیدن" یکی را انتخاب
          کنی — کنج، کتاب را همان‌طور که زندگی می‌کنی به تو می‌رساند: ساده،
          بی‌وقفه، و همیشه در دسترس. برای آن‌هایی که وقت ندارند اما دل‌شان برای
          کتاب تنگ است، کنج طراحی شده.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-full flex justify-center lg:justify-end before:absolute before:w-24 before:h-24 sm:before:w-32 sm:before:h-32 lg:before:w-90 lg:before:h-90 before:bg-Primary-200 before:rounded-full before:-left-4 sm:before:-left-6 lg:before:-left-10 before:top-1/2 before:-translate-y-1/2 before:z-0">
          <Image
            src="/images/about-us/about-us.webp"
            alt="درباره کنج"
            width={1000}
            height={1000}
            className="relative z-10 w-full max-w-100 sm:max-w-125 md:max-w-150 lg:max-w-175 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}