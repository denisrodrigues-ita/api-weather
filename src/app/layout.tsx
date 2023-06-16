import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tempo Hoje",
  description: "Tempo Hoje é um site de previsão do tempo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
