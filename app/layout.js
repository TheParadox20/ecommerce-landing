import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:'400', style:'normal' });

export const metadata = {
  title: "ngwindsongk",
  description: "Welcome to the ngwindsongk brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
