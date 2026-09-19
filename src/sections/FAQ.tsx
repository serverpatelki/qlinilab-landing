import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../lib/ui'

const FAQS = [
  {
    q: 'Apa itu QliniLab?',
    a: 'QliniLab adalah Laboratory Information System (LIS) yang menghubungkan alur kerja laboratorium — pendaftaran pasien, order pemeriksaan, spesimen, hasil, hingga pelaporan — dalam satu platform.',
  },
  {
    q: 'Siapa saja yang bisa memakai QliniLab?',
    a: 'Laboratorium klinik, laboratorium rumah sakit, klinik dengan layanan laboratorium, dan penyedia medical check-up.',
  },
  {
    q: 'Apakah QliniLab mendukung multi-cabang?',
    a: 'Ya. QliniLab mendukung operasional multi-cabang, dengan pengaturan skema yang disesuaikan kebutuhan jaringan laboratorium Anda.',
  },
  {
    q: 'Apakah QliniLab bisa terintegrasi dengan sistem lain?',
    a: 'QliniLab dibangun dengan arsitektur yang siap terintegrasi — termasuk alat analyzer (ASTM/HL7), SatuSehat, dan BPJS. Integrasi dengan sistem lain dapat didiskusikan sesuai kebutuhan.',
  },
  {
    q: 'Apakah laporan laboratorium bisa disesuaikan?',
    a: 'Format dan kebutuhan pelaporan dapat didiskusikan bersama tim kami sesuai kebutuhan operasional laboratorium Anda.',
  },
  {
    q: 'Apakah QliniLab berbasis cloud?',
    a: 'QliniLab tersedia dalam skema cloud terkelola maupun on-premise (server fisik di lokasi laboratorium Anda) — lihat bagian Harga untuk detail tiap skema.',
  },
  {
    q: 'Bagaimana proses implementasinya?',
    a: 'Implementasi dimulai dari discovery kebutuhan, konfigurasi master data dan alur kerja, pelatihan tim, hingga pendampingan go-live.',
  },
  {
    q: 'Bagaimana harga dihitung?',
    a: 'Harga mengikuti salah satu dari tiga skema investasi (lihat bagian Harga) yang disesuaikan model operasional laboratorium Anda — cloud terkelola, on-premise, atau tanpa biaya di muka dengan fee per pemeriksaan.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading title="Pertanyaan yang sering diajukan" />
      <div className="mt-12 divide-y divide-slate-200 rounded-3xl border border-slate-200">
        {FAQS.map((f, i) => (
          <div key={f.q} data-reveal className="reveal">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-slate-900">{f.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${open === i ? 'rotate-180 text-brand-blue' : ''}`}
              />
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
