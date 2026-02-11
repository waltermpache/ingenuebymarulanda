import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to subscribe");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast.success("Thank you for subscribing! We'll keep you updated on new arrivals and events.");
      setEmail("");
    },
    onError: (error: Error) => {
      if (error.message.includes("already subscribed")) {
        toast.error("You're already subscribed to our newsletter.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <section className="py-24 bg-gold-beige/10">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <span className="text-palm-green uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Stay Connected</span>
        <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-6">Join Our List</h2>
        <p className="text-muted-foreground mb-10">
          Be the first to know about new designer arrivals, exclusive events, and Palm Beach style inspiration.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Your Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={newsletterMutation.isPending}
            className="rounded-none border-espresso/20 bg-transparent h-12 px-4 focus-visible:ring-palm-green text-espresso placeholder:text-espresso/40"
            data-testid="input-newsletter-email"
          />
          <Button 
            type="submit"
            disabled={newsletterMutation.isPending}
            className="bg-espresso text-white hover:bg-palm-green rounded-none px-8 h-12 tracking-widest font-serif disabled:opacity-50"
            data-testid="button-newsletter-submit"
          >
            {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
