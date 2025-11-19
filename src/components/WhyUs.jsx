import { motion } from 'framer-motion'
import Section from './Section'
import { Clock, CheckCircle2, Trees, Shield, Users, Globe, BadgeDollarSign, Leaf } from 'lucide-react'

const reasons = [
  { icon: Clock, title: 'Faster U.S. Mobilization', desc: 'Stateside operations to start sooner and deliver on schedule.' },
  { icon: Globe, title: 'Proven North American Experience', desc: 'Trusted by leading zoos and museums across the continent.' },
  { icon: Trees, title: 'High Realism Artistry', desc: 'Multi-generational craftsmanship for naturalistic environments.' },
  { icon: Shield, title: 'Structural Engineering', desc: 'Robust public-safe builds engineered for the long term.' },
  { icon: Users, title: 'Specialized Teams', desc: 'Experts in zoo, aquarium, and museum theming.' },
  { icon: CheckCircle2, title: 'Safety & Durability', desc: 'Non-toxic finishes, abrasion resistance, and lifecycle planning.' },
  { icon: BadgeDollarSign, title: 'Cost-Effective', desc: 'Hybrid systems save time and cost vs. shotcrete-only builds.' },
  { icon: Leaf, title: 'Environmentally Conscious', desc: 'Recyclable materials and waste reduction practices.' },
]

function WhyUs() {
  return (
    <Section id="why" eyebrow="Why ROC USA" title="Precision. Speed. Realism." subtitle="Design-build partners delivering premium outcomes with accountable budgets.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="bg-slate-800/40 border border-white/10 rounded-xl p-6"
          >
            <div className="p-2 rounded-lg bg-emerald-400/20 text-emerald-300 w-fit mb-3">
              <r.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{r.title}</h3>
            <p className="text-slate-300/80 mt-1">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default WhyUs
