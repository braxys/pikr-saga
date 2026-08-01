import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Additional from "@/components/sections/Additional";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Services from "@/components/sections/Services"
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-30">
      <Navbar />

      <section id="beranda" className="scroll-mt-[200px]">
        <Hero />
      </section>

      <section id="layanan" className="scroll-mt-[120px]">
        <Services />
      </section>

      <section id="profil" className="scroll-mt-[170px]">
        <Profile />
      </section>

      <Additional />
      <Footer />
    </div>
  );
}
