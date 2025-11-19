import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData.entries())
    payload.services = (payload.services || '').split(',').map(s => s.trim()).filter(Boolean)

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks — we\'ll be in touch shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <Section id="contact" eyebrow="Let’s Build Your Next Exhibit" title="Book a Project Call" subtitle="Share your project goals, timeline, and scope. We’ll reply with next steps and availability.">
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="bg-slate-800/40 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400" />
            <input name="email" required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="organization" placeholder="Organization" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400" />
            <input name="phone" placeholder="Phone" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="timeline" placeholder="Timeline" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400" />
            <input name="project_scale" placeholder="Project Scale / Budget" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400" />
          </div>
          <input name="location" placeholder="Location" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400 w-full" />
          <input name="services" placeholder="Requested services (comma separated)" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400 w-full" />
          <textarea name="message" rows="5" placeholder="Project description / RFP details" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-100 placeholder:text-slate-400 w-full" />
          <button type="submit" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors">Send</button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6">
            <h4 className="text-slate-100 font-semibold">Download Our Zoo & Aquarium Capabilities PDF</h4>
            <p className="text-slate-300/80 mt-2">Comprehensive overview of methods, materials, and case studies.</p>
            <a href="#" className="mt-3 inline-block px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white">Download PDF</a>
          </div>
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6">
            <h4 className="text-slate-100 font-semibold">Calendar Booking</h4>
            <p className="text-slate-300/80 mt-2">Embed your Calendly or preferred scheduler here.</p>
            <div className="mt-3 h-40 rounded bg-black/40 flex items-center justify-center text-slate-400">Booking Widget Placeholder</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
