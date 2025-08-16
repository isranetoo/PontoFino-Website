import React from 'react';
import HomeNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarketTicker from '../components/MarketTicker';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { WalletIcon, TargetIcon, TrendingUpIcon, CheckIcon, ShieldCheckIcon, LayersIcon, SparklesIcon, MailIcon, ClockIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const tools = [
	{
		title: 'Gestão de Orçamento',
		route: 'https://app.pontofino.com',
		icon: WalletIcon,
		color: 'from-blue-600 to-blue-500',
		desc: 'Controle e visibilidade completa do fluxo de caixa, com alertas e relatórios focados em decisões rápidas.',
		highlights: ['Alertas de desvio em tempo real', 'Relatórios por categoria', 'Exportação segura'],
		available: true,
		price: 'R$ 0,00',
		change: 1.8,
	},
	{
		title: 'Metas Financeiras',
		route: 'https://app.pontofino.com',
		icon: TargetIcon,
		color: 'from-green-600 to-green-500',
		desc: 'Planeje objetivos, acompanhe progresso percentual e receba recomendações práticas para acelerar resultados.',
		highlights: ['Progresso com linha do tempo', 'Sugestões automatizadas', 'Notificações de milestones'],
		available: true,
		price: 'R$ 0,00',
		change: 0.6,
	},
	{
		title: 'Simulador de Investimentos',
		route: 'https://app.pontofino.com',
		icon: TrendingUpIcon,
		color: 'from-yellow-600 to-yellow-500',
		desc: 'Cenários comparativos e projeções para escolher a alocação correta com base em objetivos e prazo.',
		highlights: ['Comparação de ativos', 'Projeções por horizonte', 'Exportar cenários'],
		available: true,
		price: 'R$ 0,00',
		change: -0.9,
	},
];

const benefits = [
	{
		icon: ShieldCheckIcon,
		title: 'Confidencialidade Corporativa',
		description: 'Padrões de segurança compatíveis com o mercado — criptografia e permissões granulares.',
		color: 'bg-sky-600'
	},
	{
		icon: LayersIcon,
		title: 'Plataforma Integrada',
		description: 'Todas as ferramentas financeiras integradas para fluxo de trabalho contínuo.',
		color: 'bg-emerald-600'
	},
	{
		icon: SparklesIcon,
		title: 'Design Profissional',
		description: 'Interface limpa e focada em dados, ideal para uso pessoal e por profissionais.',
		color: 'bg-violet-600'
	},
];

const testimonials = [
	{
		name: 'Ana Souza',
		role: 'Empresária',
		text: 'Com a Gestão de Orçamento, finalmente consegui organizar minhas finanças e realizar minha viagem dos sonhos!',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
		rating: 5
	},
	{
		name: 'Carlos Lima',
		role: 'Analista',
		text: 'O Simulador de Investimentos me ajudou a entender onde investir melhor meu dinheiro. Recomendo muito!',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
		rating: 5
	},
];

export default function Ferramentas() {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-[#0096fd]">
			<HomeNavBar />
			
			<div className="container mx-auto px-4 py-16 flex-1">
				{/* Market ticker strip */}
				<div className="mb-8">
						<div className="flex items-center justify-between text-sm text-blue-100 mb-3">
							<div className="font-semibold">Mercado</div>
							<div className="text-xs text-blue-200">Última atualização: Agora</div>
						</div>
						<MarketTicker items={['IBOV: +0.8%', 'S&P500: +0.4%', 'NASDAQ: +1.2%', 'Dólar: R$5.12', 'Selic: 11.75%']} />
				</div>
				{/* Header Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Ferramentas da <span className="text-blue-300">Plataforma</span>
					</h1>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto">
						Tudo o que você precisa para dominar sua vida financeira em um só lugar.
					</p>
				</div>

				{/* Tools Grid (market-style cards) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
					{tools.map((tool, index) => (
						<Card key={index} className="p-4 bg-white/3 border border-white/10 rounded-lg">
							<div className="flex items-center justify-between gap-4">
								<div className="flex items-center gap-4">
									<div className={`p-3 rounded-full bg-gradient-to-tr ${tool.color} shadow-inner`}> 
										<tool.icon className="h-6 w-6 text-white" />
									</div>
									<div>
										<div className="text-sm text-blue-100 font-semibold">{tool.title}</div>
										<div className="text-xs text-blue-200">{tool.desc}</div>
									</div>
								</div>
								<div className="text-right">
									<div className="text-sm text-blue-100">{tool.price}</div>
									<div className={`text-xs font-medium ${tool.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}> 
										{tool.change >= 0 ? <ArrowUpRight className="inline mr-1" /> : <ArrowDownRight className="inline mr-1" />}
										{Math.abs(tool.change)}%
									</div>
								</div>
							</div>

							<hr className="my-3 border-white/6" />

							<div className="flex items-center justify-between">
								<ul className="text-xs text-blue-200 space-y-1">
									{tool.highlights.map((h, i) => (
										<li key={i} className="flex items-center gap-2">
											<CheckIcon className="h-4 w-4 text-emerald-400" />
											<span>{h}</span>
										</li>
									))}
								</ul>
								<div className="w-36">
									<a href={tool.route} target="_blank" rel="noopener noreferrer">
										<Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-md text-sm">Abrir</Button>
									</a>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* Benefits Section */}
				<div className="mb-16">
					<div className="text-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Por que escolher PontoFino</h2>
						<p className="text-sm text-blue-200 max-w-2xl mx-auto">Ferramentas desenhadas para decisões rápidas e seguras no mundo financeiro.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{benefits.map((benefit, index) => (
							<Card key={index} className="p-4 bg-white/3 border border-white/8 rounded-md">
								<div className="flex items-start gap-4">
									<div className={`p-3 rounded-md ${benefit.color} flex items-center justify-center`}> 
										<benefit.icon className="h-6 w-6 text-white" />
									</div>
									<div>
										<div className="text-sm font-semibold text-white">{benefit.title}</div>
										<div className="text-xs text-blue-200">{benefit.description}</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Testimonials */}
				<div className="mb-16">
					<div className="text-center mb-6">
						<h2 className="text-2xl font-bold text-white">Depoimentos</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
						{testimonials.map((t, i) => (
							<Card key={i} className="p-4 bg-white/3 border border-white/8 rounded-md">
								<div className="flex gap-4 items-start">
									<img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
									<div>
										<p className="text-blue-100 italic text-sm">"{t.text}"</p>
										<div className="mt-2">
											<div className="text-sm font-semibold text-white">{t.name}</div>
											<div className="text-xs text-blue-200">{t.role}</div>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Feedback */}
				<div className="mb-12 max-w-3xl mx-auto">
					<Card className="p-4 bg-white/3 border border-white/8 rounded-md flex items-center justify-between">
						<div>
							<div className="text-sm font-semibold text-white">Tem uma sugestão?</div>
							<div className="text-xs text-blue-200">Compartilhe ideias ou reporte problemas — ajudará a melhorar a plataforma.</div>
						</div>
						<div>
							<a href="mailto:contato@pontofino.com">
								<Button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md">Enviar</Button>
							</a>
						</div>
					</Card>
				</div>

				{/* Future features */}
				<div className="text-center mb-12">
					<Card className="p-4 bg-white/2 border border-white/8 rounded-md max-w-2xl mx-auto">
						<div className="flex items-center gap-4 justify-center">
							<ClockIcon className="h-8 w-8 text-yellow-400" />
							<div>
								<div className="text-sm font-semibold text-white">Novas integrações em breve</div>
								<div className="text-xs text-blue-200">Integração bancária, relatórios avançados e exportação segura planejados para os próximos releases.</div>
							</div>
						</div>
					</Card>
				</div>
			</div>

			<Footer />
		</div>
	);
}
