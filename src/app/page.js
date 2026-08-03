import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Additional from "@/components/sections/Additional";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Services from "@/components/sections/Services";
import News from "@/components/sections/News";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 lg:gap-30">
      <Navbar />

      <main className="flex flex-col w-full gap-15 max-w-[1440px] mx-auto lg:gap-30">
        <section id="beranda" className="scroll-mt-[200px] mx-[20px]">
          <Hero />
        </section>

        <section id="layanan" className="scroll-mt-[120px] mx-[20px]">
          <Services />
        </section>

        <section id="profil" className="scroll-mt-[170px] mx-[40px]">
          <Profile />
        </section>

        <section id="berita" className="scroll-mt-[95px] mx-[45px]">
          <News />
        </section>

        <Additional className="mx-[20px]" />
      </main>
      <Footer />
    </div>
  );
}
