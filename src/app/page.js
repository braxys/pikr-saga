import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Additional from "@/components/sections/Additional";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Services from "@/components/sections/Services";
import News from "@/components/sections/News";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 lg:gap-30">
      <Navbar />

      <main className="flex flex-col w-full gap-15 max-w-[1440px] mx-auto lg:gap-30">
        <section
          id="beranda"
          className="scroll-mt-[200px] px-[20px] lg:px-[70px]"
        >
          <Hero />
        </section>

        <section
          id="layanan"
          className="scroll-mt-[120px] px-[20px] lg:px-[70px]"
        >
          <Services />
        </section>

        <section
          id="profil"
          className="scroll-mt-[170px] px-[40px] lg:px-[90px]"
        >
          <Profile />
        </section>

        <section
          id="berita"
          className="scroll-mt-[95px] px-[45px] lg:px-[95px]"
        >
          <News />
        </section>

        <Additional className="px-[20px] lg:px-[70px]" />
      </main>
      <Footer />
    </div>
  );
}
