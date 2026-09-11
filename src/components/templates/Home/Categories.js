import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
    const categories = [
        {
            id: 1,
            title: "کتاب صوتی",
            icon: "/images/category/listen-book.webp",
            slug: "audio-books",
        },
        {
            id: 2,
            title: "کتاب متنی",
            icon: "/images/category/text-book.webp",
            slug: "text-books",
        },
        {
            id: 3,
            title: "کتاب تاریخی",
            icon: "/images/category/history.webp",
            slug: "history-books",
        },
        {
            id: 4,
            title: "روانشناسی",
            icon: "/images/category/science.webp",
            slug: "psychology",
        },
        {
            id: 5,
            title: "رمان خارجی",
            icon: "/images/category/novel.webp",
            slug: "foreign-novels",
        },
    ];

    return (
        <section className="container pb-14">
            <div className="flex items-center justify-start lg:justify-center gap-4 overflow-x-auto">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="flex flex-col md:flex-row min-w-fit items-center gap-5 rounded-lg border-2 border-dashed border-Gray-50 bg-white px-2 md:px-5 py-3 transition-all hover:border-Primary-500 hover:shadow-sm"
                    >
                        <Image src={category.icon} alt={category.title} width={36} height={36} className="w-6 h-6 md:w-8 md:h-8" />
                        <span className="whitespace-nowrap text-lg md:text-xl font-bold text-Gray-950">
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
