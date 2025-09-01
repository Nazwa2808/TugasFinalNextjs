import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portofolio Nazwa",
  description: "Website pribadi sederhana dengan Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-start p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
