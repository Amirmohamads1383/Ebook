"use client";
import {
  ArrowDown2,
  ArrowLeft2,
  Book,
  BookSquare,
  SearchNormal1,
  ShoppingBag,
  User,
} from "iconsax-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import MiniCart from "./MiniCart";
import UserDropDown from "../Header/UserDropDown";

export default function Header() {
  const menus = [
    { id: 1, title: "فروشگاه", url: "/shop" },
    { id: 2, title: "وبلاگ", url: "/blog" },
    { id: 3, title: "تماس با ما", url: "/contact-us" },
    { id: 4, title: "درباره ما", url: "/about-us" },
  ];

  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [IsShowMiniCart, setIsShowMiniCart] = useState(false);
  const [isShowUserDropDown, setIsShowUserDropDown] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Check User Is Login */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        if (data.authenticated) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth Check Error:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <header className="container py-4 md:py-5 flex flex-col gap-4 md:gap-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logo + Search */}
        <div className="flex items-center gap-4 md:gap-8 flex-1">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-Primary-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={88}
                height={50}
                viewBox="0 0 88 50"
                fill="none"
                className="w-12.5 sm:w-20 lg:w-22 h-auto"
              >
                <g clipPath="url(#a)" fill="#744d7e">
                  <path d="M11.702 42.656q-3.42 0-5.652-1.224-2.196-1.188-3.24-3.24-1.044-2.016-1.044-4.464 0-4.68 2.736-7.38 2.772-2.736 7.632-4.572-1.656-.468-3.348-.864-1.656-.432-2.268-.432-.684 0-1.116.324-.396.288-.72.684t-.504.612a.9.9 0 0 1-.648.288q-.432 0-.756-.324-.288-.324-.216-.792.432-2.7 1.548-4.248 1.152-1.584 3.204-1.908.504-.072.72-.072 1.152 0 2.412.432 1.296.396 3.384 1.26a62 62 0 0 0 3.492 1.368q1.44.468 2.88.612.648.108.648.576 0 .072-.108.504l-1.044 4.14-1.08.324q.18.864.9 1.26.72.36 2.16.36h1.368l.36 3.06-.36 3.06h-.576q-2.988 0-4.464-1.548t-1.62-5.508q-3.6 1.224-6.372 2.7-2.772 1.44-4.284 2.844-1.512 1.368-1.512 2.448 0 1.728 2.16 2.664 2.196.936 5.472.936 3.78 0 8.892-1.296.108-.036.324-.036.612 0 .612.648 0 .504-.216.972-.252.684-.72 1.548-.468.9-.828 1.332-1.044 1.296-3.42 2.124-2.34.828-4.788.828m-2.088-10.26q-.252-.216-.252-.432 0-.18.252-.432l2.088-2.124q.252-.252.396-.252.18 0 .396.252l2.16 2.124q.288.288.288.432t-.288.432l-2.088 2.124q-.216.216-.36.216-.18 0-.396-.216zm13.065-6.516h.288q1.62 0 2.592-.324.972-.36 1.692-1.332t1.368-2.988q.144-.432.432-.684.324-.252.648-.252.396 0 .648.324.288.288.288.864 0 .972-.108 1.944t-.216 1.476q.324.396 1.44.684 1.152.288 1.908.288h.36l.36 3.06-.36 3.06h-.36a5.73 5.73 0 0 1-3.06-.864q-1.368-.864-1.872-2.448-.864 1.332-2.304 2.34-1.44.972-3.456.972h-.288zm1.188-10.656q-.252-.216-.252-.432 0-.18.252-.432l2.088-2.124q.252-.252.396-.252.18 0 .396.252l2.16 2.124q.288.288.288.432t-.288.432l-2.088 2.124q-.216.216-.36.216-.18 0-.396-.216zm12.939-6.992q-.288 0-.9-.252t-.9-.504q-.144-.108-.144-.252t.288-.216a35 35 0 0 0 2.844-.648 9.8 9.8 0 0 0 2.268-.936 4.3 4.3 0 0 1-.936-.036 4 4 0 0 1-.972-.324 2.3 2.3 0 0 1-.792-.72 2 2 0 0 1-.252-.972q0-.396.252-.972.36-.756.972-1.188.612-.468 1.26-.468.324 0 .684.18.648.324.972 1.008.324.648.324 1.476 0 .648-.216 1.332a3.8 3.8 0 0 1-.612 1.152q-.792 1.008-2.088 1.656t-2.052.684m1.548-5.76q-.072.324.072.684.18.324.612.54.54.324 1.044.468.504.108.576.144a2.2 2.2 0 0 0-.252-1.188q-.252-.576-.684-.828a1.2 1.2 0 0 0-.612-.144.96.96 0 0 0-.756.324m-4.6 23.408h.72q3.06 0 5.112-.216 2.088-.252 2.592-1.152-.72-1.548-2.808-3.744a32.3 32.3 0 0 0-4.32-3.888l.72-5.184 12.924-5.652q.288-.144.576-.144.324 0 .504.216.216.18.216.504 0 .18-.036.288l-.936 4.644-8.604 3.42q1.764 2.124 3.06 4.86 1.332 2.736 1.332 5.184 0 1.404-.468 2.484-1.116 2.664-3.6 3.6-2.448.9-6.372.9h-.612z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M63.202 13.972c3.542.018 6.557 1.106 9.452 2.59.347.18.694.742.7 1.125.037 3.925.035 7.85.032 11.897l-.002 3.375c-.217-.07-.415-.136-.603-.198a33 33 0 0 0-.988-.316l-1.985-.585h-.001c-1.902-.56-3.805-1.12-5.696-1.718-.359-.114-.861-.58-.867-.886-.049-4.098-.046-8.197-.043-12.369zm11.396 19.071-.001-3.182c-.002-4.15-.004-8.142.025-12.138 0-.33.227-.814.496-.97 2.973-1.663 6.108-2.776 9.775-2.764v2.19q0 1.564-.002 3.127c-.003 3.125-.007 6.249.02 9.376.006.945-.257 1.328-1.268 1.568-1.828.436-3.627 1-5.425 1.563q-.921.29-1.844.572c-.31.095-.61.212-.974.353-.235.091-.496.193-.802.305m-12.605-2.225V16.544c-1.501.891-2.022 1.872-1.986 3.344q.137 5.889-.006 11.767c-.03 1.328.485 1.61 1.67 1.801 2.482.4 4.994.844 7.375 1.627 1.562.515 2.483.096 3.817-1.268a10634 10634 0 0 0-10.87-2.997m13.479 3.248a29.3 29.3 0 0 1 9.165-2.698c1.238-.15 1.55-.586 1.531-1.759a563 563 0 0 1-.029-9.247q.005-1.779.005-3.59c1.233.616 1.86 1.333 1.843 2.661a396 396 0 0 0 .012 12.228c.024 1.197-.359 1.58-1.543 1.771-2.537.407-5.103.856-7.538 1.651-1.52.503-2.417.126-3.446-1.017m-3.123 1.962c1.603-1.441 1.663-1.441 3.392 0z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h88v50H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Link>
          {/* Search */}
          <form className="hidden md:block flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="کتاب، نویسنده یا موضوع رو بنویس"
              className="w-full placeholder:text-Gray-100 text-Gray-900 outline-0 p-3 border border-Gray-40 rounded-lg"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <SearchNormal1 size={24} color="#B0B0B0" variant="Outline" />
            </span>
          </form>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* My Library */}
          <button className="hidden lg:flex items-center justify-center gap-2 p-3 font-medium text-Primary-700 border-2 border-Gray-40 rounded-lg cursor-pointer">
            کتابخانه من
            <Book variant="Outline" size={20} color="#744d7e" />
          </button>
          {/* Cart */}
          <div
            className="relative"
            onMouseEnter={() => setIsShowMiniCart(true)}
            onMouseLeave={() => setIsShowMiniCart(false)}
          >
            <Link
              href="/cart"
              className="flex items-center justify-center relative p-2.5 border-2 border-Gray-40 rounded-lg"
            >
              <ShoppingBag variant="Outline" size={28} color="#744d7e" />
              <span className="absolute -top-1 -left-2 w-4 h-4 flex items-center justify-center text-[10px] text-white bg-Error-500 rounded-full">
                0
              </span>
            </Link>
            <MiniCart
              IsShowMiniCart={IsShowMiniCart}
              setIsShowMiniCart={setIsShowMiniCart}
            />
          </div>
          {/* Login & Account */}
          {!loading && (
            <>
              {!user ? (
                <Link
                  href="/login"
                  className="hidden lg:flex items-center justify-center gap-2 font-medium p-3 text-white bg-Primary-700 hover:bg-Primary-600 transition rounded-lg"
                >
                  <User variant="Outline" size={20} color="#fff" />
                  ورود/ثبت نام
                </Link>
              ) : (
                <>
                  <div
                    className="relative"
                    onMouseEnter={() => setIsShowUserDropDown(true)}
                    onMouseLeave={() => setIsShowUserDropDown(false)}
                  >
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-3.5 py-3 border-2 border-Gray-40 rounded-lg"
                    >
                      <User size={24} variant="Outline" color="#744D7E" />
                      <ArrowDown2 size={24} variant="Outline" color="#744D7E" />
                    </Link>
                    <UserDropDown
                      isShowUserDropDown={isShowUserDropDown}
                      setIsShowUserDropDown={setIsShowUserDropDown}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {/* Search */}
      <form className="md:hidden w-full relative">
        <input
          type="text"
          placeholder="کتاب، نویسنده یا موضوع رو بنویس"
          className="w-full placeholder:text-Gray-100 text-Gray-900 outline-0 p-3 pr-4 border border-Gray-40 rounded-lg"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <SearchNormal1 size={22} color="#B0B0B0" variant="Outline" />
        </span>
      </form>
      {/* Bottom Header */}
      <div className="hidden lg:flex items-center justify-between relative">
        <nav>
          <ul className="flex items-center gap-4 *:text-Gray-900 *:font-semibold *:text-lg">
            {/* Mega Menu */}
            <li
              className="flex items-center justify-center gap-2 pl-3 border-l border-l-Gray-30 cursor-pointer"
              onMouseEnter={() => setIsMegaOpen(true)}
            >
              <BookSquare size={20} color="#787878" variant="Outline" />
              دسته بندی ها
            </li>
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
          <MegaMenu isMegaOpen={isMegaOpen} setIsMegaOpen={setIsMegaOpen} />
        </nav>
        {/* Download App */}
        <button className="flex items-center justify-center gap-2 p-3 pl-0 font-normal text-Primary-700 cursor-pointer">
          دانلود اپلیکیشن
          <ArrowLeft2 size={20} color="#744D7E" variant="Outline" />
        </button>
      </div>
    </header>
  );
}
