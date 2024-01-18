"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { promotions } from "@/constants/products";

const Promotions = () => {
  return (
    <motion.section
      id="promotions"
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
      {/* <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="flex flex-1 lg:min-h-[900px]">
            <Image
              src="/phone.png"
              alt="phone"
              width={400}
              height={1000}
              className="feature-phone"
            />
          </div>
          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className="relative">
              <Image
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute left-[5px] top-[-28px] w-10 lg:w-[50px]"
              />
              <h2 className="bold-40 lg:bold-64">Promociones</h2>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  variant={feature.variant}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section> */}
      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <h2 className="bold-40 lg:bold-64 pb-16">Promociones</h2>
        <div className="mx-auto max-w-[1000px] padding-container relative w-auto flex justify-end">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {promotions.map((product) => (
              <Link href={`/products/promotion/${product.id}`}>
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
                      <p className="mt-4 font-medium truncate">
                        {product.title}
                      </p>
                    </div>
                    <p className="line-clamp-2 text-slate-500 text-sm">
                      {product.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">S/.{product.price}</p>
                      {/* <p className="flex gap-2 items-center mt-2">
                <StarIcon className="w-5 -mt-.5 text-yellow-500" />
                <span>4.2</span>
              </p> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};
const FeatureItem = ({ title, icon, variant, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Promotions;
