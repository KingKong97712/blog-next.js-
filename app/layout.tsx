import "./globals.css";
import { Raleway, Montserrat } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
