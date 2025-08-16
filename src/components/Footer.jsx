
import React from 'react';
import { Card } from './ui/card';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' }
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Ferramentas', to: '/ferramentas' },
    { label: 'Planos', to: '/subscriptions' },
    { label: 'Projetos Futuros', to: '/projetos-futuros' }
  ];

  return (
    <footer className="py-20 bg-gradient-to-b from-[#0a1623] to-[#101c2c] mt-auto border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <img 
                src="/assets/PontoFino_Logo.png" 
                alt="PontoFino Logo" 
                className="h-14 w-14 drop-shadow-lg" 
              />
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#00e0ff] to-[#0057b8] tracking-tight">
                PontoFino
              </h3>
            </div>
            <p className="text-blue-100 mb-5 max-w-xs mx-auto md:mx-0 text-base font-medium">
              Plataforma de gestão financeira, metas e investimentos com tecnologia de mercado.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-blue-700/30 to-blue-400/30 rounded-full text-blue-200 text-xs font-bold tracking-wider shadow-md uppercase">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Mercado Financeiro</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block text-blue-100 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-700 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <MailIcon className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="mailto:contato@pontofino.com" 
                  className="text-blue-100 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                >
                  contato@pontofino.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-green-700 to-green-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <PhoneIcon className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="tel:+551140028922" 
                  className="text-blue-100 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                >
                  (11) 4002-8922
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-700 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <MapPinIcon className="h-4 w-4 text-white" />
                </div>
                <div className="text-blue-100 text-sm font-medium">
                  <p>Av. Paulista, 1000</p>
                  <p>São Paulo - SP</p>
                  <p>CEP: 01310-100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              Conecte-se
            </h4>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mb-7">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-blue-100 ${social.color} hover:scale-110 transition-all duration-300 shadow-md`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-blue-100 text-sm font-medium">
                Receba novidades e insights do mercado
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-lg text-sm font-bold transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Card className="p-7 bg-gradient-to-r from-blue-900/40 to-blue-700/40 border border-white/10 rounded-xl shadow-xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-blue-100 text-sm font-medium">
                &copy; {currentYear} <span className="font-bold text-yellow-400">PontoFino</span>. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4 text-xs text-blue-200">
                <span>CNPJ: 12.345.678/0001-90</span>
                <span className="hidden md:inline">•</span>
                <span className="px-2 py-1 bg-gradient-to-r from-green-700/30 to-green-400/30 text-green-200 rounded-full font-bold tracking-wider uppercase">
                  #InvistaNoFuturo
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-blue-200">
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">
                Política de Privacidade
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">
                Termos de Uso
              </a>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}

export default Footer;
