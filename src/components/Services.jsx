import { motion } from 'framer-motion'
import Section from './Section'
import { Hammer, Trees, Waves, Wrench, Factory, ScanEye } from 'lucide-react'

const services = [
  {
    title: 'Zoo & Aquarium Habitats',
    desc: 'Naturalistic rockwork, cliffs, caves, waterfalls, tree structures, pools.',
    icon: Waves,
  },
  {
    title: 'Museum & Science Centre Exhibits',
    desc: 'Interactive environments, themed walls, play spaces, immersive storytelling.',
    icon: Factory,
  },
  {
    title: 'Artificial Rockwork & Trees',
    desc: 'Shotcrete, panel systems, epoxy-coated steel structures.',
    icon: Trees,
  },
  {
    title: '3D Printed Habitat Elements',
    desc: 'Coral, fossils, roots, ice caves, modular blocks.',
    icon: Hammer,
  },
  {
    title: 'Turnkey Design-Build',
    desc: 'Concept → Engineering → Fabrication → Installation.',
    icon: Wrench,
  },
  {
    title: 'Exhibit Restoration & Repairs',
    desc: 'Fast response, structural fixes, repainting, refinishing.',
    icon: ScanEye,
  },
]

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Core Services"
      title="Premium Theming. Integrated Engineering."
      subtitle="Hybrid construction and digital fabrication for immersive environments built to endure."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group bg-slate-800/40 border border-white/10 rounded-xl p-6 hover:bg-slate-800/60 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-400/20 text-emerald-300">
                {s.icon && <s.icon className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{s.title}</h3>
                <p className="mt-2 text-slate-300/80">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Services
