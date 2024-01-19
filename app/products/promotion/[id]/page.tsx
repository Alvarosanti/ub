"use client";
import Image from "next/image";
import { promotions } from "../../../../constants/products";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  nombre: string;
}

interface ButtonProps {
  onClick: () => void;
}

const page: React.FC = () => {
  const [id, setId] = useState<string | null>(null);
  const [talla, setTalla] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [disabled, setDisable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!talla || cantidad <= "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [talla, cantidad]);

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

  const setPath = () => {
    router.push("/");
  };

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
          <form className="px-6 md:py-3 lg:w-1/2">
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
                      id="talla"
                      name="talla"
                      value={talla}
                      className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray- dark:border-gray-200 placeholder-gray-100 dark:text-black dark:focus:ring-blue-300 dark:focus:border-blue-300"
                      onChange={(e) => {
                        setTalla(e.target.value);
                      }}
                      required
                    >
                      <option value="">Seleccionar...</option>
                      {product.sizes.map((talla) => (
                        <option key={talla} value={talla}>
                          {talla}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : null}
              <div className="md:w-1/4 px-3 mb-6">
                <label
                  className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                  htmlFor="quantity"
                >
                  Cantidad
                </label>
                <div className="relative">
                  <select
                    id="cantidad"
                    name="cantidad"
                    value={cantidad}
                    className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray- dark:border-gray-200 placeholder-gray-100 dark:text-black dark:focus:ring-blue-300 dark:focus:border-blue-300"
                    onChange={(e) => {
                      setCantidad(e.target.value);
                    }}
                    required
                  >
                    <option value="">Seleccionar...</option>
                    {Array.from({ length: 5 }, (_, i) => {
                      const value = Number(i + 1);

                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div>
              {disabled ? (
                <button
                  type="submit"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block"
                >
                  Comprar
                </button>
              ) : (
                <a
                  onClick={setPath}
                  href={`https://wa.me/987654321?text=Hola que tal, quiero comprar el producto: ${product.title} cuesta S/.${product.price} c/u, quiero ${cantidad} unidades, en talla ${talla}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block"
                >
                  Comprar
                </a>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
