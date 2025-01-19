import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const RootLayout = ({ children, modal }: Readonly<Props>) => {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <Navbar />
            <main className="p-10">{children}</main>
            <Footer />
          </ClerkProvider>
        </ThemeProvider>
        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
