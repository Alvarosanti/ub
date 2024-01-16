"use client";
import React, { useRef, useState } from "react";
import { styles } from "../app/styles";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import env from "@/env";
import Button from "./Button";
import Image from "next/image";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const notifySuccess = () => {
    toast.success("Gracias por contactarnos, nos comunicaremos pronto!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = () => {
    toast.error("Ahh, hubo un error, intenta nuevamente!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // <successfulModal />;
    emailjs
      .send(
        // import.meta.env.VITE_VERCEL_SERVICE_ID,
        env.VERCEL_SERVICE_ID,

        // import.meta.env.VITE_VERCEL_TEMPLATE_ID,
        env.VERCEL_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "DALSEB ENERGY",
          from_email: form.email,
          to_email: "alvaroportfoliomail.com",
          message: form.message,
        },
        // import.meta.env.VITE_VERCEL_PUBLIC_KEY
        env.VERCEL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          notifySuccess();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          notifyError();
        }
      );
  };

  return (
    // <motion.section
    //   id="contact"
    //   initial={{
    //     opacity: 0,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //   }}
    //   transition={{
    //     duration: 1,
    //   }}
    //   viewport={{
    //     once: true,
    //   }}
    // >
    //   <section className="flex w-full min-h-screen justify-center items-center">
    //     <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-slate-900 w-full max-w-6xl p-8 sm:p-8 rounded-2xl shadow-lg text-white">
    //       <div className="flex flex-col space-y-2 justify-between">
    //         <div>
    //           <h3 className={styles.sectionHeadText}>Contacto.</h3>
    //           {/* <p className={styles.sectionSubText}>
    //               Ponte en contacto con nosotros
    //             </p> */}
    //           <p className="pt-2 text-cyan-100">
    //             Dejanos un comentario o ponte en contacto con nosotros via email
    //             o whatsapp :)
    //           </p>
    //         </div>
    //         <div className="flex flex-col space-y-12">
    //           <div className="space-x-2">
    //             <span>+51 987654321</span>
    //           </div>
    //           <div className="space-x-2">
    //             <span>Av. lorem Ipsun 123</span>
    //           </div>
    //           <div className="inline-flex space-x-2">
    //             <span>+51 987654321</span>
    //           </div>
    //         </div>
    //         {/* <div className="flex space-x-4 text-lg">
    //           <a href="#">Facebook</a>
    //           <a href="#">Twitter</a>
    //           <a href="#">Instagram</a>
    //         </div> */}
    //       </div>
    //       <div>
    //         <div className="rounded-xl shadow-inner p-16 md:w-90">
    //           <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    //             <label className="flex flex-col">
    //               <span className="text-white font-medium mb-4">Nombre</span>
    //               <input
    //                 type="text"
    //                 name="name"
    //                 value={form.name}
    //                 onChange={handleChange}
    //                 placeholder="Cual es tu nombre?"
    //                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
    //                 required
    //               />
    //             </label>
    //             <label className="flex flex-col">
    //               <span className="text-white font-medium mb-4">Correo</span>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 value={form.email}
    //                 onChange={handleChange}
    //                 placeholder="Cual es tu correo?"
    //                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
    //                 required
    //               />
    //             </label>
    //             <label className="flex flex-col">
    //               <span className="text-white font-medium mb-4">Mensaje</span>
    //               <textarea
    //                 rows={7}
    //                 name="message"
    //                 value={form.message}
    //                 onChange={handleChange}
    //                 placeholder="Dejanos un comentario"
    //                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
    //                 required
    //               />
    //             </label>
    //             <button
    //               type="submit"
    //               className="bg-green-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
    //             >
    //               {loading ? "Enviando..." : "Enviar"}
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* <ToastContainer /> */}
    // </motion.section>
    <motion.section
      id="contact"
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
      <section className="flexCenter w-full flex-col pb-[100px] py-24">
        <div className="get-app">
          <div className="z-20 flex w-full flex-1 flex-col items-start justify-center">
            <div className="flex w-full flex-col gap-3 whitespace-nowrap">
              <div>
                <div className="rounded-xl shadow-inner p-16 md:w-90">
                  <h2 className="bold-40 lg:bold-24 xl:max-w-[320px]">
                    Contacto.
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-2"
                  >
                    <label className="flex flex-col">
                      <span className="text-white font-medium mb-4">
                        Nombre
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Cual es tu nombre?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                        required
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-white font-medium mb-4">
                        Correo
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Cual es tu correo?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                        required
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-white font-medium mb-4">
                        Mensaje
                      </span>
                      <textarea
                        rows={7}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Dejanos tu comentario"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                        required
                      />
                    </label>
                    <button
                      type="submit"
                      className="bg-green-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                      {loading ? "Enviando..." : "Enviar"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Image src="/phones.png" alt="phones" width={550} height={870} />
          </div>
        </div>
      </section>
      // {/* <ToastContainer /> */}
    </motion.section>
  );
};

export default Contact;
