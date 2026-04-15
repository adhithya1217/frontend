import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { HeroSection } from "@/components/HeroSection";
import  WebcamSection  from "@/components/WebcamSection";
import { HistoryPanel } from "@/components/HistoryPanel";
import { HowItWorks } from "@/components/HowItWorks";
import { Hand } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SignBridge AI — AI-Powered Sign Language Learning" },
      { name: "description", content: "Learn and detect sign language in real time using AI and your webcam. Bridge the communication gap with YOLO-powered gesture recognition." },
    ],
  }),
});

interface GestureResult {
  letter: string;
  meaning: string;
  confidence: number;
  timestamp: Date;
}

function Index() {
  const [history, setHistory] = useState<GestureResult[]>([]);

  const handleGestureDetected = useCallback((gesture: GestureResult) => {
    setHistory((prev) => [gesture, ...prev].slice(0, 10));
  }, []);

  const clearHistory = useCallback(() => setHistory([]), []);

  return (
  <div
    className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/bg.png')",
      backgroundAttachment: "fixed",
    }}
  >
    {/* 🔥 DARK OVERLAY */}
    <div className="min-h-screen bg-black/60">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card-strong border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-lg">
            <span className="gradient-text">SignBridge AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#webcam">Detect</a>
            <a href="#how-it-works">How It Works</a>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <div className="pt-16">
        <HeroSection />
        <WebcamSection onGestureDetected={handleGestureDetected} />
        <HistoryPanel history={history} onClear={clearHistory} />
        <HowItWorks />
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-sm text-muted-foreground">
        Built by Gunna Chandini
      </footer>

    </div>
  </div>
)};

export default Index;