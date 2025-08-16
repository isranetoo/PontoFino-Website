
import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { TrendingUpIcon, BarChart3Icon, ShieldCheckIcon, BanknoteIcon, ArrowRightIcon, LineChartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function PlatformInfo() {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3Icon,
      title: 'Dashboard Analítico',
      description: 'Visualize sua saúde financeira com gráficos dinâmicos, indicadores e insights de mercado.'
    },
    {
      icon: TrendingUpIcon,
      title: 'Performance de Investimentos',
      description: 'Acompanhe rentabilidade, riscos e oportunidades com ferramentas de análise profissional.'
    },
    {
      icon: BanknoteIcon,
      title: 'Gestão de Patrimônio',
      description: 'Controle ativos, passivos e fluxo de caixa com precisão e visão estratégica.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Segurança Institucional',
      description: 'Proteção de dados com padrões bancários e autenticação avançada.'
    }
  ];

  const handleStartNow = () => {
    window.location.href = 'https://app.pontofino.com';
  };

  const handleLearnMore = () => {
    navigate('/sobre');
  };

  return (
    <section className="py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 mb-6 tracking-tight">
          Plataforma de Gestão Financeira Profissional
        </h2>
        <p className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">
          Controle, analise e potencialize seus resultados com tecnologia de ponta e visual de mercado financeiro. Tenha acesso a recursos avançados, segurança institucional e uma experiência digna dos grandes players do setor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleStartNow}
            className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg inline-flex items-center transition-all duration-200"
          >
            Acessar Plataforma
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </Button>
          <Button
            onClick={handleLearnMore}
            className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg"
          >
            Conheça Mais
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-10 bg-gradient-to-br from-[#1a2a47]/80 to-[#232b3e]/80 border border-blue-900/40 rounded-2xl hover:scale-[1.025] hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-7">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <feature.icon className="h-9 w-9 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-base leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-5xl font-extrabold text-blue-400 mb-2 tracking-tight">10.000+</div>
          <p className="text-blue-100 text-lg font-medium">Investidores Ativos</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-extrabold text-green-400 mb-2 tracking-tight">R$ 50M+</div>
          <p className="text-blue-100 text-lg font-medium">Patrimônio Gerenciado</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-extrabold text-yellow-400 mb-2 tracking-tight">98%</div>
          <p className="text-blue-100 text-lg font-medium">Índice de Satisfação</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <Card className="p-10 bg-gradient-to-r from-blue-700/30 to-blue-700/30 border border-white/10 rounded-2xl max-w-2xl mx-auto shadow-xl">
          <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
            Eleve sua experiência financeira ao próximo nível
          </h3>
          <p className="text-blue-100 mb-8 text-lg font-light">
            Faça parte do ecossistema PontoFino e tenha acesso a recursos exclusivos, análises avançadas e segurança de mercado.
          </p>
          <Button
            onClick={handleStartNow}
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-black px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center shadow-md"
          >
            Comece Gratuitamente
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </Button>
        </Card>
      </div>
    </section>
  );
}
