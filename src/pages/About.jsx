import React from 'react';
import {
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  Shield,
  Users,
  Heart,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import HomeNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarketTicker from '../components/MarketTicker';




const values = [
  {
    icon: BookOpen,
    title: "Educação Financeira",
    description: "Conhecimento prático para decisões de investimento e controle de despesas."
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Ferramentas orientadas a metas, com métricas claras e acionáveis."
  },
  {
    icon: Shield,
    title: "Transparência",
    description: "Dados e relatórios claros para auditoria e confiança nas decisões."
  },
  {
    icon: Heart,
    title: "Humano & Seguro",
    description: "Suporte e produto com foco em privacidade e usabilidade."
  }
];

const differentials = [
  {
    icon: TrendingUp,
    title: "Análise & Relatórios",
    description: "Dashboards e relatórios prontos para decisões executivas.",
    color: "from-sky-600 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Insights Automatizados",
    description: "Sugestões de ação com base no histórico e metas.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Compartilhe planos e relatórios com stakeholders com segurança.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Produtividade",
    description: "Automatizações que reduzem tarefas manuais e erros.",
    color: "from-emerald-500 to-teal-500"
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    content: "Organizei o fluxo de caixa da empresa e ganhei clareza estratégica para reduzir custos.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Engenheiro",
    content: "Simulações profissionais que me ajudaram a escolher a alocação certa para meus objetivos.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content: "Relatórios claros e exportáveis — perfeito para apresentar ao meu contador.",
    rating: 5
  }
];

const stats = [
  { value: "50K+", label: "Usuários ativos" },
  { value: "R$100M+", label: "Em investimentos" },
  { value: "98%", label: "Satisfação" },
  { value: "24/7", label: "Suporte" }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-[#0096fd]">
      <HomeNavBar />
      <div className="container mx-auto py-10 px-4 text-white flex-1">
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-blue-100 mb-3">
            <div className="font-semibold">Mercado</div>
            <div className="text-xs text-blue-200">Última atualização: Agora</div>
          </div>
          <MarketTicker items={['IBOV: +0.8%', 'S&P500: +0.4%', 'NASDAQ: +1.2%', 'Dólar: R$5.12', 'Selic: 11.75%']} />
        </div>

        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o <span className="text-blue-300">PontoFino</span></h1>
          <p className="max-w-2xl mx-auto text-blue-100">Soluções financeiras pensadas para profissionais e empresas que exigem clareza, segurança e controle.</p>
        </header>

        {/* Values as compact cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, idx) => (
              <div key={idx} className="p-4 bg-white/3 border border-white/8 rounded-md">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-slate-800">
                    <v.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{v.title}</div>
                    <div className="text-xs text-blue-200">{v.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Differentials - gradient badges */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentials.map((d, i) => (
              <div key={i} className={`p-4 bg-gradient-to-br ${d.color} rounded-md text-white`}>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-md">
                    <d.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{d.title}</div>
                    <div className="text-xs opacity-90 mt-1">{d.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials compact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-4 bg-white/3 border border-white/8 rounded-md">
                <div className="flex items-start gap-3">
                  <img src={`https://i.pravatar.cc/48?u=${idx}`} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="text-sm italic text-blue-100">"{t.content}"</div>
                    <div className="mt-2 text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-blue-200">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key stats with subtle design */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Nossos Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 bg-white/3 border border-white/8 rounded-md text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-blue-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-white">Pronto para tomar decisões financeiras com confiança?</div>
              <div className="text-sm text-blue-200">Experimente as ferramentas que líderes de mercado usam diariamente.</div>
            </div>
            <div>
              <a href="/" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Começar</a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
