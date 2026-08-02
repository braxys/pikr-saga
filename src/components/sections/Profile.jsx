import Image from "next/image";

export default function Profile() {
  return (
    <div className="mx-[40px]">
      <div className="flex justify-between items-center bg-primary rounded-[30px] gap-[30px] px-[30px] py-[50px] w-full">
        <div className="flex flex-col flex-1 gap-[5px] w-[475px]">
          <h1 className="text-[32px] font-bold text-accent">Visi & Misi</h1>
          <p className="w-full text-background">
            Mewujudkan lingkungan sekolah yang aman, inklusif, dan suportif bagi
            seluruh siswa SMANSAGA.
          </p>
          <ul className="flex flex-col gap-[20px] w-full">
            <li className="flex gap-[7px] items-center text-background w-full">
              <img src="/icons/check.svg" alt="check" /> Memberikan layanan
              informasi yang akurat tentang kesehatan.
            </li>
            <li className="flex gap-[7px] items-center text-background w-full">
              <img src="/icons/check.svg" alt="check" /> Menyediakan ruang aman
              untuk konseling sebaya.
            </li>
            <li className="flex gap-[7px] items-center text-background w-full">
              <img src="/icons/check.svg" alt="check" /> Mengembangkan karakter
              positif melalui program edukatif.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src="/images/profile/vismis.png"
            alt="Visi dan Misi"
            className="w-full h-auto rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
