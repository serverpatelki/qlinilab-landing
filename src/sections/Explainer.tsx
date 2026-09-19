import { ArrowDown, CheckCircle2, ClipboardList, FlaskConical, ScanLine, TestTube, Users } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const FLOW = [
  { icon: Users, label: 'Pasien' },
  { icon: ClipboardList, label: 'Order' },
  { icon: TestTube, label: 'Spesimen' },
  { icon: FlaskConical, label: 'Pemeriksaan' },
  { icon: ScanLine, label: 'Validasi' },
  { icon: CheckCircle2, label: 'Hasil' },
]

export function Explainer() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div data-reveal className="reveal">
          <SectionHeading
            align="left"
            title="Apa itu Laboratory Information System?"
            desc="Laboratory Information System membantu laboratorium mengelola data pasien, order pemeriksaan, alur spesimen, pengujian, hasil, proses mutu, hingga data operasional — dalam satu lingkungan yang terhubung."
          />
        </div>

        <div data-reveal className="reveal rounded-3xl border border-slate-200 bg-slate-50/60 p-8">
          <div className="flex flex-col items-center gap-1">
            {FLOW.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                  <step.icon size={18} className="text-brand-blue" />
                  <span className="text-sm font-semibold text-slate-800">{step.label}</span>
                </div>
                {i < FLOW.length - 1 && <ArrowDown size={16} className="my-1 text-slate-300" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
