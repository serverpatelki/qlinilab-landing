import { Database, Eye, Keyboard, Timer } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const PROBLEMS = [
  {
    icon: Keyboard,
    title: 'Proses Manual',
    desc: 'Input data berulang di banyak tempat memperlambat kerja tim.',
  },
  {
    icon: Eye,
    title: 'Visibilitas Terbatas',
    desc: 'Sulit tahu mana yang masih pending, diproses, atau sudah selesai.',
  },
  {
    icon: Database,
    title: 'Data Terfragmentasi',
    desc: 'Data pasien, pemeriksaan, hasil, dan billing bisa jadi terpisah-pisah.',
  },
  {
    icon: Timer,
    title: 'Bottleneck Operasional',
    desc: 'Tim habiskan waktu melacak pekerjaan, bukan mengerjakannya.',
  },
]

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="Laboratorium Anda kompleks. Sistemnya seharusnya tidak."
        desc="Seiring volume laboratorium bertumbuh, proses manual justru menambah beban kerja, mengurangi visibilitas, dan menciptakan friksi operasional yang tidak perlu."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            data-reveal
            className="reveal group rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 transition group-hover:bg-blue-50 group-hover:text-brand-blue">
              <p.icon size={20} />
            </div>
            <h3 className="mt-4 font-bold text-slate-900">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
