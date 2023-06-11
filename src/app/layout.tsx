import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "500", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Ricardo Nunes - Portifolio",
  description: "Portifolio development Ricardo Nunes ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="PT-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
