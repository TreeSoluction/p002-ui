import Image from "next/image";
import HeaderInput from "./header-input";
import HeaderMenu from "./header-menu";

export default function Header() {
  return (
    <header className="gap-2 bg-blue-gradient from-blue-bg-1 via-blue-bg-2 to-blue-bg-3 flex h-20 w-full items-center justify-between bg-gradient-to-t px-4 py-4">
      <HeaderMenu />

      <HeaderInput />

      <Image src="/logo.png" alt={"Logo"} width={40} height={40} />
    </header>
  );
}
