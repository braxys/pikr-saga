import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Additional from "@/components/sections/Additional";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Services from "@/components/sections/Services";
import News from "@/components/sections/News";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-30">
      <Navbar />

      <main className="flex flex-col gap-30 w-full max-w-[1440px] mx-auto">
        <section id="beranda" className="scroll-mt-[200px]">
          <Hero />
        </section>

        <section id="layanan" className="scroll-mt-[120px]">
          <Services />
        </section>

        <section id="profil" className="scroll-mt-[170px]">
          <Profile />
        </section>

        <section id="berita" className="scroll-mt-[95px]">
          <News />
        </section>

        <Additional />
      </main>
      <Footer />
    </div>
  );
}
