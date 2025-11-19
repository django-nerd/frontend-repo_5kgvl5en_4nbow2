import Section from './Section'

const logos = [
  'St. Louis Zoo',
  'Buffalo Zoo',
  'Toronto Zoo',
  'Calgary Zoo',
  'Louisville Zoo',
  'Museums & Aquariums Across NA'
]

function Logos() {
  return (
    <Section id="logos" eyebrow="Trusted By" title="Partners Across North America">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-slate-400">
        {logos.map(name => (
          <div key={name} className="h-20 flex items-center justify-center rounded-md bg-white/5 border border-white/10 text-center text-sm">
            {name}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Logos
