import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Shield, 
  Star, 
  Users, 
  Heart, 
  Quote,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import HomeNavBar from '../components/NavBar';
import Footer from '../components/Footer';




const values = [
  {
    icon: BookOpen,
    title: "Educação Financeira",
    description: "Acreditamos que o conhecimento é o primeiro passo para a independência financeira."
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Ferramentas práticas e eficazes para transformar seus objetivos em realidade."
  },
  {
    icon: Shield,
    title: "Transparência Total",
    description: "Informações claras e honestas sobre investimentos e estratégias financeiras."
  },
  {
    icon: Heart,
    title: "Compromisso Humano",
    description: "Colocamos as pessoas no centro de tudo, entendendo suas necessidades únicas."
  }
];

const differentials = [
  {
    icon: TrendingUp,
    title: "Análise Inteligente",
    description: "Algoritmos avançados para análise de padrões financeiros",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Insights Personalizados",
    description: "Recomendações baseadas no seu perfil e objetivos",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Rede de pessoas compartilhando experiências e dicas",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Interface Moderna",
    description: "Design intuitivo e experiência de usuário excepcional",
    color: "from-emerald-500 to-teal-500"
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    content: "O PontoFino transformou completamente minha relação com o dinheiro. Em 6 meses consegui organizar minhas finanças e começar a investir.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Engenheiro",
    content: "As ferramentas de simulação são incríveis! Me ajudaram a planejar minha aposentadoria de forma muito mais estratégica.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content: "Nunca pensei que gerenciar orçamento pudesse ser tão simples. A interface é muito intuitiva e os insights são valiosos.",
    rating: 5
  }
];

const stats = [
  { value: "50K+", label: "Usuários ativos" },
  { value: "R$ 100M+", label: "Em investimentos" },
  { value: "98%", label: "Satisfação" },
  { value: "24/7", label: "Suporte" }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-[#0096fd]">
      <HomeNavBar />
      <div className="container mx-auto py-16 px-4 text-white flex-1">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">Sobre o PontoFino</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <value.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((diff, idx) => (
              <div
                key={idx}
                className={`p-8 bg-gradient-to-br ${diff.color} backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105`}
              >
                <diff.icon className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">{diff.title}</h3>
                <p className="text-white">{diff.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="italic text-blue-100 mb-4">"{t.content}"</p>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-blue-200">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Nossos Números</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col items-center min-w-[120px] transition-transform hover:scale-105"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
