import Footer from "@/components/modules/layout/Footer";
import Header from "@/components/modules/layout/Header";
import { Home } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="py-10 flex flex-col gap-8 items-center justify-center">
        <Image src={"/images/404.webp"} width={400} height={400} alt="404 page" />
        <div className="text-center">
          <h1 className="text-4xl font-bold">متاسفانه صفحه مورد نظر شما پیدا نشد!</h1>
          <Link href={"/"} className="inline-flex items-center justify-center gap-2 mt-5 px-4 py-2.5 bg-white border border-Gray-20 rounded-xl">
            بازگشت به خانه
            <Home variant="Outline" color="currentColor" size={24} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}