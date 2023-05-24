import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="p-6 flex justify-between border-b border-black">
        <a className="flex items-start" href="#">
          <Image
            className="max-w-none"
            src="/img/logo.svg"
            width={23}
            height={23}
            alt="Logo"
          />
          <Image
            className="ml-1 max-w-none"
            src="/img/logo-text.svg"
            width={94}
            height={48}
            alt="Logo text"
          />
        </a>
        <div>
          <a
            className="hover:underline text-sm font-semibold leading-[18px]"
            href="#"
          >
            About us
          </a>
          <button className="ml-4 p-3 rounded bg-black text-white text-sm font-bold leading-[18px]">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
}
