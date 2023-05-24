"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
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
    <div>
      <div
        className="p-[26px] rounded flex justify-between bg-black text-[#FCF7E6] cursor-pointer"
        onClick={toggle}
      >
        <div className="flex items-center">
          <Image
            className="max-w-none"
            src="/img/icon-warning.svg"
            width={24}
            height={24}
            alt="Warning icon"
          />
          <span className="ml-2 font-bold">{props.iconText}</span>
        </div>
        <span className="text-sm font-medium">{props.header}</span>
        <Image
          className="max-w-none"
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
    </div>
  );
}
