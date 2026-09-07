import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa" dir="rtl"
    >
      <body className="bg-white ss02 font-IRANSansXV" cz-shortcut-listen="true">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
