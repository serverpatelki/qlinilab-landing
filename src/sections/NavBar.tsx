import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../logo.png'

const LINKS = [
  { href: '#solusi', label: 'Solusi' },
  { href: '#produk', label: 'Produk' },
  { href: '#platform', label: 'Platform' },
  { href: '#harga', label: 'Harga' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'px-3 pt-3' : 'px-0 pt-0'
      }`}
    >
      <div
        className={`flex w-full items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'max-w-5xl rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-md shadow-slate-900/5'
            : 'max-w-none border-b border-slate-100 bg-white px-6 py-4 sm:px-10'
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="QliniLab" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://dashboard.qlinilab.id"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Login
          </a>
          <a
            href="#kontak"
            className="rounded-xl bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-900/20 transition hover:bg-brand-blue-dark"
          >
            Request Demo
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-3 right-3 top-[calc(100%+4px)] flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://dashboard.qlinilab.id"
            className="rounded-lg px-3 py-2.5 font-semibold text-brand-blue hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
          <a
            href="#kontak"
            className="mt-1 rounded-xl bg-brand-blue px-4 py-3 text-center font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Request Demo
          </a>
        </div>
      )}
    </header>
  )
}
