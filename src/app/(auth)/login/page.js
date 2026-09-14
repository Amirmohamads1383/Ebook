"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Validation */

    if (!isLogin) {
      if (!formData.name.trim()) {
        toast.error("لطفاً نام و نام خانوادگی را وارد کنید");
        return;
      }

      if (!formData.email.trim()) {
        toast.error("لطفاً ایمیل خود را وارد کنید");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        toast.error("لطفاً ایمیل صحیح وارد کنید");
        return;
      }
    }

    if (!formData.mobile.trim()) {
      toast.error("لطفاً شماره موبایل خود را وارد کنید");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("لطفاً رمز عبور خود را وارد کنید");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("رمز عبور باید حداقل ۶ کاراکتر باشد");
      return;
    }

    try {
      setLoading(true);

      /* Login */
      if (isLogin) {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: formData.mobile.trim(),
            password: formData.password,
          }),
        });

        const data = await response.json();

        // Login Error
        if (!response.ok) {
          await Swal.fire({
            icon: "error",
            title: "ورود ناموفق",
            text: data.message || "شماره موبایل یا رمز عبور اشتباه است",
            confirmButtonText: "متوجه شدم",
            confirmButtonColor: "#4357BE",
          });

          return;
        }

        // Login Success
        const result = await Swal.fire({
          icon: "success",
          title: "ورود موفق",
          text: data.message || "با موفقیت وارد حساب کاربری شدید",
          confirmButtonText: "رفتن به داشبورد",
          confirmButtonColor: "#4357BE",
          allowOutsideClick: false,
        });

        // Go To Dashboard
        if (result.isConfirmed) {
          push("/");
        }

        return;
      }

      /* Register */
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          mobile: formData.mobile.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      // Register Error
      if (!response.ok) {
        await Swal.fire({
          icon: "error",
          title: "ثبت نام ناموفق",
          text: data.message || "ثبت نام انجام نشد",
          confirmButtonText: "متوجه شدم",
          confirmButtonColor: "#4357BE",
        });

        return;
      }

      // Register Success
      const result = await Swal.fire({
        icon: "success",
        title: "ثبت نام موفق",
        text: data.message || "حساب کاربری شما با موفقیت ایجاد شد",
        confirmButtonText: "رفتن به داشبورد",
        confirmButtonColor: "#4357BE",
        allowOutsideClick: false,
      });

      // Reset Form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });

      // Go To Dashboard
      if (result.isConfirmed) {
        push("/dashboard");
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "خطا",
        text: "ارتباط با سرور برقرار نشد",
        confirmButtonText: "متوجه شدم",
        confirmButtonColor: "#4357BE",
      });
    } finally {
      setLoading(false);
    }
  };

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
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-Gray-200 mb-2">
                        نام و نام خانوادگی
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="نام و نام خانوادگی"
                        className="w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                      />
                    </div>
                  )}

                  {/* Email */}
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-Gray-200 mb-2">
                        ایمیل
                      </label>

                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                      />
                    </div>
                  )}

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-medium text-Gray-200 mb-2">
                      شماره موبایل
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      maxLength={11}
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="مثلاً ۰۹۱۲۱۲۳۴۵۶۷"
                      className="rtl w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-Gray-200 mb-2">
                      رمز عبور
                    </label>

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="رمز عبور خود را وارد کنید"
                      className="rtl w-full h-12 px-4 rounded-xl border border-Gray-20 outline-none text-Gray-900 placeholder:text-Gray-100 focus:border-Primary transition"
                    />
                  </div>

                  {/* Login Options */}
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
                        <div className="h-5 w-5 flex rounded-md border border-Gray-50 peer-checked:bg-Primary-700 transition">
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
                            />
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
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-Primary-700 cursor-pointer text-white font-bold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "در حال ارسال..." : isLogin ? "ورود" : "ثبت نام"}
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
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setFormData({
                        name: "",
                        email: "",
                        mobile: "",
                        password: "",
                      });
                    }}
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
                src="/images/login/library.webp"
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
