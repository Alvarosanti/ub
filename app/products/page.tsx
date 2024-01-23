import React from "react";
import FilterSection from "../../components/FilterSection";
import ProductSection from "@/components/ProductSection";
import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";
import Arrowback from "@/components/Arrowback";

const products = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Arrowback link="/#categories" />
        <div className="py-8 border-b border-slate-200 space-y-4">
          <h1 className="text-5xl font-semibold">Productos</h1>
          <p className="text-slate-700 max-w-3xl">
            ¡Bienvenido a nuestra exclusiva colección de productos! Sumérgete en
            un mundo donde la calidad y el estilo se encuentran en perfecta
            armonía.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-8 gap-10">
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-1 2xl:col-span-1">
            <FilterSection />
          </div>
          <div className="md:col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-4">
            <ProductSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
