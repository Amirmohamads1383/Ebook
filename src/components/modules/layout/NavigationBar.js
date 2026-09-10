"use client";

import { Book1, Home, Shop, User } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavigationBar() {
  const pathname = usePathname();

  const navigationItems = [
    {
      id: 1,
      title: "خانه",
      href: "/",
      icon: Home,
    },
    {
      id: 2,
      title: "فروشگاه",
      href: "/shop",
      icon: Shop,
    },
    {
      id: 3,
      title: "کتابخانه من",
      href: "/my-library",
      icon: Book1,
    },
    {
      id: 4,
      title: "ورود",
      href: "/login",
      icon: User,
    },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 z-110 block w-full bg-white py-3 navigation-bar-shadow lg:hidden">
      <div className="container flex items-center justify-between">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.title}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                active ? "text-Primary-700" : "text-Gray-200"
              }`}
            >
              <Icon
                variant={active ? "Bold" : "Outline"}
                color={active ? "#744d7e " : "#8A8A8A"}
                size={24}
              />
              <span className="font-medium text-sm">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
