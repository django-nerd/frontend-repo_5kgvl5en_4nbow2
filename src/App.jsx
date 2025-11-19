import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Technology from './components/Technology'
import WhyUs from './components/WhyUs'
import Logos from './components/Logos'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-lg font-extrabold tracking-tight">ROC USA</div>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#technology" className="hover:text-white">Technology</a>
            <a href="#why" className="hover:text-white">Why ROC</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">Book a Call</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onCTAClick={scrollTo} />
        <About />
        <Services />
        <Projects />
        <Technology />
        <WhyUs />
        <Logos />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
