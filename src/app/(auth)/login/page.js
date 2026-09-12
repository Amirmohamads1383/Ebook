"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center py-4">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-120">
            {/* Form Section */}
            <div className="flex items-center justify-start p-6 sm:p-10 lg:p-12">
              <div className="w-full max-w-md">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-sm font-medium text-Primary-700 mb-6"
                >
                  <ArrowRight size={16} variant="Outline" color="#744d7e" />
                  بازگشت به صفحه اصلی
                </Link>
                {/* Title */}
                <div className="text-start mb-8">
                  <h1 className="text-2xl font-bold text-Gray-950 mb-3">
                    {isLogin ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}
                  </h1>
                  <p className="text-sm text-Gray-300">
                    {isLogin
                      ? "برای ادامه وارد حساب کاربری خود شوید"
                      : "حساب کاربری خود را ایجاد کنید و شروع کنید"}
                  </p>
                </div>
                {/* Form */}
                <form className="space-y-5">
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-Gray-200 mb-2">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        className="w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-Gray-200 mb-2">
                      شماره موبایل
                    </label>
                    <input
                      type="tel"
                      placeholder="مثلاً ۰۹۱۲۱۲۳۴۵۶۷"
                      className="rtl w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-Gray-200 mb-2">
                      رمز عبور
                    </label>
                    <input
                      type="password"
                      placeholder="رمز عبور خود را وارد کنید"
                      className="rtl w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                    />
                  </div>
                  {isLogin && (
                    <div className="flex items-center justify-between text-sm">
                      <label
                        htmlFor="hr"
                        className="flex flex-row items-center gap-2 text-Gray-700 cursor-pointer"
                      >
                        <input
                          id="hr"
                          type="checkbox"
                          className="peer hidden"
                        />
                        <div
                          htmlFor="hr"
                          className="h-5 w-5 flex rounded-md border border-Gray-50 peer-checked:bg-Primary-700 transition"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 stroke-Gray-10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12.6111L8.92308 17.5L20 6.5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                        مرا به خاطر بسپار
                      </label>
                      <button
                        type="button"
                        className="text-Primary hover:underline cursor-pointer"
                      >
                        فراموشی رمز عبور
                      </button>
                    </div>
                  )}
                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-Primary-700 cursor-pointer text-white font-bold hover:opacity-90 transition"
                  >
                    {isLogin ? "ورود" : "ثبت نام"}
                  </button>
                </form>
                {/* Switch Login / Register */}
                <div className="mt-8 text-center text-sm">
                  <span className="text-Caption">
                    {isLogin
                      ? "حساب کاربری ندارید؟"
                      : "قبلاً حساب کاربری ساخته‌اید؟"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="mr-2 text-Primary font-bold hover:underline cursor-pointer"
                  >
                    {isLogin ? "ثبت نام کنید" : "وارد شوید"}
                  </button>
                </div>
              </div>
            </div>
            {/* Banner Section */}
            <div className="hidden md:flex relative bg-Primary items-center justify-center p-8 overflow-hidden">
              <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-20 -right-20" />
              <div className="absolute w-56 h-56 rounded-full bg-white/10 -bottom-20 -left-20" />
              <Image
                src={"/images/login/library.webp"}
                alt="login page"
                className="rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
