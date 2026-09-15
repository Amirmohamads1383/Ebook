"use client";

import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumb() {
    const pathname = usePathname();

    const pathnames = pathname.split("/").filter((x) => x);

    const getDisplayName = (path) => {
        const names = {
            shop: "فروشگاه",
            products: "محصولات",
            list: "علاقه مندی ها",
            "about-us": "درباره ما",
            blog: "بلاگ",
            "contact-us": "تماس با ما",
            cart: "سبد خرید",
            checkout: "تسویه حساب",
        };

        return names[path] || path;
    };

    return (
        <nav className="container text-Gray-500 pt-4 md:pt-6">
            <ul className="flex items-center gap-1 text-sm text-Caption">
                {/* خانه */}
                <li className="flex items-center gap-1">
                    <Link href="/">خانه</Link>
                    {pathnames.length > 0 && (
                        <ArrowLeft2 variant="Outline" size={16} color="#555555" />
                    )}
                </li>
                {/* مسیر فعلی */}
                {pathnames.map((value, index) => {
                    const href = `/${pathnames
                        .slice(0, index + 1)
                        .join("/")}`;

                    const isLast = index === pathnames.length - 1;
                    return (
                        <li
                            key={href}
                            className="flex items-center gap-1.5"
                        >
                            {isLast ? (
                                <span>{getDisplayName(value)}</span>
                            ) : (
                                <>
                                    <Link href={href}>
                                        {getDisplayName(value)}
                                    </Link>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="m14 7-4 5 4 5"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
