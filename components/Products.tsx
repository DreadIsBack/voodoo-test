import classNames from "classnames";
import ProductCard from "./ProductCard";
import "./Products.scss";

interface Props {
  className?: string;
}

export default function Products(props: Props) {
  const rootClass = classNames(
    props.className,
    "grid gap-x-6 products justify-center"
  );

  return (
    <div className={rootClass}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
