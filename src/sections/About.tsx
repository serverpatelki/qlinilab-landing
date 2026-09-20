import { CheckCircle2, Mail, Phone } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const COMMITMENTS = [
  {
    title: 'Sesuai regulasi',
    desc: 'Dibangun mengikuti Permenkes 82/2013, KMK 1423/2022, dan PMK 24/2022 (RME).',
  },
  {
    title: 'Teruji di lingkungan produksi',
    desc: 'Berjalan langsung dengan integrasi SatuSehat dan BPJS, bukan sekadar demo.',
  },
  {
    title: 'Harga transparan',
    desc: 'Tiga skema jelas di muka — tanpa negosiasi tertutup atau biaya tersembunyi.',
  },
]

export function About() {
  return (
    <section id="tentang-kami" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div data-reveal className="reveal">
          <SectionHeading
            align="left"
            title="Dibangun oleh tim yang paham operasional kesehatan."
            desc="QliniLab dikembangkan langsung mengikuti alur kerja laboratorium sungguhan dan standar regulasi Kemenkes — bukan produk yang dipaksakan cocok untuk konteks kesehatan setelahnya."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/6282175757415"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Phone size={15} className="text-brand-blue" />
              0821-7575-7415
            </a>
            <a
              href="mailto:fhajarm@gmail.com"
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Mail size={15} className="text-brand-blue" />
              fhajarm@gmail.com
            </a>
          </div>
        </div>

        <div data-reveal className="reveal rounded-2xl border border-slate-200 p-8">
          <p className="text-sm font-semibold text-slate-500">Komitmen Kami</p>
          <div className="mt-5 space-y-5">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                <div>
                  <p className="font-semibold text-slate-900">{c.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
