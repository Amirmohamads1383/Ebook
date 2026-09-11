import Categories from "@/components/templates/Home/Categories";
import NewBooks from "@/components/templates/Home/NewBooks";
import SwiperBanner from "@/components/templates/Home/SwiperBanner";
export default function Home() {
  return (
    <>
      <SwiperBanner />
      <Categories />
      <NewBooks />
    </>
  );
}
