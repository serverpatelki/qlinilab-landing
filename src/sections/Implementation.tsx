import { PlayCircle, Rocket, Settings2, Users } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const STEPS = [
  { no: '01', icon: Users, title: 'Discovery', desc: 'Memahami alur kerja laboratorium Anda.' },
  { no: '02', icon: Settings2, title: 'Konfigurasi', desc: 'Setup master data, tes, pengguna, harga, dan alur kerja.' },
  { no: '03', icon: PlayCircle, title: 'Pelatihan', desc: 'Melatih tim laboratorium Anda menggunakan sistem.' },
  { no: '04', icon: Rocket, title: 'Go Live', desc: 'Peluncuran sistem dengan pendampingan penuh.' },
]

export function Implementation() {
  return (
    <section className="bg-slate-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Dari setup hingga go-live, kami dampingi." />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.no} data-reveal className="reveal relative rounded-3xl border border-slate-200 bg-white p-6">
              <span className="text-3xl font-extrabold text-slate-100">{s.no}</span>
              <div className="-mt-6 flex size-11 items-center justify-center rounded-2xl bg-brand-blue text-white">
                <s.icon size={19} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
