import {
  BarChart3,
  FileBarChart,
  FlaskConical,
  ShieldCheck,
  Users2,
  Wallet,
  ClipboardCheck,
  UserCog,
} from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const PRODUCTS = [
  {
    icon: Users2,
    title: 'Patient Management',
    desc: 'Kelola profil pasien, riwayat kunjungan, dan rekam laboratorium dari satu sistem terpusat.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Workflow',
    desc: 'Lacak order dan alur spesimen laboratorium dari pendaftaran sampai selesai.',
  },
  {
    icon: ClipboardCheck,
    title: 'Result Management',
    desc: 'Input, review, validasi, dan rilis hasil laboratorium lewat alur kerja terstruktur.',
  },
  {
    icon: Wallet,
    title: 'Billing & Pricing',
    desc: 'Kelola tarif pemeriksaan, paket, konfigurasi billing, dan data transaksi.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Dukung konsistensi proses laboratorium lewat alur QC dan PME yang terstruktur.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Dashboard',
    desc: 'Pahami performa operasional harian lewat dashboard dan metrik real-time.',
  },
  {
    icon: FileBarChart,
    title: 'Reporting',
    desc: 'Hasilkan laporan laboratorium dan laporan operasional yang terstandarisasi.',
  },
  {
    icon: UserCog,
    title: 'User & Role Management',
    desc: 'Kontrol akses berdasarkan tanggung jawab, peran, dan izin masing-masing staf.',
  },
]

export function Products() {
  return (
    <section id="produk" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Semua yang dibutuhkan laboratorium Anda." />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <div
            key={p.title}
            data-reveal
            className="reveal group rounded-3xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
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
