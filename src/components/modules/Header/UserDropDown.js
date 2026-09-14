import {
  ArrowLeft2,
  Link,
  Logout,
  Note,
  ShoppingCart,
  UserSquare,
} from "iconsax-react";
import React from "react";

export default function UserDropDown({
  isShowUserDropDown,
  setIsShowUserDropDown,
  handleLogout,
}) {
  const menuItems = [
    {
      title: "داشبورد",
      icon: UserSquare,
    },
    {
      title: "کتابخانه من",
      icon: Note,
    },
    {
      title: "خرید های من",
      icon: ShoppingCart,
    },
    {
      title: "ارتباط با پشتیبانی",
      icon: Link,
    },
  ];

  return (
    <div
      className={`absolute left-0 top-15 z-110 w-60 rounded-lg bg-white p-2 user-drop-down transition-all ${isShowUserDropDown
          ? "visible opacity-100"
          : "invisible opacity-0"
        }`}
      onMouseLeave={() => setIsShowUserDropDown(false)}
    >
      <div className="flex flex-col gap-1">
        {menuItems.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-2 text-sm font-medium transition-all hover:bg-Gray-20"
          >
            <span className="flex items-center gap-1">
              <Icon
                variant="Outline"
                color="#000"
                size={24}
              />
              <span>{title}</span>
            </span>
            <ArrowLeft2
              variant="Outline"
              size={24}
              color="#8A8A8A"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full cursor-pointer items-center gap-1 rounded-lg p-2 text-sm font-medium text-Error-600 transition-all hover:bg-Error-100"
        >
          <Logout
            variant="Outline"
            color="#ec0b1a"
            size={24}
          />
          <span>خروج از حساب کاربری</span>
        </button>
      </div>
    </div>
  );
}
