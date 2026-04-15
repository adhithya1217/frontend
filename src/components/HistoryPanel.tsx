import { Trash2, Clock } from "lucide-react";

interface GestureResult {
  letter: string;
  meaning: string;
  confidence: number;
  timestamp: Date;
}

interface HistoryPanelProps {
  history: GestureResult[];
  onClear: () => void;
}

export function HistoryPanel({ history, onClear }: HistoryPanelProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="gradient-text">Detection History</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Last 10 detected gestures</p>
          </div>
          <button
            onClick={onClear}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm text-muted-foreground hover:text-foreground hover-lift"
          >
            <Trash2 className="w-4 h-4" /> Clear History
          </button>
        </div>

        {history.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <Clock className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">No gestures detected yet. Start the camera to begin!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {history.map((g, i) => (
              <div
                key={i}
                className="glass-card p-4 text-center hover-lift"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="text-3xl font-bold gradient-text font-heading mb-1">{g.letter}</div>
                <p className="text-xs text-muted-foreground truncate">{g.meaning}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-2">
                  {g.timestamp.toLocaleTimeString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
