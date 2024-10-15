import Image from "next/image";
import Logo from "../img/logo2.png"

export default function Header() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Image
        src={Logo}
        alt="Logo"
        className="rounded-full"
        width={500} 
        height={500} 
        priority
      />
    </div>
  );
}
