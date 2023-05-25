"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  className?: string;
  iconText: string;
  header: string;
  contentText: string;
}

export default function Panel(props: Props) {
  const [isShowed, setIsShowed] = useState(false);

  function toggle() {
    setIsShowed(!isShowed);
  }

  return (
    <section className={props.className}>
      <div
        className="p-[26px] rounded flex justify-between bg-black text-[#FCF7E6] cursor-pointer"
        onClick={toggle}
      >
        <div className="flex items-center overflow-hidden">
          <Image
            className="max-w-none"
            src="/img/icon-warning.svg"
            width={24}
            height={24}
            alt="Warning icon"
          />
          <span className="ml-2 font-bold">{props.iconText}</span>
          <span className="ml-12 whitespace-nowrap text-clip text-sm font-medium">
            {props.header}
          </span>
        </div>
        <Image
          className="ml-[26px] max-w-none"
          src="/img/icon-arrow-down.svg"
          width={24}
          height={24}
          alt="Arrow down icon"
        />
      </div>
      {isShowed && (
        <div className="px-[26px] py-4 border border-black rounded">
          {props.contentText}
        </div>
      )}
    </section>
  );
}
