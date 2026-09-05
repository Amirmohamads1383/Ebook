import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa" dir="rtl"
    >
      <body className="">{children}</body>
    </html>
  );
}
