"use client";

import classNames from "classnames";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Product } from "@/models/Product";
import "./Products.scss";

interface Props {
  className?: string;
}

export default function Products(props: Props) {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (!products) {
      fetch("https://voodoo-sandbox.myshopify.com/products.json?limit=12")
        .then((response) => response.json())
        .then((response) =>
          setProducts(
            response.products.map((x: any) => ({
              id: x.id,
              title: x.title,
              imageSrc: x.images[0]?.src ?? "",
              price: x.variants[0].price,
            }))
          )
        );
    }
  });

  const rootClass = classNames(
    props.className,
    "grid gap-x-6 products justify-center"
  );

  return (
    <div className={rootClass}>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
