
import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, TrendingUpIcon, BarChart3Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function SubscriptionSection() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Básico',
      price: 'Gratuito',
      period: '',
      description: 'Para quem está começando a organizar as finanças.',
      features: [
        'Até 50 transações/mês',
        'Relatórios básicos',
        'Suporte por email',
      ],
      cta: 'Começar Grátis',
      onClick: () => window.location.href = 'https://app.pontofino.com',
      highlight: false,
      color: 'from-gray-900 to-gray-800',
      border: 'border-gray-700',
      text: 'text-white',
      button: 'bg-gray-800 hover:bg-gray-700 text-white',
      icon: <ShieldCheckIcon className="h-7 w-7 text-blue-400" />,
    },
    {
      name: 'Premium',
      price: 'R$ 19,90',
      period: '/mês',
      description: 'Controle total, insights e ferramentas avançadas.',
      features: [
        'Transações ilimitadas',
        'Relatórios avançados',
        'Metas financeiras',
        'Simulador de investimentos',
        'Suporte prioritário',
      ],
      cta: 'Assinar Premium',
      onClick: () => navigate('/subscriptions'),
      highlight: true,
      color: 'from-blue-950 to-blue-900',
      border: 'border-blue-700',
      text: 'text-yellow-400',
      button: 'bg-yellow-400 hover:bg-yellow-300 text-blue-900',
      icon: <TrendingUpIcon className="h-7 w-7 text-yellow-400" />,
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#00e0ff] to-[#0057b8] mb-4">
          Planos para Investir no Seu Futuro
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
          Soluções profissionais para quem leva finanças a sério. Escolha o plano ideal e conquiste o controle financeiro com tecnologia de mercado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <Card
            key={plan.name}
            className={`relative p-10 bg-gradient-to-br ${plan.color} ${plan.border} border-2 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between min-h-[420px] ${plan.highlight ? 'ring-2 ring-yellow-400 scale-105 z-10' : ''}`}
          >
            {plan.highlight && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-blue-900 px-5 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg uppercase">
                  Destaque
                </span>
              </div>
            )}
            <div className="flex flex-col items-center mb-6">
              <div className="mb-3">{plan.icon}</div>
              <h3 className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-yellow-400' : 'text-white'}`}>{plan.name}</h3>
              <p className="text-blue-100 mb-2 text-sm font-medium">{plan.description}</p>
              <div className="flex items-end justify-center mb-2">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-yellow-400' : 'text-white'}`}>{plan.price}</span>
                {plan.period && <span className="text-blue-100 ml-1">{plan.period}</span>}
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-blue-100">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={plan.onClick}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${plan.button}`}
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Button
          onClick={() => navigate('/subscriptions')}
          className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white px-10 py-4 rounded-xl font-bold text-xl inline-flex items-center shadow-lg border border-blue-800"
        >
          Ver Todos os Planos
          <ArrowRightIcon className="ml-3 h-6 w-6" />
        </Button>
      </div>

      {/* Features Highlight */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-5 shadow-lg">
            <BarChart3Icon className="h-8 w-8 text-yellow-400" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Tecnologia de Mercado</h4>
          <p className="text-blue-100 text-base">Ferramentas inspiradas no universo financeiro profissional, com segurança e performance.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-900 to-green-700 rounded-full flex items-center justify-center mb-5 shadow-lg">
            <TrendingUpIcon className="h-8 w-8 text-green-300" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Resultados Reais</h4>
          <p className="text-blue-100 text-base">Acompanhe sua evolução com relatórios e gráficos avançados, como no mercado financeiro.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mb-5 shadow-lg">
            <ShieldCheckIcon className="h-8 w-8 text-blue-900" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Segurança & Suporte</h4>
          <p className="text-blue-100 text-base">Proteção de dados e atendimento dedicado para você focar no que importa: seus investimentos.</p>
        </div>
      </div>
    </section>
  );
}
