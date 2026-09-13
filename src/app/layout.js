import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className="bg-[#F5F6F8] ss02 font-IRANSansXV">
                {children}
                <Toaster position="top-right" style={{ fontFamily: "IRANSansXV", color: "#161616" }} />
            </body>
        </html>
    );
}