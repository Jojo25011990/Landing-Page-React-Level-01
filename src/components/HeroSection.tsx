const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
			{/* Overlay - Grid */}
			<div className="absolute inset-0 opacity-[0.05] hero-section-grid-overlay"></div>
			{/* End of Overlay - Grid */}

			{/* Hero Content */}
			<div className="relative z-10 text-center max-w-4xl mx-auto">
				<p className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/40 rounded-full px-5 py-2.5 text-sm text-emerald-300 mb-8">
					Now in public beta
				</p>

				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
					Build Faster.
					<br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 bg-emerald-600 to-emerald-900">
						Ship Smarter.
					</span>
				</h1>

				<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quae suscipit nobis voluptatum laboriosam magnam veniam
					nihil.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="#contact"
						className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-500 transition-colors duration-200 px-8 py-3.5 rounded-full font-semibold text-white shadow-lg shadow-emerald-900/50 cursor-pointer"
					>
						Start for free
					</a>
					<a
						href="#features"
						className="border border-white/20 hover:border-white/40 active:border-white/40 hover:bg-white/5 active:bg-white/5 transition-all duration-200 px-8 py-3.5 rounded-full font-semibold text-zinc-300"
					>
						See how it works
					</a>
				</div>

				{/* Scroll Text & Arrow */}
				<div className="mt-20 flex flex-col items-center gap-2 text-zinc-600">
					<span className="text-xl tracking-widest uppercase">
						Scroll
					</span>
					<div className="arrow">
						<div className="arrow-body"></div>
					</div>
				</div>
				{/* End of Scroll Text & Arrow */}
			</div>
			{/* End of Hero Content */}
		</section>
	);
};

export default HeroSection;
