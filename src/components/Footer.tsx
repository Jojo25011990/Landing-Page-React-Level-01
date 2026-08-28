type FooterLinksCategory = "Product" | "Company" | "Legal";
type FooterLinksType = Record<FooterLinksCategory, string[]>;

const Footer = () => {
	const footerLinks: FooterLinksType = {
		Product: ["Features", "Changelog", "Roadmap", "Pricing"],
		Company: ["About", "Blog", "Careers", "Press"],
		Legal: ["Privacy", "Terms", "Security", "Cookies"],
	};

	return (
		<footer id="contact" className="border-t border-white/10 px-6 py-16">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-4 gap-10 mb-14">
					{/* Brand Content */}
					<div className="col-span-1 text-center md:col-span-1 md:text-left">
						<a
							href="#"
							className="text-xl font-bold pb-6 flex justify-center md:justify-self-start"
						>
							<span className="text-emerald-400">Jojo</span>
							<span className="text-white">Web</span>
						</a>

						<p className="text-zinc-500 text-sm leading-relaxed max-w-50">
							Lorem ipsum dolor sit amet consectetur elit.
							Tenetur, ipsam.
						</p>
					</div>
					{/* End of Brand Content */}

					{/* Footer Links */}
					{/* First map -> one group */}
					{/* Second map -> one link within the group */}
					{Object.entries(footerLinks).map(
						([footerLinksGroup, footerLinksGroupItems]) => (
							<div key={footerLinksGroup} className="text-center">
								<p className="text-xs text-zinc-500 uppercase tracking-widest mb-4 font-medium">
									{/* Product | Company or Legal text */}
									{footerLinksGroup}
								</p>

								<ul className="flex flex-col gap-2.5">
									{footerLinksGroupItems.map(
										(footerLinksGroupItem) => (
											<li key={footerLinksGroupItem}>
												<a
													href="#"
													className="text-sm text-zinc-400 hover:text-white active:text-white transition-colors"
												>
													{footerLinksGroupItem}
												</a>
											</li>
										),
									)}
								</ul>
							</div>
						),
					)}
					{/* End of Footer Links */}
				</div>

				{/* Copyright text, social media links */}
				<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white">
					<p>
						© <span className="text-emerald-400">JojoWeb</span>. All
						rights reserved.
					</p>

					<nav>
						<ul className="flex gap-5">
							<li>
								<a
									href="https://github.com/Jojo25011990"
									target="_blank"
									className="hover:text-zinc-400 active:text-zinc-400 transition-colors duration-200"
								>
									Github
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/jozef-kudrna-28b580295/"
									target="_blank"
									className="hover:text-zinc-400 active:text-zinc-400 transition-colors duration-200"
								>
									Linkedin
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/web.animations.and.effects/"
									target="_blank"
									className="hover:text-zinc-400 active:text-zinc-400 transition-colors duration-200"
								>
									Instagram
								</a>
							</li>
						</ul>
					</nav>
				</div>
				{/* End of Copyright text, social media links */}
			</div>
		</footer>
	);
};

export default Footer;
