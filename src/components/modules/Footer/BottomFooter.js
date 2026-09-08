import { Instagram, Send2, Whatsapp } from "iconsax-react";
import React from "react";

export default function BottomFooter() {
  return (
    <div className="flex items-center justify-between pt-6 pb-2 border-t border-t-Gray-20">
      <div className="flex flex-col items-start gap-2 text-sm text-white">
        <span>تلفن پشتیبانی :</span>
        <span>۰۲۱-۴۵۶۱۲۰۹۵ پشتیبانی ۲۴ ساعته</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Instagram
          variant="Outline"
          color="#fff"
          size={24}
          className="cursor-pointer"
        />
        <Send2
          variant="Outline"
          color="#fff"
          size={24}
          className="cursor-pointer"
        />
        <Whatsapp
          variant="Outline"
          color="#fff"
          size={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
