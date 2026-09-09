import Footer from "@/components/modules/layout/Footer";
import Header from "@/components/modules/layout/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa" dir="rtl"
    >
      <body className="bg-[#F5F6F8] ss02 font-IRANSansXV" cz-shortcut-listen="true">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
