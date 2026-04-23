import { Phone, MessageCircle } from "lucide-react";

export const FloatingContactWidget = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Status Badge */}
      <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-app-primary shadow-lg animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Technik Online
      </div>

      {/* Main Action Button */}
      <a
        href="tel:+420720000000"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--water-accent))] text-[hsl(var(--water-primary))] shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 h-full w-full animate-shimmer rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" style={{ backgroundSize: '200% 100%' }} />
        <Phone className="h-8 w-8 transition-transform group-hover:rotate-12" />
        
        {/* Tooltip */}
        <span className="absolute right-20 scale-0 whitespace-nowrap rounded-lg bg-app-secondary px-4 py-2 text-sm text-white transition-all group-hover:scale-100">
          Zavolat hned
        </span>
      </a>
    </div>
  );
};
