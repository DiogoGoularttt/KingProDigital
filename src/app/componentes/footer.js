import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-primary p-4">
      <p className="text-sm text-center mb-2 text-white">
        Nos acompanhe em nossas redes sociais
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="https://www.facebook.com/kingprodigital"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="Siga a King Pro Digital no Facebook"
        >
          <FaFacebookF size={24} />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="https://www.instagram.com/kingprodigital"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-white hover:text-pink-500 transition-colors duration-300"
          aria-label="Siga a King Pro Digital no Instagram"
        >
          <FaInstagram size={24} />
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </div>
  );
}
