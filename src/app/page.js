import Banner from "@/components/templates/Home/Banner";
import Categories from "@/components/templates/Home/Categories";
import EnduringVoices from "@/components/templates/Home/EnduringVoices";
import MostFamousBooks from "@/components/templates/Home/MostFamousBooks";
import MostPopular from "@/components/templates/Home/MostPopular";
import NewBooks from "@/components/templates/Home/NewBooks";
import NewListenBooks from "@/components/templates/Home/NewListenBooks";
import OfferListenBooks from "@/components/templates/Home/OfferListenBooks";
import OfferTextBooks from "@/components/templates/Home/OfferTextBooks";
import SwiperBanner from "@/components/templates/Home/SwiperBanner";
export default function Home() {
  return (
    <>
      <SwiperBanner />
      <Categories />
      <NewBooks />
      <OfferTextBooks />
      <Banner src={"/images/banner/banner 2.webp"}/>
      <NewListenBooks />
      <OfferListenBooks />
      <Banner src={"/images/banner/banner 1.webp"}/>
      <MostPopular />
      <MostFamousBooks />
      <Banner src={"/images/banner/banner 3.webp"}/>
      <EnduringVoices />
    </>
  );
}
