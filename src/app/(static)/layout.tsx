import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default async function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="lg:m-10 m-5">{children}</main>
      <Footer />
    </div>
  );
}
