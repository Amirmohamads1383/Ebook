"use client";

import React, { useState } from "react";
import {
  Star1,
  ArrowDown2,
  ProfileCircle,
} from "iconsax-react";

export default function CommentAside() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const comments = [
    {
      user: "امیر علی رضایی",
      text: "لطفاً متوجه به سیر تغییرات درونی میشید",
    },
    {
      user: "امیرمحمد ستاری",
      text: "کتاب خواندن هم نیست کتاب خوب خواندن مهم است !",
    },
  ];

  return (
    <aside className="w-full lg:w-1/3 p-6 bg-white rounded-lg">
      <h3 className="py-2.5 text-sm md:text-base font-bold text-Gray-950">
        نقدها و امتیازات
      </h3>
      <div className="mt-3">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`py-3 ${index !== comments.length - 1
              ? "border-b border-Gray-30"
              : ""
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-Gray-300">
                <ProfileCircle size="18" variant="Outline" color="#8A8A8A" />
                <span>{comment.user}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Star1
                  size="20"
                  variant="Outline"
                  color="#9d9d9d"
                />
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star1
                    key={star}
                    size="20"
                    variant="Bold"
                    color="#E1BD09"
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs leading-6 text-Gray-950">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="flex items-center gap-2 py-3 text-xs text-Primary-700 cursor-pointer"
      >
        <span>نمایش همه‌ی نظرات</span>
        <ArrowDown2 size="16" variant="Outline" color="#744d7e" />
      </button>
      <h3 className="mt-3 pt-3 text-sm md:text-base font-bold text-Gray-950">
        نظر شما درباره‌ی کتاب
      </h3>
      <div className="pt-2">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="کتاب خوبی است"
          className="h-32 w-full resize-none rounded-lg border-2 border-Gray-30 p-3 text-base font-semibold text-Gray-900 outline-none transition placeholder:text-Gray-300 focus:border-Primary-500"
        />
        <div className="mt-3 flex flex-row-reverse items-center justify-between">
          <div className="flex items-center gap-0.5 *:cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
              >
                <Star1
                  size="20"
                  color={star <= rating
                    ? "#E1BD09"
                    : "#9d9d9d"}
                  variant={star <= rating ? "Bold" : "Outline"}
                  className={
                    star <= rating
                      ? "text-yellow-500"
                      : "text-Gray-100"
                  }
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-400">
            امتیاز شما به این کتاب
          </span>
        </div>
        <button
          type="button"
          className="mt-4 mb-3 h-12 w-full rounded-lg bg-Primary-700 text-white transition hover:bg-Primary-800 cursor-pointer"
        >
          ثبت نظر
        </button>
      </div>
    </aside>
  );
}