import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ProgressBar } from "./../components/ProgressBar";

export const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme toggle */}
			<ThemeToggle />

			{/* Progress Bar */}
			<ProgressBar />

			{/* Background Effects */}
			<StarBackground />

			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<main>
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			{/* Footer */}
		</div>
	);
};
