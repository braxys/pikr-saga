"use client";
import Image from "next/image";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    image: "/images/services/service1.png",
    title: "Pelaporan",
    description:
      "Layanan pelaporan untuk kasus bullying dan kekerasan seksual yang mengutamakan keamanan, kerahasiaan, serta tindak lanjut yang tepat.",
  },
  {
    image: "/images/services/service2.png",
    title: "Konseling",
    description:
      "Layanan konseling untuk membantu siswa menghadapi berbagai permasalahan secara nyaman dan terpercaya.",
  },
  {
    image: "/images/services/service3.png",
    title: "Edukasi PIK-R",
    description:
      "Pelajari berbagai informasi dan edukasi untuk membangun lingkungan sekolah yang sehat dan positif.",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col gap-[35px]">
      <div className="text-center">
        <h1 className="text-[32px] text-primary font-bold">
          Layanan PIK-R SAGA
        </h1>
        <p className="w-full">
          Berbagai layanan untuk membantu siswa mencipatakan lingkungan sekolah
          yang aman.
        </p>
      </div>
      <div className="flex flex-col gap-[40px] lg:justify-between lg:flex-row">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
