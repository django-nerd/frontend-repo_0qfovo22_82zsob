import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),rgba(59,130,246,0.12)_35%,rgba(251,191,36,0.08)_55%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            No-code AI Voice Agents
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Build, deploy and scale voice agents without code
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Design natural conversations, connect your data, and go live on phone, web, or apps in minutes. Realistic voices, tools, and analytics included.
          </p>
          <div className="pointer-events-auto flex items-center gap-3 justify-center">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get started free</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 text-slate-800 hover:bg-white transition-colors">See features</a>
          </div>
          <div className="text-xs text-slate-500">No credit card required</div>
        </motion.div>
      </div>
    </section>
  );
}
