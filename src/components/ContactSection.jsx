import { AtSign, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsSubmitting(true);

		setTimeout(() => {
			toast({
				title: "Message Sent!",
				description: "Thank you for your message. I'll get back to you soon.",
			});
			setIsSubmitting(false);
		}, 1500);
	};

	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get in <span className="text-primary">Touch</span>
				</h2>

				<p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or want to collaborate? Feel free to reach out.
					I'm always open to discussing new opportunities.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-11">
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

						<div className="space-y-6 justify-center">
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="size-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium">Email</h4>
									<a
										href="mailto:hello@gmail.com"
										className="text-foreground hover:text-primary transition-colors duration-300"
									>
										hello@gmail.com
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Phone className="size-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium">Phone</h4>
									<a
										href="tel:+11234567890"
										className="text-foreground hover:text-primary transition-colors duration-300"
									>
										+1 (123) 456-7890
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="size-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium">Location</h4>
									<a
										href="#"
										className="text-foreground hover:text-primary transition-colors duration-300"
									>
										Vancouver, BC, Canada
									</a>
								</div>
							</div>
						</div>

						<div className="pt-8">
							<h4 className="font-medium mb-4">Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<a
									href="http://socialmedian.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AtSign />
								</a>
								<a
									href="http://socialmedian.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AtSign />
								</a>
								<a
									href="http://socialmedian.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AtSign />
								</a>
								<a
									href="http://socialmedian.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AtSign />
								</a>
							</div>
						</div>
					</div>

					<div className="bg-card p-8 rounded-lg shadow-xs">
						<h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="Pedro Machado..."
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Your Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="john@gmail.com"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Your Message
								</label>
								<textarea
									name="message"
									id="message"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
									placeholder="Hello, I'd like to talk about..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={cn(
									"cosmic-button w-full flex items-center justify-center gap-2",
								)}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
								<Send size={16} />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
