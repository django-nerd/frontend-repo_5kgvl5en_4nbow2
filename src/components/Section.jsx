import { motion } from 'framer-motion'

function Section({ id, eyebrow, title, subtitle, children, dark=false }) {
  return (
    <section id={id} className={(dark ? 'bg-slate-950' : 'bg-slate-900') + ' relative py-20 md:py-28'}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_60%)]" />
      <div className="container mx-auto px-6 relative">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14"
          >
            {eyebrow && (
              <div className="text-sm tracking-widest uppercase text-emerald-300/70 mb-3">{eyebrow}</div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 leading-tight">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-3xl text-slate-300/80 text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
