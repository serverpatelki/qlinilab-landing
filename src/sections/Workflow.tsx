import { CheckCircle2, ClipboardList, FlaskConical, ScanLine, TestTube, UserPlus } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const STEPS = [
  { no: '01', icon: UserPlus, title: 'Registrasi', desc: 'Data pasien terdaftar sekali, terpakai di semua modul.' },
  { no: '02', icon: ClipboardList, title: 'Order', desc: 'Dokter/poli buat order pemeriksaan langsung ke lab.' },
  { no: '03', icon: TestTube, title: 'Ambil Sampel', desc: 'Label barcode tercetak otomatis per jenis sampel.' },
  { no: '04', icon: FlaskConical, title: 'Pemeriksaan', desc: 'Hasil dari alat analyzer masuk otomatis ke sistem.' },
  { no: '05', icon: ScanLine, title: 'Validasi', desc: 'Alur validasi berlapis dengan nilai rujukan otomatis.' },
  { no: '06', icon: CheckCircle2, title: 'Hasil', desc: 'Rilis hasil, cetak laporan, sinkron SatuSehat & BPJS.' },
]

export function Workflow() {
  return (
    <section className="bg-slate-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Satu alur. Dari pasien sampai hasil."
          desc="QliniLab menghubungkan tiap tahap perjalanan laboratorium supaya tim Anda bekerja dengan visibilitas dan konsistensi yang lebih baik."
        />

        <div className="mt-16 hidden lg:block">
          <div className="relative grid grid-cols-6 gap-4">
            <div className="absolute left-0 right-0 top-6 h-px bg-slate-200" />
            {STEPS.map((s) => (
              <div key={s.no} data-reveal className="reveal relative flex flex-col items-center text-center">
                <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-blue shadow-sm">
                  <s.icon size={20} />
                </div>
                <span className="mt-4 text-xs font-bold text-cyan-600">{s.no}</span>
                <h3 className="mt-1 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-4 lg:hidden">
          {STEPS.map((s) => (
            <div
              key={s.no}
              data-reveal
              className="reveal flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                <s.icon size={19} />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-600">{s.no}</span>
                <h3 className="font-bold text-slate-900">{s.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
