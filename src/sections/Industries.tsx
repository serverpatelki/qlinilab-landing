import { ArrowUpRight, Building2, HeartPulse, Microscope, Stethoscope } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const INDUSTRIES = [
  { icon: Microscope, title: 'Laboratorium Klinik', desc: 'Lab mandiri yang melayani rujukan dari berbagai faskes.' },
  { icon: Building2, title: 'Laboratorium Rumah Sakit', desc: 'Terintegrasi dengan alur rawat jalan, IGD, dan rawat inap.' },
  { icon: Stethoscope, title: 'Laboratorium Klinik Kecil', desc: 'Klinik dengan layanan laboratorium penunjang diagnosa.' },
  { icon: HeartPulse, title: 'Medical Check-up', desc: 'Volume tinggi, banyak paket pemeriksaan, turnaround cepat.' },
]

export function Industries() {
  return (
    <section id="solusi" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Dirancang untuk setiap jenis operasional laboratorium." />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((it) => (
          <div
            key={it.title}
            data-reveal
            className="reveal group flex flex-col rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
              <it.icon size={20} />
            </div>
            <h3 className="mt-4 font-bold text-slate-900">{it.title}</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{it.desc}</p>
            <a
              href="#kontak"
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue opacity-0 transition group-hover:opacity-100"
            >
              Pelajari lebih lanjut <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
