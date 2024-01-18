"use client";
import Image from "next/image";
import { promotions } from "../../../../constants/products";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  nombre: string;
}

const page: React.FC = () => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Obtener el id de la URL usando JavaScript en el cliente
    const pathArray = window.location.pathname.split("/");
    const idFromPath = pathArray[pathArray.length - 1];

    setId(idFromPath);
  }, []);

  if (!id) {
    return <div>Error: falta param de la url</div>;
  }

  const product = promotions.find((u) => u.id.toString() === id);

  if (!product) {
    // Manejo de error si el usuario no se encuentra
    return (
      <div>
        <h1>Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="mx-auto max-w-[1000px] padding-container relative w-auto flex justify-end">
        <div className="lg:flex -mx-2">
          <div className="mb-8 px-6 md:mb-0 lg:w-1/2">
            <div className="w-full overflow-hidden relative bg-gainsboro rounded-lg">
              <Image
                src={product.image}
                height={100}
                width={320}
                alt={product.desc}
                title={product.title}
              />
            </div>
          </div>
          <div className="px-6 md:py-3 lg:w-1/2">
            <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary leading-tight">
              {product.title}
            </h1>
            <div className="mb-6">
              <p className="font-semibold text-2xl text-slategray">
                S/.{product.price}
              </p>
            </div>
            <div className="mb-6">
              <p className="leading-loose text-lightgray">{product.desc}</p>
            </div>
            <div className="md:flex md:flex-wrap -mx-3">
              {promotions.length > 1 ? (
                <div className="md:w-3/4 px-3 mb-6">
                  <label
                    className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                    htmlFor="style"
                  >
                    Talla
                  </label>
                  <div className="relative">
                    <select
                      id="style"
                      name="style"
                      value={""}
                      className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                      // onChange=()
                    >
                      {product.sizes.map((talla) => (
                        <option key={talla} value={talla}>
                          {talla}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                      {/* <ChevronDownSmallIcon
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  /> */}
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="md:w-1/4 px-3 mb-6">
                <label
                  className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <div className="relative">
                  <select
                    id="quantity"
                    name="quantity"
                    value={""}
                    className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                    // onChange={updateQuantity}
                  >
                    {Array.from({ length: 5 }, (_, i) => {
                      const value = Number(i + 1);

                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                  {/* <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <ChevronDownSmallIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </div> */}
                </div>
              </div>
            </div>
            <button>Add to cart</button>

            {/* <ProductReviews product={product} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
