export default function ProductCard() {
  return (
    <div className="mt-[50px]">
      <div className="p-3 h-[300px] border border-black rounded">
        <div className="p-2 w-fit rounded bg-black text-xs font-normal text-[#FCF7E6]">
          USED
        </div>
      </div>

      <div className="mt-3 flex justify-between">
        <div className="text-sm font-bold">
          <p>Product name</p>
          <p>000 KR.</p>
        </div>
        <div className="text-right text-sm">
          <p className="font-medium">Condition</p>
          <p>Slightly used</p>
        </div>
      </div>

      <button className="p-4 w-full rounded bg-black text-center text-sm font-bold text-white">
        PICK-UP IN <span className="underline">2200</span>
      </button>
    </div>
  );
}
