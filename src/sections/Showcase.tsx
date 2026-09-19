import { CheckCircle2, CircleDot, Clock3, FileCheck2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { SectionHeading } from '../lib/ui'

function ShowcaseRow({
  title,
  desc,
  visual,
  reverse,
}: {
  title: string
  desc: string
  visual: ReactNode
  reverse?: boolean
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div data-reveal className="reveal">
        <SectionHeading align="left" title={title} desc={desc} />
      </div>
      <div data-reveal className="reveal">
        {visual}
      </div>
    </div>
  )
}

function OverviewVisual() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Volume Pasien', value: '248' },
          { label: 'Tes Aktif', value: '1.284' },
          { label: 'Pending', value: '32' },
          { label: 'TAT', value: '94,2%' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-100 p-4">
            <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-14 items-end gap-1.5 rounded-xl border border-slate-100 p-3">
        {[30, 45, 40, 60, 52, 70, 64, 78].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm bg-brand-blue/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

function WorkflowVisual() {
  const rows = [
    { label: 'Order #2026-142', stage: 'Sampel diambil', icon: CircleDot },
    { label: 'Order #2026-143', stage: 'Diperiksa', icon: Clock3 },
    { label: 'Order #2026-144', stage: 'Validasi', icon: FileCheck2 },
    { label: 'Order #2026-145', stage: 'Selesai', icon: CheckCircle2 },
  ]
  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
          <span className="text-sm font-medium text-slate-700">{r.label}</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <r.icon size={14} />
            {r.stage}
          </span>
        </div>
      ))}
    </div>
  )
}

function ValidationVisual() {
  const rows = [
    { test: 'Glukosa Puasa', value: '92 mg/dL', flag: 'Normal', critical: false },
    { test: 'HbA1c', value: '7.8 %', flag: 'Tinggi', critical: false },
    { test: 'Kreatinin', value: '3.4 mg/dL', flag: 'Kritis', critical: true },
  ]
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold text-slate-500">Validasi Hasil — Order #2026-144</p>
      <div className="mt-3 divide-y divide-slate-100">
        {rows.map((r) => (
          <div key={r.test} className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">{r.test}</p>
              <p className="text-xs text-slate-500">{r.value}</p>
            </div>
            <span className={`text-xs font-semibold ${r.critical ? 'text-red-600' : 'text-slate-500'}`}>
              {r.flag}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full rounded-xl bg-brand-blue py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark">
        Validasi & Rilis Hasil
      </button>
    </div>
  )
}

export function Showcase() {
  return (
    <section className="mx-auto max-w-6xl space-y-28 px-6 py-24">
      <ShowcaseRow
        title="Lihat laboratorium Anda sekilas."
        desc="Pantau volume pasien, aktivitas pemeriksaan, pekerjaan pending, turnaround time, dan performa operasional dari dashboard terpusat."
        visual={<OverviewVisual />}
      />
      <ShowcaseRow
        title="Dari registrasi ke hasil tanpa kehilangan visibilitas."
        desc="Lacak setiap tahap alur kerja laboratorium dalam satu lingkungan yang terhubung."
        visual={<WorkflowVisual />}
        reverse
      />
      <ShowcaseRow
        title="Hasil yang bisa dipercaya tim Anda."
        desc="Buat proses terstruktur untuk mereview, memvalidasi, dan merilis hasil laboratorium."
        visual={<ValidationVisual />}
      />
    </section>
  )
}
