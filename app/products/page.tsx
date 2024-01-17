import React from "react";
import FilterSection from "../../components/FilterSection";
import ProductSection from "@/components/ProductSection";

const products = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="py-8 border-b border-slate-200 space-y-4">
        <h1 className="text-5xl font-semibold">Productos</h1>
        <p className="text-slate-700 max-w-3xl">
          Lorem ipsunLorem ipsunLorem ipsunLorem ipsunLorem ipsunLorem
          ipsunLorem ipsun
        </p>
      </div>
      <div className="grid grid-cols-8 py-8 gap-10">
        <FilterSection />
        <div className="col-span-6">
          <ProductSection />
        </div>
      </div>
    </div>
  );
};

export default products;
