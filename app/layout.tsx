import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
