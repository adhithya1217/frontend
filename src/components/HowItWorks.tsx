import { Brain, Eye, MessageSquare, Heart } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Capture",
    description: "Your webcam captures hand gestures in real time at high frame rates.",
  },
  {
    icon: Brain,
    title: "AI Processing",
    description: "YOLO deep learning model analyzes each frame to detect and classify hand signs.",
  },
  {
    icon: MessageSquare,
    title: "Translation",
    description: "Detected gestures are instantly translated into letters and meaningful phrases.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Breaking communication barriers for the deaf and hard-of-hearing community.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">How It Works</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Powered by YOLO object detection and deep learning, our system recognizes
          sign language gestures with high accuracy in real time.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="glass-card p-6 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-heading">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Impact section */}
        <div className="mt-20 glass-card glow-border p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
            Bridging the <span className="gradient-text">Communication Gap</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Over 70 million deaf people worldwide rely on sign language as their primary means of communication.
            AI-powered recognition makes it possible for anyone to understand sign language instantly,
            creating a more inclusive world where everyone can be heard.
          </p>
        </div>
      </div>
    </section>
  );
}
