export default function CTA() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold">Launch your first agent today</h3>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">Start free, upgrade when you scale. Includes voices, telephony, and analytics.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-white/90">Start free</a>
            <a href="#" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10">Book a demo</a>
          </div>
          <div className="text-xs text-white/60 mt-3">14-day trial • No credit card</div>
        </div>
      </div>
    </section>
  )
}
