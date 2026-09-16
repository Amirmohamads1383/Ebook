import React from "react";
import CommentAside from "./CommentAside";
import ProductInfo from "./ProductInfo";

export default function ProductHero() {
  return (
    <section className="container pt-8">
      <div className="flex flex-col lg:flex-row items-start gap-5">
        <ProductInfo />
        <CommentAside />
      </div>
    </section>
  );
}
