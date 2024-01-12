import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CategorieProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleVisited: string;
}

const Categorie = ({
  backgroundImage,
  title,
  subtitle,
  peopleVisited,
}: CategorieProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image src={url} key={url} alt="person" width={52} height={52} />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleVisited}</p>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Categorie
          backgroundImage="bg-bg-img-1"
          title="Inicial"
          subtitle="De 3 a 5 anios"
          peopleVisited="+20 visited"
        />
        <Categorie
          backgroundImage="bg-bg-img-2"
          title="Primaria"
          subtitle="De 1ero a 6to"
          peopleVisited="+32 visited"
        />
        <Categorie
          backgroundImage="bg-bg-img-1"
          title="Secundaria"
          subtitle="De 1ero a 5to"
          peopleVisited="+50 visited"
        />
      </div>
    </section>
  );
};

export default Categories;