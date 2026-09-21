"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book1, Trash, ArrowLeft2, SearchNormal1 } from "iconsax-react";
import { toast } from "sonner";
import ProductCard from "@/components/modules/ProductCard/ProductCard";

export default function MyLibraryPage() {
  const [library, setLibrary] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedLibrary = JSON.parse(localStorage.getItem("my_library") || "[]");

    setLibrary(savedLibrary);
  }, []);

  const removeFromLibrary = (productId) => {
    const updatedLibrary = library.filter((item) => item._id !== productId);

    localStorage.setItem("my_library", JSON.stringify(updatedLibrary));

    setLibrary(updatedLibrary);

    toast.success("محصول از کتابخانه حذف شد");
  };

  const filteredProducts = library.filter((product) => {
    const searchValue = search.toLowerCase();

    return (
      product.name?.toLowerCase().includes(searchValue) ||
      product.author?.toLowerCase().includes(searchValue)
    );
  });

  const removeAllFromLibrary = () => {
    setLibrary([]);
    localStorage.setItem("my_library", []);
    toast.success("همه کتاب‌ها از کتابخانه حذف شدند");
  };

  return (
    <main className="min-h-screen bg-Backg py-8 md:py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-Primary-100 text-Primary-700">
                <Book1 size={22} variant="Outline" color="#744d7e" />
              </div>
              <span className="text-sm font-medium text-Caption">
                کتابخانه شخصی من
              </span>
            </div>
            <h1 className="text-2xl font-bold text-Title md:text-3xl">
              کتابخانه من
            </h1>
            <p className="mt-2 text-sm text-Caption">
              کتاب‌هایی که برای مطالعه بعدی ذخیره کرده‌اید
            </p>
          </div>
          <div className="flex h-12 w-fit items-center gap-2 rounded-xl bg-white px-4 shadow-sm">
            <Book1 size={20} color="#744d7e" variant="Outline" />
            <span className="text-sm text-Caption">{library.length}</span>
            <span className="text-sm font-medium text-Title">کتاب</span>
          </div>
        </div>
        {/* Search */}
        {library.length > 0 && (
          <div className="flex items-center justify-between">
            <div className="mb-8 flex h-12 w-full items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 shadow-sm md:max-w-md">
              <SearchNormal1 size={20} color="#ADADAD" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجو در کتابخانه..."
                className="h-full flex-1 bg-transparent text-sm text-Title outline-none placeholder:text-Caption"
              />
            </div>
            <button
              onClick={removeAllFromLibrary}
              className="flex items-center gap-1.5 px-2.5 py-3 bg-Error-100/25 text-Error-600 rounded-lg cursor-pointer"
            >
              <Trash size={20} color="#ec0b1a" variant="Outline" />
              حذف همه کتاب ها
            </button>
          </div>
        )}
        {/* Empty */}
        {library.length === 0 && (
          <div className="flex min-h-105 flex-col items-center justify-center rounded-2xl bg-white px-5 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-Primary-200">
              <Book1 size={38} color="#744d7e" variant="Outline" />
            </div>
            <h2 className="text-xl font-bold text-Title">
              کتابخانه شما خالی است
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-Caption">
              هنوز کتابی به کتابخانه خود اضافه نکرده‌اید. کتاب‌های مورد علاقه
              خود را ذخیره کنید تا همیشه به آن‌ها دسترسی داشته باشید.
            </p>
            <Link
              href="/shop"
              className="mt-7 flex h-11 items-center gap-2 rounded-xl bg-Primary px-6 text-sm font-bold text-white transition-all hover:opacity-90"
            >
              مشاهده فروشگاه
              <ArrowLeft2 size={18} />
            </Link>
          </div>
        )}
        {/* No Search Result */}
        {library.length > 0 && filteredProducts.length === 0 && (
          <div className="rounded-2xl bg-white px-5 py-20 text-center shadow-sm">
            <SearchNormal1 size={42} color="#ADADAD" className="mx-auto mb-4" />

            <h2 className="text-lg font-bold text-Title">کتابی پیدا نشد</h2>

            <p className="mt-2 text-sm text-Caption">
              عنوان یا نام نویسنده دیگری را جستجو کنید.
            </p>
          </div>
        )}
        {/* Products */}
        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
