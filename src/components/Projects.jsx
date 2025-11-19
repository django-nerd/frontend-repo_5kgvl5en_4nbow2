import { motion } from 'framer-motion'
import Section from './Section'

const projects = [
  {
    title: 'Prairie Dog Habitat',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1600&auto=format&fit=crop',
    scope: 'Excavation, rebar armatures, shotcrete, artificial burrow network',
  },
  {
    title: 'Otter Exhibit',
    image: 'https://images.unsplash.com/photo-1600425830683-95c1e2222f51?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdHRlciUyMEV4aGliaXR8ZW58MHwwfHx8MTc2MzU1MTkwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    scope: 'Pool basins, rockwork, underwater viewing windows, themed finishes',
  },
  {
    title: 'Flamingo Lagoon',
    image: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop',
    scope: 'Island rockwork, nesting zones, shallow lagoons, filtration integration',
  },
  {
    title: 'Museum Rockwork & Play Zones',
    image: 'https://images.unsplash.com/photo-1731166462251-6b155f56ddfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNdXNldW0lMjBSb2Nrd29yayUyMCUyNiUyMFBsYXklMjBab25lc3xlbnwwfDB8fHwxNzYzNTUxOTA4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    scope: 'Climbing formations, themed walls, interactive zones',
  },
  {
    title: 'Aquarium Rock Formations',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1600&auto=format&fit=crop',
    scope: 'Lightweight panels, coral inserts, waterproof finishes',
  },
]

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="High-Impact Exhibits"
      subtitle="A selection of habitats and exhibits delivered across North America."
      dark
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl bg-slate-800/40 border border-white/10"
          >
            <img src={p.image} alt={p.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl font-bold text-slate-100">{p.title}</h3>
              <p className="text-slate-300/80 mt-1">{p.scope}</p>
              <span className="inline-block mt-3 text-emerald-300/90 font-semibold">View details →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

export default Projects
