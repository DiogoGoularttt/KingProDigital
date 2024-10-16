import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-primary p-4">
      <div className="flex justify-center mb-4">
        <a href="https://www.facebook.com/kingprodigital" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-blue-400">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com/kingprodigital" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/company/kingprodigital" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-blue-600">
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="text-sm text-center text-white">
        © 2024 Diogo Goulart. Todos os direitos reservados.
      </p>
    </div>
  );
}
