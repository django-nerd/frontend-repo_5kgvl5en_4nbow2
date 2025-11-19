import { motion } from 'framer-motion'
import Section from './Section'

function About() {
  return (
    <Section
      id="about"
      eyebrow="About ROC USA"
      title="Family Craftsmanship. Advanced Engineering."
      subtitle="Rockscapes of Canada Inc. expands to the U.S. with ROC USA — bringing landmark exhibits, faster mobilization, and the same celebrated artistry."
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-slate-300/90 leading-relaxed">
            We build immersive habitats that respect species needs, delight visitors, and endure decades of public use. Our hybrid approach combines rebar armatures and lightweight panel systems to achieve superior realism with faster schedules and lower weight loads.
          </p>
          <p className="text-slate-300/90 leading-relaxed mt-4">
            From waterfalls and caves to coral reefs and ice formations, our team blends digital fabrication with hand-carved finishes for results that feel natural and perform in demanding environments.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-200/90">
            <li className="bg-white/5 rounded-md px-3 py-2">Major zoos across North America</li>
            <li className="bg-white/5 rounded-md px-3 py-2">Shotcrete & panel systems</li>
            <li className="bg-white/5 rounded-md px-3 py-2">3D scanning & LiDAR workflows</li>
            <li className="bg-white/5 rounded-md px-3 py-2">Large-format 3D printing</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Rockwork" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default About
