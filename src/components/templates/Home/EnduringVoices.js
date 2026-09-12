import Image from "next/image";
import React from "react";

export default function EnduringVoices() {
  const speakers = [
    {
      id: 1,
      name: "هوتن شکیبا",
      image: "/images/speakers/Hotan-shakiba.webp",
    },
    {
      id: 2,
      name: "سلطانزاده",
      image: "/images/speakers/Arman-soltanzadeh.webp",
    },
    {
      id: 3,
      name: "پیام دهکردی",
      image: "/images/speakers/Payam-dehkordi.webp",
    },
    {
      id: 4,
      name: "رضا کیانیان",
      image: "/images/speakers/Reza-kianian.webp",
    },
    {
      id: 5,
      name: "رضا عمرانی",
      image: "/images/speakers/Reza-omrani.webp",
    },
  ];

  return (
    <section className="container pb-10 md:pb-14">
      <h3 className="mb-4 md:mb-6 lg:mb-7 text-sm md:text-2xl font-bold text-Gray-950">
        صداهای ماندگار:
      </h3>
      <div className="flex items-stretch gap-3 md:gap-4 lg:gap-5 overflow-x-auto pb-2 scrollbar-hide">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="shrink-0 w-32 md:w-40 lg:w-auto lg:flex-1 p-4 md:p-6 lg:p-7 xl:p-8 flex flex-col items-center justify-center bg-white border border-Gray-20 rounded-lg"
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
            />
            <span className="pt-2 md:pt-3 text-xs md:text-base lg:text-lg xl:text-xl font-bold text-Gray-800 text-center whitespace-nowrap">
              {speaker.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
