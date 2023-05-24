import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-12 bg-white">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-[19px]">
          <a className="block text-sm font-bold hover:underline" href="#">
            FAQ
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            RETURNS
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            CONTACT
          </a>
        </div>

        <div className="flex flex-col gap-[19px]">
          <a className="block text-sm font-bold hover:underline" href="#">
            TERMS & CONDITIONS
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            PRIVACY POLICY
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            COOKIE POLICY
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            COOKIE SETTINGS
          </a>
        </div>

        <div className="flex flex-col gap-[19px]">
          <a className="block text-sm font-bold hover:underline" href="#">
            ABOUT VOODOO
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            CAREER
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            FACEBOOK
          </a>
          <a className="block text-sm font-bold hover:underline" href="#">
            INSTAGRAM
          </a>
        </div>
      </div>

      <Image
        className="mx-auto mt-14"
        src="/img/logo.svg"
        width={80}
        height={80}
        alt="Logo"
      />
    </footer>
  );
}
