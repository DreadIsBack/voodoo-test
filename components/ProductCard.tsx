import { Product } from "@/models/Product";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  return (
    <div className="mt-[50px] flex flex-col justify-between">
      <div>
        <div className="h-[300px] relative overflow-hidden border border-black rounded">
          <div className="p-2 absolute left-3 top-3 rounded bg-black text-xs font-normal text-[#FCF7E6]">
            USED
          </div>
          <img src={props.product.imageSrc} />
        </div>

        <div className="mt-3 flex justify-between">
          <div className="text-sm font-bold">
            <p>{props.product.title}</p>
            <p>{props.product.price} KR.</p>
          </div>
          <div className="text-right text-sm">
            <p className="font-medium">Condition</p>
            <p>Slightly used</p>
          </div>
        </div>
      </div>

      <button className="p-4 w-full rounded bg-black text-center text-sm font-bold text-white">
        PICK-UP IN <span className="underline">2200</span>
      </button>
    </div>
  );
}
