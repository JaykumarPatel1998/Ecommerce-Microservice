"use client";
import Image from "next/image";
import HeroImage from "@/public/hoodies/hero-image.png";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProductCard } from "@/components/ui/product-card";

export default function Home() {
  return (
    <div className="w-full">
      <BackgroundGradient containerClassName="p-2 mt-4 w-[95%] md:w-[70%] mx-auto">
        <div className="p-4 relative bg-background overflow-hidden">
          <BackgroundBeams/>
          <Spotlight
            className="-top-20 left-1/4 md:-top-20 md:left-1/2"
            fill="white"
          />

          <div className="grid md:grid-cols-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 relative z-10 w-full"
              >
                <Image src={HeroImage} alt="Hero Image" className="object-cover w-" />
              </motion.div>
              
              <TextGenerateEffect words={"starting from $69.99"} className="text-md text-center text-shadow-xl" />
            </div>


            <div className="p-4 md:row-start-1 text-center">
              <h1 className="text-5xl font-bold tracking-wide text-fuchsia-400">
                Lazy Bear
              </h1>
              <TextGenerateEffect words={"is the new fashionable hoodie store."} className="text-xl" />
              <button className="p-[3px] mt-10 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Get busy shopping
                </div>
              </button>
            </div>
          </div>
        </div>
      </BackgroundGradient>

      <div className="grid">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

      

    </div>
  );
}
