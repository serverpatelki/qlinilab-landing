import { Building2, ExternalLink, Mail, Phone } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const TRACK_RECORD = [
  {
    name: 'SMART PATELKI',
    desc: 'Sistem keanggotaan nasional untuk organisasi profesi laboratorium medik.',
  },
  {
    name: 'Lab DMS',
    desc: 'Document management system laboratorium terakreditasi ISO 15189.',
  },
  {
    name: 'Oculab.ai',
    desc: 'AI pemeriksaan mikroskopis untuk deteksi tuberkulosis.',
  },
  {
    name: 'Kanca',
    desc: 'Partner resmi WhatsApp Business API — omnichannel, CRM, dan commerce.',
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
            desc="QliniLab dikembangkan oleh FM Solution, studio pengembangan sistem informasi & AI yang sudah membangun platform untuk organisasi profesi kesehatan nasional, laboratorium terakreditasi, dan teknologi AI medis — bukan produk baru yang belum teruji konteksnya."
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
            <a
              href="https://linkedin.com/in/fhajar97"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <ExternalLink size={15} className="text-brand-blue" />
              linkedin.com/in/fhajar97
            </a>
          </div>
        </div>

        <div data-reveal className="reveal rounded-2xl border border-slate-200 p-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <Building2 size={16} className="text-brand-blue" />
            Portofolio FM Solution
          </div>
          <div className="mt-5 divide-y divide-slate-100">
            {TRACK_RECORD.map((t) => (
              <div key={t.name} className="py-3.5 first:pt-0 last:pb-0">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="mt-0.5 text-sm text-slate-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
