import Header from "@/components/header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import Footer from "@/components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full overflow-hidden">
      <body className="w-full h-full relative">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
