import React, { useState } from 'react';
import HomeNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarketTicker from '../components/MarketTicker';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CheckIcon, BarChart2, Star } from 'lucide-react';

export default function Subscriptions() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'annual'

  const plans = [
    {
      id: 'basic',
      name: 'Plano Básico',
      monthly: 0,
      annual: 0,
      description: 'Ideal para começar a controlar suas finanças',
      features: ['Controle básico de gastos', 'Até 50 transações por mês', 'Relatórios simples', 'Suporte por email'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Plano Premium',
      monthly: 19.9,
      annual: 199.0,
      description: 'Para quem quer controle total das finanças',
      features: ['Transações ilimitadas', 'Categorização automática', 'Relatórios avançados', 'Metas financeiras', 'Simulador de investimentos', 'Suporte prioritário', 'Sincronização em nuvem'],
      popular: true
    },
    {
      id: 'business',
      name: 'Plano Empresarial',
      monthly: 49.9,
      annual: 499.0,
      description: 'Perfeito para pequenas empresas e empreendedores',
      features: ['Tudo do Plano Premium', 'Múltiplos usuários (até 10)', 'Controle de fluxo de caixa', 'Relatórios empresariais', 'API de integração', 'Suporte 24/7', 'Consultoria financeira mensal'],
      popular: false
    }
  ];

  const formatPrice = (value) => {
    if (value === 0) return 'Gratuito';
    return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    console.log(`Plano selecionado: ${planId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-[#0096fd]">
      <HomeNavBar />

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-blue-100 mb-3">
            <div className="font-semibold">Mercado</div>
            <div className="text-xs text-blue-200">Última atualização: Agora</div>
          </div>
          <MarketTicker items={['IBOV: +0.8%', 'S&P500: +0.4%', 'NASDAQ: +1.2%', 'Dólar: R$5.12', 'Selic: 11.75%']} />
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Planos e Preços</h1>
            <p className="text-blue-200 mt-2">Escolha o plano certo para seu perfil — pessoal ou empresa. Transparência e previsibilidade financeira.</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="text-sm text-blue-200">Faturamento</div>
            <div className="bg-white/5 p-1 rounded-full flex items-center">
              <button onClick={() => setBilling('monthly')} className={`px-3 py-1 rounded-full text-sm ${billing === 'monthly' ? 'bg-slate-800 text-white' : 'text-blue-200'}`}>Mensal</button>
              <button onClick={() => setBilling('annual')} className={`px-3 py-1 rounded-full text-sm ${billing === 'annual' ? 'bg-slate-800 text-white' : 'text-blue-200'}`}>Anual</button>
            </div>
            <div className="flex items-center text-blue-200 gap-2 px-3">
              <BarChart2 className="w-5 h-5 text-blue-200" />
              <span className="text-sm">Economize até 15% pagando anualmente</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative p-6 bg-white/4 border border-white/10 rounded-lg ${plan.popular ? 'ring-1 ring-amber-400' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-2"><Star className="w-4 h-4" /> Mais Popular</span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-blue-200 mt-1">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <div className="text-3xl font-bold text-white">
                  {billing === 'monthly' ? formatPrice(plan.monthly) : formatPrice(plan.annual)}
                </div>
                <div className="text-sm text-blue-200">{billing === 'monthly' ? '/mês' : '/ano'}</div>
              </div>

              <ul className="space-y-3 mb-6 text-sm text-blue-100">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="w-4 h-4 text-emerald-400 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => handleSelectPlan(plan.id)} className={`w-full py-2 rounded-md font-semibold ${plan.id === 'basic' ? 'bg-slate-700 text-white' : plan.popular ? 'bg-amber-400 text-black' : 'bg-slate-800 text-white'}`}>
                {plan.id === 'basic' ? 'Começar Grátis' : 'Assinar Agora'}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-8 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Posso cancelar minha assinatura a qualquer momento?</h3>
              <p className="text-blue-100">Sim, você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento e você continuará tendo acesso aos recursos premium até o final do período pago.</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Existe período de teste gratuito?</h3>
              <p className="text-blue-100">O plano básico é gratuito para sempre. Para os planos Premium e Empresarial, oferecemos 7 dias de teste gratuito para você experimentar todos os recursos.</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Como funciona o suporte técnico?</h3>
              <p className="text-blue-100">Oferecemos suporte por email para todos os planos. Usuários Premium têm suporte prioritário, e usuários do plano Empresarial têm acesso ao suporte 24/7.</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
