import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/shirtW.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Uniformes Bertha</h1>
        <p className="regular-16 mt-6">
          ¡Prepara el éxito con estilo!
          <br />
          Tu jornada académica nunca ha sido tan elegante.
          <br />
          Viste con excelencia, destaca con calidad.
          <br />
          Bienvenido a un nuevo año escolar!
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <a href="#comments">
            <p className="bold-16 lg:bold-20 text-blue-70">
              +50
              <span className="regular-16 lg:regular-20 ml-1 underline">
                Comentarios excelentes
              </span>
            </p>
          </a>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <a href="#categories">
            <Button
              type="button"
              title="Ir a comprar"
              variant="btn_dark_green"
              full
            />
          </a>
          <a href="#promotions">
            <Button
              type="button"
              title="Ver promociones"
              icon="/promotion.svg"
              variant="btn_white_text"
              full
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
