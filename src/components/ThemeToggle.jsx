import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		} else {
			document.documentElement.classList.add("light");
			setIsDarkMode(false);
		}

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDarkMode(true);
		}
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className={cn(
				"fixed max-sm:hidden right-5 z-50 p-2 rounded-full transition-all duration-300",
				"focus:outline-hidden",
				isScrolled ? "top-3 md:top-1.75" : "top-5 md:top-3.75",
			)}
		>
			{" "}
			{isDarkMode ? (
				<Sun className="size-6 text-yellow-300" />
			) : (
				<Moon className="size-6 text-blue-900" />
			)}{" "}
		</button>
	);
};
