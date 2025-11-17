import { Brain, Phone, BarChart3, Puzzle, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Natural conversations',
    desc: 'LLM-powered flows with memory, tools, and guardrails for reliable outcomes.'
  },
  {
    icon: Phone,
    title: 'Omnichannel',
    desc: 'Go live on phone numbers, web widgets, WhatsApp, or in your app.'
  },
  {
    icon: Puzzle,
    title: 'No-code builder',
    desc: 'Drag-and-drop nodes, knowledge sources, and integrations.'
  },
  {
    icon: Clock,
    title: 'Real-time latency',
    desc: 'Streaming audio with sub-300ms turn-taking for fluid dialogs.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SSO, SOC2-in-progress, audit logs, and role-based access.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & QA',
    desc: 'Transcripts, call recordings, sentiment, and outcome tracking.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to ship voice agents</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">From idea to production in hours. Bring your data, choose a voice, and connect your stack.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 text-white grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
