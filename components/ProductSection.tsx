"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { convertStringToQueriesObject } from "./FilterSection";
import { products } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function isAvailable(arr1?: string[], arr2?: string[]) {
  if (!arr1 || !arr2) {
    return true;
  }
  return arr1.some((item) => arr2?.includes(item));
}

export function ProductSection() {
  const searchParams = useSearchParams();
  const paramsObj = convertStringToQueriesObject(searchParams);

  let filteredProducts = products.filter((product) => {
    const hasCategories = isAvailable(
      product.categories,
      paramsObj?.categories
    );
    const hasSize = isAvailable(product.sizes, paramsObj?.sizes);
    return hasSize && hasCategories;
  });

  filteredProducts = filteredProducts.sort((p1, p2) => {
    switch (paramsObj?.sort?.[0]) {
      case "newest":
        return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
      case "price high - low":
        return p2.price - p1.price;
      case "price low - high":
        return p1.price - p2.price;
      default:
        return 0;
    }
  });
  if (Object.keys(paramsObj).length === 0) {
    filteredProducts = products;
  }
  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-slate-700">
        No hay productos disponibles :(
      </p>
    );
  }

  return (
    <motion.section
      id="comments"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredProducts.map((product) => (
          <Link href={`/products/detail/${product.id}`} key={product.id}>
            <div key={product.id}>
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="rounded-md shadow-sm aspect-[4/5] object-cover object-top"
              />
              <div className="space-y-1">
                <div>
                  <p className="mt-4 font-medium truncate">{product.title}</p>
                </div>
                <p className="line-clamp-2 text-slate-500 text-sm">
                  {product.desc}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">S/.{product.price.toFixed(2)}</p>
              
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
export default ProductSection;
