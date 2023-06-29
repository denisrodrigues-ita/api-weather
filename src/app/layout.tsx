import Header from "@/components/Header";
import { CentralProvider } from "@/CentralContext";
import "./globals.css";

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
    <CentralProvider>
      <html lang="pt-br">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </CentralProvider>
  );
}
