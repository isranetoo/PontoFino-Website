
import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { WalletIcon, TargetIcon, TrendingUpIcon, ArrowRightIcon, BarChart3Icon, ShieldCheckIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const tools = [
  {
    title: 'Gestão de Orçamento',
    route: '/ferramentas',
    icon: WalletIcon,
    desc: 'Controle total de receitas e despesas, com visão profissional e categorização inteligente.',
    color: 'from-blue-900 to-blue-700',
    features: ['Controle de gastos', 'Categorização automática', 'Relatórios dinâmicos'],
    iconBg: 'bg-gradient-to-br from-blue-900 to-blue-700',
  },
  {
    title: 'Metas Financeiras',
    route: '/ferramentas',
    icon: TargetIcon,
    desc: 'Defina, acompanhe e conquiste objetivos financeiros com disciplina de investidor.',
    color: 'from-green-900 to-green-700',
    features: ['Definir objetivos', 'Acompanhar progresso', 'Alertas inteligentes'],
    iconBg: 'bg-gradient-to-br from-green-900 to-green-700',
  },
  {
    title: 'Simulador de Investimentos',
    route: '/ferramentas',
    icon: TrendingUpIcon,
    desc: 'Simule cenários, compare ativos e projete rendimentos como um analista de mercado.',
    color: 'from-yellow-700 to-yellow-500',
    features: ['Simulações avançadas', 'Comparação de ativos', 'Projeções futuras'],
    iconBg: 'bg-gradient-to-br from-yellow-700 to-yellow-500',
  },
];


export default function ToolsSection() {
  const navigate = useNavigate();

  const handleToolAccess = (route) => {
    navigate(route);
  };

  return (
    <section className="py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#00e0ff] to-[#0057b8] mb-5">
          Ferramentas Profissionais para sua Jornada Financeira
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-medium">
          Explore soluções inspiradas no mercado financeiro para transformar sua relação com o dinheiro. Tecnologia, segurança e performance para você crescer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className={`group p-10 bg-gradient-to-br ${tool.color} border border-white/10 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl min-h-[420px] flex flex-col justify-between`}
          >
            <div className="flex flex-col items-center text-center h-full">
              {/* Icon */}
              <div className={`w-20 h-20 ${tool.iconBg} rounded-full flex items-center justify-center mb-7 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className="h-11 w-11 text-white" />
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6 flex-1 text-base font-medium">
                {tool.desc}
              </p>

              {/* Features List */}
              <div className="w-full mb-7">
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-blue-200">
                      <BarChart3Icon className="h-4 w-4 text-yellow-400 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                onClick={() => handleToolAccess(tool.route)}
                className={`w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 text-white py-3 rounded-lg font-bold text-lg inline-flex items-center justify-center group-hover:scale-105 transition-transform`}
              >
                Acessar Ferramenta
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Access Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <Card className="p-10 bg-gradient-to-br from-blue-900 to-blue-700 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Acesso Rápido
            </h3>
            <p className="text-blue-100">
              Comece agora mesmo com nossas ferramentas mais utilizadas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Button
              onClick={() => handleToolAccess('/orcamento/nova-transacao')}
              className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white py-3 rounded-lg font-bold text-base"
            >
              + Nova Transação
            </Button>
            <Button
              onClick={() => handleToolAccess('/orcamento/metas')}
              className="bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white py-3 rounded-lg font-bold text-base"
            >
              + Nova Meta
            </Button>
            <Button
              onClick={() => handleToolAccess('/simulador-investimentos')}
              className="bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 text-blue-900 py-3 rounded-lg font-bold text-base"
            >
              Simular Investimento
            </Button>
          </div>
        </Card>
      </div>

      {/* Statistics */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <BarChart3Icon className="h-8 w-8 text-yellow-400" />
          </div>
          <div className="text-3xl font-extrabold text-blue-300 mb-1">3</div>
          <p className="text-blue-100 text-base font-medium">Ferramentas Principais</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-900 to-green-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <ShieldCheckIcon className="h-8 w-8 text-green-300" />
          </div>
          <div className="text-3xl font-extrabold text-green-400 mb-1">100%</div>
          <p className="text-blue-100 text-base font-medium">Gratuitas</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <TrendingUpIcon className="h-8 w-8 text-blue-900" />
          </div>
          <div className="text-3xl font-extrabold text-yellow-400 mb-1">24/7</div>
          <p className="text-blue-100 text-base font-medium">Disponíveis</p>
        </div>
      </div>
    </section>
  );
}
