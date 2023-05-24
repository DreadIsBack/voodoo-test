export default function Header() {
  return (
    <header className="border-b border-black">
      <div className="mx-auto p-6 max-w-[1320px] flex justify-between sm:py-12 min-[1450px]:max-w-[1410px] min-[1450px]:pr-[69px]">
        <a className="flex items-start" href="#">
          <img
            className="w-[23px] sm:w-[45px]"
            src="/img/logo.svg"
            alt="Logo"
          />
          <img
            className="ml-1 w-[94px] sm:w-[193px]"
            src="/img/logo-text.svg"
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
