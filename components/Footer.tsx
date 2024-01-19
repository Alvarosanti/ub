"use client";
import { SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="border bg-gray-20" />
        <div className="flex flex-col gap-5">
          <FooterColumn>
            <ul className="regular-14 flex gap-4 text-gray-30">
              <p className="regular-14 w-full text-center text-gray-30">
                2024 Uniformes Bertha | All rights reserved
              </p>
              {SOCIALS.links.map((e) => (
                <Link href={e.link} key={e.src}>
                  <Image src={e.src} alt="logo" width={24} height={24} />
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-50 text-white px-4 py-3 rounded-5xl focus:outline-none focus:shadow-outline-blue active:bg-blue-40000 z-50"
      >
        <Image src="/top.svg" alt="top" width={40} height={40} />
      </button>
    </footer>
  );
};

type FooterColumnProps = {
  children: React.ReactNode;
};

const FooterColumn = ({ children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap"></h4>
      {children}
    </div>
  );
};

export default Footer;
