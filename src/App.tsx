import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {
	return (
		<main className="bg-zinc-950 text-white font-sans overflow-x-hidden">
			<Header />
			<HeroSection />
			<FeaturesSection />
			<TestimonialsSection />
			<Footer />
		</main>
	);
};

export default App;
