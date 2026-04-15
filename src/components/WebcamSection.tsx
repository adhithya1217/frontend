import { useEffect, useState } from "react";

type GestureResult = {
  letter: string;
  meaning: string;
  confidence: number;
  timestamp: Date;
};

export default function WebcamSection({
  onGestureDetected,
}: {
  onGestureDetected?: (gesture: GestureResult) => void;
}) {
  const [alphabet, setAlphabet] = useState("");
  const [meaning, setMeaning] = useState("");
  const [image, setImage] = useState("");
  const [started, setStarted] = useState(false);
  const [lastMeaning, setLastMeaning] = useState("");

  // 🔁 Fetch from backend
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      fetch("https://backend-production-9e89.up.railway.app/detect")
        .then((res) => res.json())
        .then((data) => {
          setAlphabet(data.alphabet);
          setMeaning(data.meaning);
          setImage(data.image);

          const gesture: GestureResult = {
            letter: data.alphabet,
            meaning: data.meaning,
            confidence: 0.9,
            timestamp: new Date(),
          };

          // 🧠 Avoid duplicate entries
          if (data.meaning && data.meaning !== lastMeaning) {
            setLastMeaning(data.meaning);
            onGestureDetected?.(gesture);
          }
        })
        .catch((err) => console.error("API error:", err));
    }, 200); // faster refresh (smooth video)

    return () => clearInterval(interval);
  }, [started, lastMeaning, onGestureDetected]);

  return (
    <div id="webcam" className="text-center py-10">

      {/* 🚀 Start Button */}
      {!started && (
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition"
        >
          🚀 Start Detecting
        </button>
      )}

      {/* 🎥 Video Feed + Output */}
      {started && (
        <>
          <h2 className="text-xl mb-4">📷 Live Detection</h2>

          {/* 🔥 Live image from backend */}
          {image && (
            <img
              src={`data:image/jpeg;base64,${image}`}
              className="mx-auto rounded-xl shadow-lg w-[500px]"
            />
          )}

          <div className="mt-6">
            <h1 className="text-5xl font-bold">🔤 {alphabet || "-"}</h1>
            <h2 className="text-2xl mt-2 text-primary">💬 {meaning}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {alphabet ? "✅ Detecting" : "⚠ No Gesture"}
            </p>
          </div>
        </>
      )}
    </div>
  );
}