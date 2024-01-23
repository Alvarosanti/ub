"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
// #1D1F60 color principal
//update

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ub2.png" alt="logo" width={80} height={32} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <a href="/#contact">
          <Button
            type="button"
            title="Me gusta la pagina!"
            icon="like.svg"
            variant="btn_dark_green"
            full
          />
        </a>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? "close2.svg" : "menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#1D1F60]`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {NAV_LINKS.map((nav) => (
              <li
                key={nav.key}
                className={
                  "text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                }
                onClick={() => {
                  setToggle(!toggle);
                  // setActive(nav.label);
                }}
              >
                <a href={`/#${nav.key}`}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
