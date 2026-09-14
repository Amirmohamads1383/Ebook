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
}) {
  return (
    <div
      className={`absolute left-0 top-15 w-60 p-2 bg-white user-drop-down rounded-lg transition-all z-110 ${isShowUserDropDown ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onMouseLeave={() => setIsShowUserDropDown(false)}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between p-2 text-sm font-medium bg-white hover:bg-Gray-20 rounded-lg transition-all cursor-pointer">
          <span className="flex items-center gap-1">
            <UserSquare variant="Outline" color="#000" size={24} />
            <span>داشبورد</span>
          </span>
          <ArrowLeft2 variant="Outline" size={24} color="#8A8A8A" />
        </div>
        <div className="flex items-center justify-between p-2 text-sm font-medium bg-white hover:bg-Gray-20 rounded-lg transition-all cursor-pointer">
          <span className="flex items-center gap-1">
            <Note variant="Outline" color="#000" size={24} />
            <span>کتابخانه من</span>
          </span>
          <ArrowLeft2 variant="Outline" size={24} color="#8A8A8A" />
        </div>
        <div className="flex items-center justify-between p-2 text-sm font-medium bg-white hover:bg-Gray-20 rounded-lg transition-all cursor-pointer">
          <span className="flex items-center gap-1">
            <ShoppingCart variant="Outline" color="#000" size={24} />
            <span>خرید های من</span>
          </span>
          <ArrowLeft2 variant="Outline" size={24} color="#8A8A8A" />
        </div>
        <div className="flex items-center justify-between p-2 text-sm font-medium bg-white hover:bg-Gray-20 rounded-lg transition-all cursor-pointer">
          <span className="flex items-center gap-1">
            <Link variant="Outline" color="#000" size={24} />
            <span>ارتباط با پشتیبانی</span>
          </span>
          <ArrowLeft2 variant="Outline" size={24} color="#8A8A8A" />
        </div>
        <div className="p-2 text-sm font-medium text-Error-600 hover:bg-Error-100 rounded-lg transition-all cursor-pointer">
          <span className="flex items-center gap-1">
            <Logout variant="Outline" color="#ec0b1a" size={24} />
            <span>خروج از حساب کاربری</span>
          </span>
        </div>
      </div>
    </div>
  );
}
