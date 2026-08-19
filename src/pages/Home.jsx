import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

export const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme toggle */}
			<ThemeToggle />

			{/* Background Effects */}
			<StarBackground />

			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<main>
				<HeroSection />
				<AboutSection />
			</main>
			{/* Footer */}
		</div>
	);
};
