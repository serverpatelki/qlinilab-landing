import { Gauge, LineChart, TrendingUp } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const BENEFITS = [
  {
    icon: Gauge,
    title: 'Efisiensi Operasional',
    desc: 'Kurangi pekerjaan administratif berulang dan bangun alur kerja yang lebih terstruktur.',
  },
  {
    icon: LineChart,
    title: 'Visibilitas Lebih Baik',
    desc: 'Tahu apa yang sedang terjadi di laboratorium Anda secara real-time.',
  },
  {
    icon: TrendingUp,
    title: 'Operasional yang Scalable',
    desc: 'Bangun fondasi yang bisa tumbuh seiring berkembangnya laboratorium Anda.',
  },
]

export function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Lebih sedikit kerja manual. Lebih banyak kendali. Visibilitas lebih baik." />
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {BENEFITS.map((b) => (
          <div key={b.title} data-reveal className="reveal rounded-2xl border border-slate-200 p-8">
            <div className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-brand-blue">
              <b.icon size={20} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
