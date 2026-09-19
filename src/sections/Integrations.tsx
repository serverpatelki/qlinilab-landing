import { Activity, Code2, Cpu, Landmark, ShieldCheck, Smartphone } from 'lucide-react'
import { SectionHeading } from '../lib/ui'
import logoIcon from '../logo.png'

const INTEGRATIONS = [
  { icon: Cpu, label: 'Alat Analyzer', sub: 'ASTM & HL7' },
  { icon: ShieldCheck, label: 'SatuSehat', sub: 'Kemenkes' },
  { icon: Landmark, label: 'BPJS Kesehatan', sub: 'V-Claim / PCare' },
  { icon: Code2, label: 'API', sub: 'REST' },
  { icon: Activity, label: 'HIS / EMR', sub: 'Integration-ready' },
  { icon: Smartphone, label: 'Portal Pasien', sub: 'Integration-ready' },
]

export function Integrations() {
  return (
    <section id="platform" className="bg-slate-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Dibangun untuk terhubung."
          desc="QliniLab dirancang untuk bekerja berdampingan dengan sistem dan alat yang sudah dipakai laboratorium Anda — arsitektur yang siap terintegrasi."
        />

        <div className="relative mt-16 flex flex-col items-center">
          <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/10">
            <img src={logoIcon} alt="QliniLab" className="size-full object-contain" />
          </div>

          <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {INTEGRATIONS.map((it) => (
              <div
                key={it.label}
                data-reveal
                className="reveal flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <it.icon size={20} className="text-brand-blue" />
                <span className="text-xs font-semibold text-slate-800">{it.label}</span>
                <span className="text-[10px] text-slate-400">{it.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
