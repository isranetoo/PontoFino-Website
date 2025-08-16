import React from 'react';
import { Button } from './ui/button';
import MarketTicker from './MarketTicker';
import { ArrowRightIcon, BarChart3Icon, ShieldCheckIcon, TrendingUpIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    window.location.href = 'https://app.pontofino.com';
  };
  const handleKnowMore = () => {
    navigate('/ferramentas');
  };

  return (
    <section className="py-24 md:py-36 text-center">
      <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
        {/* Logo & Brand */}
        <div className="mb-10 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-blue-900 rounded-full blur-2xl opacity-40"></div>
            <div className="relative bg-[#101c2c] p-3 rounded-full shadow-xl">
              <img
                src="/assets/PontoFino_Logo.png"
                alt="PontoFino Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              />
            </div>
          </div>
          <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-blue-400 bg-blue-900/60 px-4 py-1 rounded-full border border-blue-700 shadow-sm">
            Plataforma Profissional de Finanças
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          O futuro do <span className="text-cyan-400">controle financeiro</span> está aqui
        </h1>
        {/* Market ticker */}
        <div className="w-full max-w-3xl mx-auto mb-6">
          <MarketTicker />
        </div>
        <p className="text-base sm:text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto font-light">
          Tenha visão, segurança e performance dignas do mercado financeiro. <span className="text-white font-medium">Gerencie, planeje e invista</span> com tecnologia de ponta e experiência profissional.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center min-w-[200px]"
            style={{ minWidth: 200 }}
          >
            Acesse Agora
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={handleKnowMore}
            className="bg-transparent border-2 border-blue-700 text-blue-200 hover:bg-blue-800/30 hover:text-white px-10 py-4 rounded-lg font-bold text-lg shadow hover:scale-105 transition-all duration-300 inline-flex items-center justify-center min-w-[200px]"
            style={{ minWidth: 200 }}
          >
            Saiba Mais
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features - estilo "mercado financeiro" */}
        <div id="features" className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center bg-blue-900/60 rounded-xl p-6 border border-blue-800 shadow">
            <BarChart3Icon className="w-10 h-10 text-cyan-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Dashboard Profissional</h3>
            <p className="text-blue-200 text-sm">Visualize indicadores, gráficos e relatórios em tempo real.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-900/60 rounded-xl p-6 border border-blue-800 shadow">
            <TrendingUpIcon className="w-10 h-10 text-green-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Gestão de Investimentos</h3>
            <p className="text-blue-200 text-sm">Simule, acompanhe e compare ativos como um investidor profissional.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-900/60 rounded-xl p-6 border border-blue-800 shadow">
            <ShieldCheckIcon className="w-10 h-10 text-yellow-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Segurança de Mercado</h3>
            <p className="text-blue-200 text-sm">Seus dados protegidos com tecnologia de padrão bancário.</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Proteção Bancária</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">Experiência Profissional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
