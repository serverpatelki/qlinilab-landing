import logo from '../logo.png'

const COLUMNS = [
  {
    title: 'Produk',
    links: [
      { label: 'Fitur', href: '#produk' },
      { label: 'Platform', href: '#platform' },
      { label: 'Harga', href: '#harga' },
    ],
  },
  {
    title: 'Solusi',
    links: [
      { label: 'Laboratorium Klinik', href: '#solusi' },
      { label: 'Rumah Sakit', href: '#solusi' },
      { label: 'Klinik', href: '#solusi' },
      { label: 'Medical Check-up', href: '#solusi' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Kontak', href: '#kontak' },
      { label: 'Login', href: 'https://dashboard.qlinilab.id' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <img src={logo} alt="QliniLab" className="h-8 w-auto" />
            <p className="mt-4 max-w-[220px] text-sm text-slate-500">
              Satu sistem terhubung untuk alur kerja laboratorium Anda.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-slate-900">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-500 hover:text-slate-900">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 text-sm text-slate-400 sm:flex-row">
          <span>© {new Date().getFullYear()} QliniLab. Semua hak dilindungi.</span>
          <span>qlinilab.id</span>
        </div>
      </div>
    </footer>
  )
}
