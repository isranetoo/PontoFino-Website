
import React from 'react';
import { Card } from './ui/card';
import { CreditCardIcon, FileTextIcon, GraduationCapIcon, SmartphoneIcon, BarChart3Icon, ShieldCheckIcon } from 'lucide-react';

const projects = [
  {
    icon: CreditCardIcon,
    title: 'Integração Bancária',
    text: 'Conexão direta com bancos para importação automática e segura de transações, como nas grandes plataformas.',
    color: 'from-blue-900 to-blue-700',
    status: 'Em Desenvolvimento',
    badge: 'bg-gradient-to-r from-blue-700 to-blue-400 text-blue-100',
  },
  {
    icon: FileTextIcon,
    title: 'Relatórios Avançados',
    text: 'Dashboards e relatórios personalizáveis, exportação de dados e insights de performance financeira.',
    color: 'from-green-900 to-green-700',
    status: 'Planejado',
    badge: 'bg-gradient-to-r from-green-700 to-green-400 text-green-100',
  },
  {
    icon: GraduationCapIcon,
    title: 'Educação Financeira',
    text: 'Conteúdos, simuladores e trilhas de aprendizado para elevar seu conhecimento financeiro.',
    color: 'from-yellow-700 to-yellow-500',
    status: 'Em Análise',
    badge: 'bg-gradient-to-r from-yellow-600 to-yellow-300 text-yellow-900',
  },
  {
    icon: SmartphoneIcon,
    title: 'App Mobile',
    text: 'Aplicativo nativo para Android e iOS, com experiência fluida e recursos de mercado.',
    color: 'from-purple-900 to-purple-700',
    status: 'Próximo',
    badge: 'bg-gradient-to-r from-purple-700 to-purple-400 text-purple-100',
  },
];


export default function FutureProjects() {
  return (
    <section className="py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#00e0ff] to-[#0057b8] mb-5">
          O Futuro da Plataforma Financeira
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-medium">
          Veja as inovações que vão elevar sua experiência financeira ao próximo nível. Estamos construindo soluções de mercado para você investir no seu futuro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`group p-10 bg-gradient-to-br ${project.color} border border-white/10 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl min-h-[320px] flex flex-col justify-between`}
          >
            <div className="flex flex-col items-center text-center">
              {/* Status Badge */}
              <div className="mb-4">
                <span className={`px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md uppercase ${project.badge}`}>{project.status}</span>
              </div>
              {/* Icon */}
              <div className={`w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-7 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="h-11 w-11 text-white" />
              </div>
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-blue-100 leading-relaxed text-base font-medium">
                {project.text}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Progress Timeline */}
      <div className="mt-20 max-w-4xl mx-auto">
        <Card className="p-10 bg-gradient-to-br from-blue-900 to-blue-700 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Roadmap de Desenvolvimento
          </h3>
          <div className="space-y-8">
            {/* Timeline Item */}
            <div className="flex items-center gap-5">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-700 to-blue-400 rounded-full flex items-center justify-center shadow-md">
                <BarChart3Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Q1 2025</span>
                  <span className="text-blue-200 text-sm font-semibold">Integração Bancária</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-blue-700 to-blue-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-6 h-6 bg-gradient-to-br from-green-700 to-green-400 rounded-full flex items-center justify-center shadow-md">
                <BarChart3Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Q2 2025</span>
                  <span className="text-green-200 text-sm font-semibold">Relatórios Avançados</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-green-700 to-green-400 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-full flex items-center justify-center shadow-md">
                <BarChart3Icon className="h-4 w-4 text-yellow-900" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Q3 2025</span>
                  <span className="text-yellow-700 text-sm font-semibold">Educação Financeira</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-purple-400 rounded-full flex items-center justify-center shadow-md">
                <BarChart3Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Q4 2025</span>
                  <span className="text-purple-200 text-sm font-semibold">App Mobile</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-purple-700 to-purple-400 h-2 rounded-full w-1/6"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <Card className="p-10 bg-gradient-to-r from-blue-700/30 to-blue-700/30 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Seja o primeiro a saber!
          </h3>
          <p className="text-blue-100 mb-6">
            Cadastre-se para receber notificações sobre novos recursos e atualizações exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-lg font-bold transition-colors">
              Notificar-me
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
