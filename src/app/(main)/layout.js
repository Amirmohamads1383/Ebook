import Header from "@/components/modules/layout/Header";
import Footer from "@/components/modules/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}