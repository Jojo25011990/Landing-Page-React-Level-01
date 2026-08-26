import { useState } from "react";

const Header = () => {
	const [openMobileNavigation, isOpenMobileNavigation] = useState(false);

	const navigationLinks: string[] = ["Features", "Testimonials", "Contact"];

	return (
		<header>
			{/* Desktop */}
			<div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
				<a
					href="#"
					className="text-xl font-bold p-6 flex items-center justify-between"
				>
					<span className="text-emerald-400">Jojo</span>
					<span className="text-white">Web</span>
				</a>

				<nav className="hidden md:flex items-center gap-8">
					{navigationLinks.map((navigationLink, index) => {
						return (
							<a
								href={`#${navigationLink.toLowerCase()}`}
								key={index} // *** I can use navigationLink instead of index, if I want to 🤣 ***
								className="text-sm text-zinc-400 hover:text-white active:text-white transition-colors duration-200"
							>
								{navigationLink}
							</a>
						);
					})}

					<a
						href="#"
						className="text-sm bg-emerald-600 hover:bg-emerald-500 transition-colors duration-300 px-4 py-2 rounded-full font-medium"
					>
						Get Started
					</a>
				</nav>

				{/* Mobile Hamburger Button */}
				<button
					className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
					onClick={() => isOpenMobileNavigation((button) => !button)}
				>
					<span
						className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${openMobileNavigation ? "rotate-45 translate-y-2" : ""}`}
					></span>
					<span
						className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${openMobileNavigation ? "opacity-0" : ""}`}
					></span>
					<span
						className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${openMobileNavigation ? "-rotate-45 -translate-y-2" : ""}`}
					></span>
				</button>
				{/* End of Mobile Hamburger Button */}
			</div>
			{/* End of Desktop */}

			{/* Version 01 */}
			{/* Mobile */}
			{/* {openMobileNavigation && (
				<div className="md:hidden overflow-hidden bg-zinc-900 border-t border-white/20">
					<div className="flex flex-col px-6 py-4 gap-4">
						{navigationLinks.map((navigationLink) => {
							return (
								<a
									href={`#${navigationLink.toLowerCase()}`}
									key={navigationLink} // *** I can use navigationLink instead of index, if I want to 🤣 -> Yes I want 😅 ***
									className="text-sm text-zinc-400 hover:text-white active:text-white transition-colors duration-200"
								>
									{navigationLink}
								</a>
							);
						})}
					</div>
				</div>
			)} */}
			{/* End of Version 01 */}

			{/* Version 02 */}
			<div
				className={`absolute z-50 w-full md:hidden overflow-hidden bg-zinc-900 border-t border-white/20 ${openMobileNavigation ? "open-mobile-navigation" : "mobile-navigation"}`}
			>
				<div className="flex flex-col px-6 py-4 gap-4">
					{navigationLinks.map((navigationLink) => {
						return (
							<a
								href={`#${navigationLink.toLowerCase()}`}
								key={navigationLink} // *** I can use navigationLink instead of index, if I want to 🤣 -> Yes I want 😅 ***
								className="text-sm text-zinc-400 hover:text-white active:text-white transition-colors duration-200"
							>
								{navigationLink}
							</a>
						);
					})}
				</div>
			</div>
			{/* End of Version 02 */}
			{/* End of Mobile */}
		</header>
	);
};

export default Header;
