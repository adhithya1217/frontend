import { Hand, Sparkles, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>AI-Powered Sign Language Recognition</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Learning Platform</span>
          <br />
          <span className="text-foreground">for</span>
          <br />
          <span className="text-foreground"> </span>
          <span className="gradient-text">Deaf and Mute</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Real-time gesture detection powered by YOLO. Bridge the communication gap
          between the hearing and deaf communities through technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#webcam"
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover-lift flex items-center gap-2"
          >
            <Hand className="w-5 h-5" />
            Start Detecting
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-xl glass-card text-foreground font-semibold text-lg hover-lift"
          >
            How It Works
          </a>
        </div>

        <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto animate-bounce" />
      </div>
    </section>
  );
}
