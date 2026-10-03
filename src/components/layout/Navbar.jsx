"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Navigasi utama"
      className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-5 py-2.5 sm:px-8 lg:px-12">
        <Link
          href="/#beranda"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo/logo-pikr.png"
            alt=""
            width={46}
            height={46}
            priority
          />
          <span className="font-semibold tracking-tight text-primary">
            PIK-R SAGA
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-paragraph">
            <li>
              <Link
                href="/#beranda"
                className="relative rounded-sm py-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/#layanan"
                className="relative rounded-sm py-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href="/#profil"
                className="relative rounded-sm py-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Profil
              </Link>
            </li>
            <li>
              <Link
                href="/#berita"
                className="relative rounded-sm py-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Berita
              </Link>
            </li>
          </ul>
          <Button className="flex items-center justify-center gap-[10px]">
            <Image src="/icons/login.svg" alt="" width={18} height={18} />
            Login
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center rounded-full border border-primary/10 text-primary transition hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" size={21} />
          ) : (
            <Menu aria-hidden="true" size={21} />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-primary/10 bg-white px-5 pb-4 pt-2 lg:hidden"
      >
        <ul className="mx-auto flex max-w-[1920px] flex-col gap-1 sm:px-3">
          {[
            ["Beranda", "/#beranda"],
            ["Layanan", "/#layanan"],
            ["Profil", "/#profil"],
            ["Berita", "/#berita"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-paragraph transition hover:bg-primary/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
