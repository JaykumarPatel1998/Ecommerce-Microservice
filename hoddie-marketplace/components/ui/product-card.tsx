"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  detailsLink: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): React.ReactElement {
  const { name, description, price, imageSrc, imageAlt, detailsLink } = product;

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative max-w-[90%] h-auto group/card rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={imageAlt}
            width={500}
            height={300}
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="80"
          className="text-2xl font-bold text-emerald-500 mt-4"
        >
          ${price.toFixed(2)}
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-sm font-bold bg-black text-white hover:bg-gray-800 transition-colors"
            onClick={() => console.log(`Added ${name} to cart`)}
          >
            Add to Cart
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={detailsLink}
            className="px-4 py-2 rounded-xl text-sm font-normal text-blue-500 hover:underline"
          >
            View Details →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}