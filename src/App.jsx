import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} AuraVoice, Inc.</footer>
    </div>
  )
}

export default App
