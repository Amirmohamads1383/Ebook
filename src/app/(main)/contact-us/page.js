"use client";

import Breadcrumb from "@/components/modules/Breadcrump/Breadcrump";
import {
    ArrowLeft2,
    Call,
    Sms,
    Location,
} from "iconsax-react";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = formData.name.trim();
        const phone = formData.phone.trim();
        const message = formData.message.trim();

        if (!name || !phone || !message) {
            toast.warning("لطفا تمام فیلد ها را کامل کنید")
            return;
        }

        if (name.length < 2) {
            toast.warning("نام باید بیشتر از 2 کاراکتر باشد")
            return;
        }

        const phoneRegex = /^09\d{9}$/;

        if (!phoneRegex.test(phone)) {
            toast.warning("شماره موبایل نامعتبر است")
            return;
        }

        if (message.length < 5) {
            toast.warning("پیام باید حداقل ۵ کاراکتر باشد.")
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "خطایی رخ داده است."
                );
            }

            await Swal.fire({
                icon: "success",
                title: "پیام ارسال شد",
                text: "پیام شما با موفقیت ثبت شد.",
                confirmButtonText: "باشه",
                confirmButtonColor: "#7B4B86",
            });

            setFormData({
                name: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error(error);

            Swal.fire({
                icon: "error",
                title: "ارسال پیام ناموفق بود",
                text:
                    error.message ||
                    "متأسفانه مشکلی در ارسال پیام به وجود آمد.",
                confirmButtonText: "باشه",
                confirmButtonColor: "#7B4B86",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Breadcrumb />
            {/* Title */}
            <div className="pt-4 pb-6 md:pb-10 lg:pb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center text-Gray-950">
                    ارتباط با ما
                </h2>
            </div>
            {/* Main */}
            <div className="container pb-10 lg:pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-5 items-start">
                    {/* Contact Info */}
                    <div className="bg-white rounded-lg p-5 md:p-6">
                        <p className="text-sm md:text-base leading-7 text-Gray-400">
                            اگر سوالی دارید شاید بتوانید پاسخ آن را در پرسش
                            های متداول بیابید.
                        </p>
                        {/* FAQ */}
                        <div className="mt-4 flex items-center gap-2">
                            <span className="text-sm md:text-base text-Primary-600">
                                پرسش های متداول
                            </span>
                            <ArrowLeft2
                                size="18"
                                color="#8b6099"
                                variant="Outline"
                            />
                        </div>
                        <div className="h-px bg-Gray-200 my-5" />
                        {/* Phone */}
                        <div className="flex items-start gap-2">
                            <Call
                                size="24"
                                color="#555555"
                                variant="Outline"
                            />
                            <div>
                                <p className="text-sm md:text-base text-Gray-700 mb-3">
                                    تلفن ما:
                                </p>
                                <p
                                    dir="ltr"
                                    className="text-sm md:text-base text-Gray-950 text-right leading-6"
                                >
                                    2929 000 021
                                    <br />
                                    0999 000 000
                                </p>
                            </div>
                        </div>
                        <div className="h-px bg-Gray-200 my-5" />
                        {/* Email */}
                        <div className="flex items-start gap-2">
                            <Sms
                                size="24"
                                color="#555555"
                                variant="Outline"
                            />
                            <div className="w-full">
                                <p className="text-sm md:text-base text-Gray-700 mb-3">
                                    ایمیل ما:
                                </p>
                                <p
                                    dir="ltr"
                                    className="text-sm md:text-base text-Gray-950 text-right"
                                >
                                    Info@konjbooks.com
                                </p>
                            </div>
                        </div>
                        <div className="h-px bg-Gray-200 my-5" />
                        {/* Address */}
                        <div className="flex items-start gap-2">
                            <Location
                                size="24"
                                color="currentColor"
                                variant="Linear"
                                className="text-Gray-500 shrink-0"
                            />
                            <p className="text-sm md:text-base text-Gray-950 leading-7">
                                دفتر ما: تهران، اختیاریه، کوچه شفق، پلاک 14
                            </p>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="bg-white rounded-lg p-5 md:p-6">
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-sm md:text-base font-bold text-Gray-950 mb-5">
                                سوالات، نظرات و انتقادات خودتون رو با ما در
                                میون بذارید
                            </h3>
                            {/* Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                {/* Name */}
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="علی لایق"
                                    maxLength={50}
                                    className="w-full h-10 md:h-11 px-4 rounded-lg border border-Gray-200 outline-none text-sm text-Gray-950 placeholder:text-Gray-500 focus:border-Purple-500 transition"
                                />
                                {/* Phone */}
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="0930 000 000"
                                    dir="ltr"
                                    maxLength={11}
                                    className="w-full h-10 md:h-11 px-4 rounded-lg border border-Gray-200 outline-none text-sm text-Gray-950 placeholder:text-Gray-500 focus:border-Purple-500 transition text-right"
                                />
                            </div>
                            {/* Message */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="سلام، من توی پرداخت مشکل دارم لطفا راهنماییم کنید :)"
                                    maxLength={500}
                                    className="w-full h-36 md:h-40 resize-none rounded-lg border border-Gray-200 outline-none p-3 text-sm leading-7 text-Gray-950 placeholder:text-Gray-500 focus:border-Purple-500 transition"
                                />
                                <span className="absolute bottom-2 right-3 text-[10px] text-Gray-300">
                                    {formData.message.length}/500
                                </span>
                            </div>
                            {/* Button */}
                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full sm:w-44 md:w-48 h-10 md:h-11 rounded-lg bg-Primary-700 hover:bg-Primary-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm md:text-base transition cursor-pointer"
                                >
                                    {isLoading
                                        ? "در حال ارسال..."
                                        : "ارسال پیام"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}