import { useEffect, useState } from "react";
import { Loader2, Wallet, DollarSign } from "lucide-react";

const messages = [
  "💰 Analyzing expenses...",
  "📊 Calculating insights...",
  "📈 Tracking your savings...",
  "🏦 Balancing your accounts...",
  "⚡ Smart finance loading..."
];

export default function ExpensooSpinner({ overlay = true }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Outer glowing ring */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-green-600 animate-spin blur-sm opacity-80" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-green-600 animate-spin" style={{ animationDuration: "3s" }} />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-3 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 animate-pulse shadow-lg">
            <Wallet className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <p className="text-lg font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
          {messages[messageIndex]}
        </p>

        {/* Progress dots */}
        <div className="flex justify-center gap-1 mt-3">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 animate-bounce"
              style={{ animationDelay: `${dot * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
}
