import { motion } from 'framer-motion'
import Section from './Section'
import { Ruler, Cpu, Factory, Scan, Printer, Recycle } from 'lucide-react'

const techs = [
  { icon: Scan, title: 'LiDAR Scanning', desc: 'Site capture for exact-fit fabrication and digital twins.' },
  { icon: Cpu, title: 'Digital Modelling', desc: 'Blender-based workflows and parametric detailing.' },
  { icon: Printer, title: 'Large-Scale 3D Printing', desc: 'Up to 1m x 1m volumes, PETG/ASA materials.' },
  { icon: Factory, title: 'Hybrid Systems', desc: 'Panel + rebar armatures for strength with speed.' },
  { icon: Ruler, title: 'Engineering', desc: 'Stamped drawings, public safety, and durability.' },
  { icon: Recycle, title: 'Sustainability', desc: 'Recyclable materials and reduced carbon footprint.' },
]

function Technology() {
  return (
    <Section
      id="technology"
      eyebrow="Technology & Fabrication"
      title="Cutting-Edge Methods. Field-Proven Results."
      subtitle="From LiDAR to large-format 3D printing, we combine digital workflows with master craftsmanship."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techs.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-slate-800/40 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-400/20 text-emerald-300">
                <t.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{t.title}</h3>
                <p className="mt-2 text-slate-300/80">{t.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Technology
