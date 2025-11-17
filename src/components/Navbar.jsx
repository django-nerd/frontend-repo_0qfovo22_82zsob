import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 grid place-items-center text-white shadow-lg shadow-purple-500/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">AuraVoice</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-slate-900 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900">Sign in</a>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Get started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-slate-200"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white/80 backdrop-blur">
          {navItems.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {n.label}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <a href="#" className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-center">Sign in</a>
            <a href="#pricing" className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white text-center">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}
