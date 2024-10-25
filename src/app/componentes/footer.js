import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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
        >
          <FaFacebookF size={24} />
        </Link>
        <Link 
          href="https://www.instagram.com/kingprodigital" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-2 text-white hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </Link>
      </div>
    </div>
  );
}
