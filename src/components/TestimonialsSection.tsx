const TestimonialsSection = () => {
	//  *** Names are from The Elden Ring Game 🤣 ***
	const eldenRingUsers = [
		{
			id: 1,
			name: "General Radahn",
			role: "Lead Engineer",
			quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugiat.",
		},
		{
			id: 2,
			name: "Maliketh, The Black Blade",
			role: "Founder",
			quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugiat.",
		},
		{
			id: 3,
			name: "Mogh, Lord of Blood",
			role: "CTO",
			quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugiat.",
		},
	];
	//  *** End of Names are from The Elden Ring Game 🤣 ***
	return (
		<section
			id="testimonials"
			className="py-32 px-6 bg-white/2 border-y border-white/10"
		>
			<div className="max-w-6xl mx-auto">
				{/* Heading Content */}
				<div className="text-center mb-16">
					<p className="text-sm text-emerald-400 uppercase tracking-widest mb-3 font-semibold">
						Testimonials
					</p>
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
						Loved by Builders.
					</h2>
				</div>
				{/* End of Heading Content */}

				{/* Users Content */}
				<ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{eldenRingUsers.map((eldenRingUser) => (
						<li
							key={eldenRingUser.id}
							className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
						>
							<blockquote className="text-zinc-300 text-sm leading-relaxed">
								{eldenRingUser.quote}
							</blockquote>

							<div className="flex flex-col gap-3 mt-auto">
								<p className="text-sm font-semibold">
									{eldenRingUser.name}
								</p>
								<p className="text-xs text-zinc-500">
									{eldenRingUser.role}
								</p>
							</div>
						</li>
					))}
				</ul>
				{/* End of Users Content */}

				{/* CTA Content */}
				<div className="mt-20 rounded-3xl overflow-hidden bg-emerald-800">
					<div className="px-10 py-14 text-center">
						<h3 className="text-3xl md:text-4xl font-extrabold mb-4">
							Ready to ship at light speed?
						</h3>
						<p className="text-white mb-8 max-w-md mx-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laboriosam beatae tenetur animi!
						</p>
						<a
							href="#contact"
							className="inline-block bg-white text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 transition-colors duration-300 px-8 py-3.5 rounded-full font-bold cta-button"
						>
							Get started free
						</a>
					</div>
				</div>
				{/* End of CTA Content */}
			</div>
		</section>
	);
};

export default TestimonialsSection;
