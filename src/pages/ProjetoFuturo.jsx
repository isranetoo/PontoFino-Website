import React from 'react';
import {
  CreditCard,
  FileText,
  GraduationCap,
  Smartphone,
  Clock,
  Zap,
  Target,
  Rocket,
  Mail,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Send,
  BarChart2,
  Calendar
} from 'lucide-react';
import HomeNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarketTicker from '../components/MarketTicker';

const ProjetoFuturo = () => {
  const projects = [
    {
      icon: CreditCard,
      title: 'Integração Bancária',
      description: 'Conecte suas contas bancárias e importe transações automaticamente, facilitando o controle financeiro sem esforço manual.',
      status: 'Em breve',
      color: 'from-blue-500 to-cyan-500',
  progress: 75,
  impact: 'Alta'
    },
    {
      icon: FileText,
      title: 'Relatórios Personalizados',
      description: 'Gere relatórios detalhados, gráficos interativos e exporte seus dados para Excel ou PDF, tornando a análise financeira simples e visual.',
      status: 'Planejado',
      color: 'from-emerald-500 to-teal-500',
  progress: 45,
  impact: 'Média'
    },
    {
      icon: GraduationCap,
      title: 'Educação Financeira',
      description: 'Acesse dicas personalizadas, conteúdos educativos e trilhas de aprendizado para evoluir sua saúde financeira.',
      status: 'Em pesquisa',
      color: 'from-amber-500 to-orange-500',
  progress: 25,
  impact: 'Média'
    },
    {
      icon: Smartphone,
      title: 'App Mobile',
      description: 'Tenha o PontoFino na palma da mão! Aplicativo para Android e iOS, com notificações e sincronização em tempo real.',
      status: 'Futuro',
      color: 'from-purple-500 to-pink-500',
  progress: 10,
  impact: 'Baixa'
    }
  ];

  const roadmapItems = [
    { quarter: 'Q1 2025', title: 'Integração Bancária', status: 'active' },
    { quarter: 'Q2 2025', title: 'Relatórios Avançados', status: 'planned' },
    { quarter: 'Q3 2025', title: 'Educação Financeira', status: 'planned' },
    { quarter: 'Q4 2025', title: 'App Mobile', status: 'planned' }
  ];

  const features = [
    { icon: Zap, title: 'Sincronização em tempo real' },
    { icon: Target, title: 'Metas inteligentes' },
    { icon: CheckCircle, title: 'Análise preditiva' },
    { icon: Rocket, title: 'Performance otimizada' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <HomeNavBar />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-blue-100 mb-3">
            <div className="font-semibold">Mercado</div>
            <div className="text-xs text-blue-200">Última atualização: Agora</div>
          </div>
          <MarketTicker items={['IBOV: +0.8%', 'S&P500: +0.4%', 'NASDAQ: +1.2%', 'Dólar: R$5.12', 'Selic: 11.75%']} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-200 mb-4">
            <Rocket className="w-4 h-4" /> Roadmap & Projetos
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Inovação com rigor — Roadmap PontoFino</h1>
          <p className="max-w-3xl mx-auto text-blue-200">Priorizamos segurança, impacto mensurável e velocidade de entrega. Abaixo, você vê o cronograma e o estado atual dos nossos projetos estratégicos.</p>
        </div>
      </section>

      {/* Roadmap (timeline) */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/6 hidden md:block" />
            <div className="space-y-8">
              {roadmapItems.map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row md:items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2">
                    <div className={`p-4 bg-white/3 border border-white/8 rounded-md ${item.status === 'active' ? 'ring-1 ring-emerald-400' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-blue-200">{item.quarter}</div>
                          <div className="text-lg font-semibold text-white">{item.title}</div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full font-medium ${item.status === 'active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700/20 text-blue-200'}`}>{item.status}</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:flex md:justify-center">
                    <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 border border-white/10 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Próximas Funcionalidades</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Projetos priorizados por impacto e prontidão técnica.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <div key={i} className="p-6 bg-white/4 border border-white/10 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}> 
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <div className="text-xs text-blue-200">Impacto: <span className="font-medium text-white">{project.impact}</span></div>
                      </div>
                      <p className="text-blue-200 mt-2 mb-3">{project.description}</p>

                      <div className="text-sm text-blue-200 flex items-center justify-between mb-2">
                        <div>Progresso</div>
                        <div className="font-medium text-white">{project.progress}%</div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div className={`h-2 rounded-full bg-gradient-to-r ${project.color}`} style={{ width: `${project.progress}%` }} />
                      </div>

                      <div className="flex items-center gap-3 mt-3">
                        <a href="#" className="text-sm text-blue-100 underline">Ver detalhes</a>
                        <button className="ml-auto bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded-md text-sm">Notificar-me</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Recursos Estratégicos</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Tecnologias e automações que suportam escala e robustez operacional.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="p-4 bg-white/3 border border-white/8 rounded-md text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">{f.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-white/5 border border-white/8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Tem uma ideia relevante para o mercado?</h3>
            <p className="text-blue-200 mb-4">Envie sua proposta. Projetos com validação recebem prioridade no roadmap.</p>
            <div className="flex gap-3 justify-center">
              <a href="mailto:contato@pontofino.com" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md">Enviar sugestão</a>
              <a href="#" className="border border-white/10 text-white px-4 py-2 rounded-md">Ver roadmap completo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Receba atualizações do roadmap</h2>
          <p className="text-blue-200 mb-4">Inscreva-se para receber notificações quando um projeto avançar de fase.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="Seu e-mail" className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/8 text-white placeholder-blue-300" />
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white">Inscrever</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjetoFuturo;
