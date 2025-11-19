function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-slate-300">
        <div>
          <div className="text-xl font-extrabold tracking-tight text-slate-100">ROC USA</div>
          <p className="text-slate-400 mt-2 text-sm">U.S. Division of Rockscapes of Canada Inc.</p>
          <p className="text-slate-500 mt-4 text-sm">Address line, City, ST 00000</p>
        </div>
        <div>
          <h4 className="text-slate-100 font-semibold">Contact</h4>
          <p className="mt-2">info@roc-usa.com</p>
          <p className="">(000) 000-0000</p>
          <div className="flex gap-3 mt-3 text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
        <div>
          <h4 className="text-slate-100 font-semibold">Notes</h4>
          <p className="mt-2 text-sm text-slate-400">ROC USA is the U.S. division of Rockscapes of Canada Inc.</p>
        </div>
      </div>
      <div className="text-center py-4 text-slate-500 text-xs">© {new Date().getFullYear()} ROC USA. All rights reserved.</div>
    </footer>
  )
}

export default Footer
