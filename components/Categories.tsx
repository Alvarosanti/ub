"use client";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CategorieProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  url: string;
}

const Categorie = ({
  backgroundImage,
  title,
  subtitle,
  url,
}: CategorieProps) => {
  const router = useRouter();

  return (
    <Link
      href={url}
      id="categories"
      className={`h-full w-full min-w-[400px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl relative`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 lg:rounded-r-5xl 2xl:rounded-5xl"></div>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 relative z-10 text-white">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-blue-950 p-4">
            <Image src="/pencil.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-32 text-white">{title}</h4>
            <p className="regular-18 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <motion.section
      id="categories"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <h2 className="bold-40 lg:bold-64 py-6">Categorias</h2>
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[540px]">
          <Categorie
            backgroundImage="bg-bg-img-1"
            title="Inicial"
            subtitle="De 3 a 5 años"
            url="/products?categories=inicial"
          />
          <Categorie
            backgroundImage="bg-bg-img-2"
            title="Primaria"
            subtitle="De 1ero a 6to"
            url="/products?categories=primaria"
          />
          <Categorie
            backgroundImage="bg-bg-img-3"
            title="Secundaria"
            subtitle="De 1ero a 5to"
            url="/products?categories=secundaria"
          />
        </div>
      </section>
    </motion.section>
  );
};

export default Categories;
