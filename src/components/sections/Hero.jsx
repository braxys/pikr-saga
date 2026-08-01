"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex items-center justify-between mx-[100px] gap-[70px]">
      <div className="flex flex-col w-[667px] gap-[30px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col font-bold text-6xl w-full"
        >
          <motion.span
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-secondary"
          >
            Dari SMANSAGA
          </motion.span>

          <motion.span
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent"
          >
            Untuk Remaja
          </motion.span>
        </motion.h1>
        <p className="w-full">
          <span className="font-bold">
            Pusat Informasi dan Konseling Remaja (PIK-R)
          </span>{" "}
          merupakan wadah yang dikelola oleh remaja untuk remaja sebagai sarana
          memperoleh informasi, edukasi, dan layanan konseling mengenai
          kesehatan reproduksi, perencanaan kehidupan berkeluarga, pengembangan
          karakter, serta berbagai permasalahan remaja. PIK-R berperan dalam
          membentuk generasi yang sehat, cerdas, berkarakter, dan mampu
          mengambil keputusan yang bertanggung jawab.
        </p>
        <div className="flex gap-[30px]">
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSevWaT8aZb1FYPBJflG0qDI_TmzrZRGTl7O4ffF7nrjVkPTbg/viewform?usp=dialog"
          >
            Lapor
          </Button>
          <Button
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/62895322020608"
          >
            Konseling
          </Button>
        </div>
      </div>
      <div>
        <img
          src="/images/hero/hero-image.png"
          alt="Hero Image"
          className="w-full h-auto rounded-[30px] object-cover"
        />
      </div>
    </div>
  );
}
