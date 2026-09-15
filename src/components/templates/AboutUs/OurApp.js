import Image from "next/image";
import React from "react";

export default function OurApp() {
  return (
    <section className="container flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 pt-10 lg:pt-16">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-full flex justify-center lg:justify-between before:absolute before:w-24 before:h-24 sm:before:w-32 sm:before:h-32 lg:before:w-90 lg:before:h-90 before:bg-Primary-200 before:rounded-full before:-left-4 sm:before:-left-6 lg:before:left-0 before:top-1/2 before:-translate-y-1/2 before:z-0">
          <Image
            src="/images/about-us/App.webp"
            alt="درباره کنج"
            width={1000}
            height={1000}
            className="relative z-10 w-full max-w-70 sm:max-w-80 md:max-w-96 lg:max-w-110 h-120 object-contain"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed">
          هستیم تا
        </h3>
        <p className="text-Gray-700 text-sm sm:text-base lg:text-lg font-normal leading-8 lg:leading-9 text-justify">
          فناوری را به‌خدمت گرفتیم تا همۀ سلیقه‌ها و ذائقه‌ها بتوانند بی‌محدودیت
          از مطالعه لذت ببرند. همراه داشتن بیش از صدهزار کتاب برای مطالعه در هر
          جا حالا رؤیایی‌ست که حقیقی شده. با فیدیبو می‌توانید در موبایل، تبلت،
          کامپیوتر و دستگاه فیدیبوک مطالعه کنید.
        </p>
      </div>
    </section>
  );
}
