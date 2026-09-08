import React from "react";
import TopFooter from "../Footer/TopFooter";
import BottomFooter from "../Footer/BottomFooter";

export default function Footer() {
  return (
    <footer className="bg-Primary-950">
      <div className="container flex flex-col gap-6 py-8">
        <TopFooter />
        <BottomFooter />
      </div>
    </footer>
  );
}
