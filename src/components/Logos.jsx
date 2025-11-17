const logos = [
  'OpenAI', 'Twilio', 'Zapier', 'Notion', 'Slack', 'Salesforce'
];

export default function Logos() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-slate-500 text-sm mb-6">Integrates with</div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-lg bg-white/70 backdrop-blur border border-white/40 grid place-items-center text-slate-600 text-sm font-medium">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
