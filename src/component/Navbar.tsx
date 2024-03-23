"use client";
import Image from "next/image";
import Link from "next/link";
import logo_alba from "@/public/assets/logo/logo_alba.png";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed overflow-y-hidden flex w-full duration-[400ms] bg-[#fff] shadow-md origin-top md:bg-transparent z-50 justify-between p-2 md:items-center scroll-smooth ${
          isOpen ? "h-[310px]" : "h-[70px] "
        }`}
      >
        <div className=" h-fit mt-1 ml-1">
          <Image src={logo_alba} alt="logo_alba" height={45}></Image>
        </div>
        <div
          onClick={toggleMenu}
          className={`w-8 h-8 mt-2 mr-1 flex cursor-pointer items-center md:hidden md:pointer-events-none ${
            isOpen ? "" : ""
          }`}
        >
          <div className="w-full bg-slate-800 h-1 rounded-md "></div>
        </div>
        <div className="absolute top-[72px] w-full left-0 z-0 h-[230px] flex justify-center md:relative md:top-0 md:h-fit md:w-fit md:mr-2">
          <ul className="h-full w-fit flex  md:flex-row md:gap-x-6 flex-col justify-evenly">
            <li className="text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black">
              <Link href="/tentang-kami">Tentang Kami</Link>
            </li>
            <li className="text-black">
              <Link href="/berita">Berita</Link>
            </li>
            <li className="text-black">
              <Link href="/wakaf">Wakaf</Link>
            </li>
            <li className="text-black">
              <Link href="/kontak">Kontak Kami</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
