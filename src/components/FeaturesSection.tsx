type FeatureType = {
	id: number;
	icon: string;
	title: string;
	description: string;
};
const FeaturesSection = () => {
	// *** Icons -> window + dot, example: 🖐️ ***
	const features: FeatureType[] = [
		{
			id: 1,
			icon: "⚡",
			title: "Deploys",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
		},
		{
			id: 2,
			icon: "🔒",
			title: "Security",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
		},
		{
			id: 3,
			icon: "📊",
			title: "Analytics",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
		},
		{
			id: 4,
			icon: "🤖",
			title: "Automation",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
		},
		{
			id: 5,
			icon: "🌍",
			title: "Network",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
		},
		{
			id: 6,
			icon: "🔗",
			title: "Integrations",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
		},
	];

	return (
		<section id="features" className="py-32 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Content */}
				<div className="text-center mb-16">
					<p className="text-sm text-emerald-400 uppercase tracking-widest mb-3 font-semibold">
						Features
					</p>
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
						Everything you need,
						<br />
						<span className="inline-block text-zinc-400 mt-2">
							nothing you don't.
						</span>
					</h2>
					<p className="text-zinc-400 max-w-xl mx-auto">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Provident error nam nihil exercitationem possimus.
					</p>
				</div>
				{/* End of Content */}

				{/* Cards */}
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{features.map((feature) => (
						<li
							key={feature.id}
							className="bg-white/5 border border-white/10 hover:bg-emerald-500/40 active:bg-emerald-500/40 rounded-2xl p-6 transition-colors duration-300"
						>
							<div className="text-3xl mb-4">{feature.icon}</div>
							<h3 className="text-lg font-semibold mb-2">
								{feature.title}
							</h3>
							<p className="text-zinc-400 text-sm leading-relaxed">
								{feature.description}
							</p>
						</li>
					))}
				</ul>
				{/* End of Cards */}
			</div>
		</section>
	);
};

export default FeaturesSection;
