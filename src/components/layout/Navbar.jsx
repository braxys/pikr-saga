import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between px-[50px] py-[10px] items-center shadow-md">
        <a href="#" className="flex items-center">
          <img src="/images/logo/logo-pikr.png" alt="Logo PIK-R" width={50} />
          <h4 className="text-black text-lg">PIK-R SAGA</h4>
        </a>
        <div className="flex items-center gap-[30px]" width={661}>
          <ul className="text-black flex gap-[30px]">
            <li>
              <a
                href="#beranda"
                className="relative after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-accent
             after:transition-all after:duration-300
             hover:after:w-full"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#layanan"
                className="relative after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-accent
             after:transition-all after:duration-300
             hover:after:w-full"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#profil"
                className="relative after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-accent
             after:transition-all after:duration-300
             hover:after:w-full"
              >
                Profil
              </a>
            </li>
            <li>
              <a
                href="#berita"
                className="relative after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-accent
             after:transition-all after:duration-300
             hover:after:w-full"
              >
                Berita
              </a>
            </li>
          </ul>
          <Button className="flex items-center justify-center gap-[10px]">
            <img src="/icons/login.svg" alt="" />
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
