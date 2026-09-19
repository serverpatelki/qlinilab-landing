import {
  Activity,
  AlertTriangle,
  Barcode,
  Check,
  FileCheck2,
  Menu,
  Plug,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useState } from 'react'
import logo from './logo.png'

const WORKLIST_ROWS = [
  { noLab: '2026090142', pasien: 'Budi Santoso', sampel: 'Darah', status: 'Selesai' as const },
  { noLab: '2026090143', pasien: 'Ani Lestari', sampel: 'Urin', status: 'Diproses' as const },
  { noLab: '2026090144', pasien: 'Rudi Hartono', sampel: 'Darah', status: 'Selesai' as const },
  { noLab: '2026090145', pasien: 'Dewi Anggraini', sampel: 'Darah', status: 'Kritis' as const },
  { noLab: '2026090146', pasien: 'Joko Prasetyo', sampel: 'Serum', status: 'Diproses' as const },
]

const STATUS_STYLE = {
  Selesai: 'bg-emerald-50 text-emerald-700',
  Diproses: 'bg-blue-50 text-blue-700',
  Kritis: 'bg-red-50 text-red-700',
}

function DashboardMockup() {
  return (
    <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl shadow-slate-300/40">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 rounded-md bg-white px-3 py-1 text-xs text-slate-400 border border-slate-200">
          dashboard.qlinilab.id/worklist
        </span>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Sampel Hari Ini</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">128</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Menunggu Validasi</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">14</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="flex items-center gap-1 text-xs text-red-600">
              <AlertTriangle size={12} /> Nilai Kritis
            </p>
            <p className="mt-1 text-2xl font-bold text-red-700">2</p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2 font-medium">No. Lab</th>
                <th className="px-4 py-2 font-medium">Pasien</th>
                <th className="px-4 py-2 font-medium">Sampel</th>
                <th className="px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {WORKLIST_ROWS.map((row) => (
                <tr key={row.noLab}>
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-500">{row.noLab}</td>
                  <td className="px-4 py-2.5 text-slate-800">{row.pasien}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.sampel}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLE[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          Ilustrasi tampilan — data contoh, bukan data pasien sungguhan.
        </p>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    icon: Activity,
    title: 'Worklist otomatis',
    desc: 'Order dari poli/IGD langsung masuk worklist lab, terpecah per jenis sampel — tanpa entri ulang manual.',
  },
  {
    icon: Plug,
    title: 'Integrasi alat analyzer',
    desc: 'Koneksi langsung ke alat kimia, hematologi, dan imunoserologi lewat ASTM & HL7 — hasil masuk otomatis ke sistem.',
  },
  {
    icon: Barcode,
    title: 'Label & barcode sample',
    desc: 'Cetak label barcode per tabung dari gateway lokal, terhubung ke printer thermal yang sudah ada di lab.',
  },
  {
    icon: FileCheck2,
    title: 'Validasi & hasil kritis',
    desc: 'Alur validasi berlapis dengan nilai rujukan otomatis, notifikasi nilai kritis, dan riwayat validator/releaser.',
  },
  {
    icon: ShieldCheck,
    title: 'SatuSehat & BPJS',
    desc: 'Terintegrasi dengan SatuSehat dan klaim BPJS, mengikuti standar interoperabilitas Kemenkes.',
  },
]

function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <img src={logo} alt="QliniLab" className="h-9 w-auto" />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#fitur" className="hover:text-slate-900">
            Fitur
          </a>
          <a href="#harga" className="hover:text-slate-900">
            Harga
          </a>
          <a href="#kontak" className="hover:text-slate-900">
            Kontak
          </a>
        </nav>
        <a
          href="#kontak"
          className="hidden rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark md:inline-block"
        >
          Minta Demo
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-3 md:hidden">
          <a href="#fitur" className="py-2 text-slate-700" onClick={() => setOpen(false)}>
            Fitur
          </a>
          <a href="#harga" className="py-2 text-slate-700" onClick={() => setOpen(false)}>
            Harga
          </a>
          <a href="#kontak" className="py-2 text-slate-700" onClick={() => setOpen(false)}>
            Kontak
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-brand-blue">
          Sistem Informasi Laboratorium
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Kelola lab klinik Anda, dari order sampai hasil, dalam satu sistem
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          QliniLab menghubungkan pendaftaran, alat analyzer, validasi hasil, hingga
          pelaporan SatuSehat & BPJS — dirancang mengikuti alur kerja lab rumah sakit
          Indonesia.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#kontak"
            className="w-full rounded-lg bg-brand-blue px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-blue-dark sm:w-auto"
          >
            Minta Demo
          </a>
          <a
            href="#fitur"
            className="w-full rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
          >
            Lihat Fitur
          </a>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">Dibangun untuk alur kerja lab</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Setiap modul mengikuti konvensi lab RS Indonesia yang sudah dikenal staf,
          dengan tampilan yang lebih modern.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-slate-200 p-6 transition hover:border-brand-blue/40 hover:shadow-sm"
          >
            <div className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const SCHEMES = [
  {
    name: 'Skema A',
    title: 'Server Cloud Terkelola',
    badge: 'Paling Praktis',
    highlight: true,
    tagline:
      'Server dikelola penuh oleh kami — hosting, keamanan, pencadangan, dan pembaruan. Lab cukup terhubung internet.',
    rows: [
      { label: 'Bayar pertama (aktivasi)', value: 'Rp 15 jt' },
      { label: '— rincian', value: 'Implementasi 6 jt + lisensi th-1 9 jt' },
      { label: 'Tahun berikutnya', value: 'Rp 11,4 – 15 jt/thn' },
      { label: 'Infrastruktur', value: 'Rp 200rb – 500rb/bln (sesuai volume)' },
    ],
    fit: 'Lab yang sudah mapan',
  },
  {
    name: 'Skema B',
    title: 'Server Fisik (On-Premise)',
    badge: 'Server Milik Sendiri',
    highlight: false,
    tagline:
      'Server ditempatkan di lokasi lab. Cocok kalau data harus disimpan di pihak sendiri.',
    rows: [
      { label: 'Bayar pertama (aktivasi)', value: 'Rp 15 jt + server' },
      { label: '— rincian', value: 'Jasa 15 jt (impl+lisensi) + server Rp 20–55 jt (beli sendiri)' },
      { label: 'Tahun berikutnya', value: 'Rp 12 jt/thn' },
      { label: 'Infrastruktur', value: 'Server fisik milik lab, sesuai volume' },
    ],
    fit: 'Lab yang mau kendali penuh atas server',
  },
  {
    name: 'Skema C',
    title: 'Gratis di Awal, Fee per Pemeriksaan',
    badge: 'Tanpa Biaya di Muka',
    highlight: false,
    tagline:
      'Lisensi, infrastruktur, dan implementasi ditanggung penuh oleh kami. Kami hanya menarik fee dari tiap pemeriksaan.',
    rows: [
      { label: 'Bayar pertama (aktivasi)', value: 'Rp 0' },
      { label: 'Berjalan', value: 'Rp 3.000/pemeriksaan' },
      { label: 'Minimum per bulan', value: 'Rp 500rb (≈167 pemeriksaan)' },
      { label: 'Masa komitmen', value: '12 bulan' },
    ],
    fit: 'Lab baru / tanpa modal',
  },
]

function Pricing() {
  return (
    <section id="harga" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Harga</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Tiga skema investasi, pilih yang paling cocok dengan lab Anda. Belum termasuk PPN.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-center text-sm text-emerald-800">
          Semua skema sudah termasuk integrasi alat analyzer, SatuSehat & BPJS, worklist, dan
          label barcode — <strong>fitur & pembaruan gratis selamanya</strong>, tanpa biaya
          development.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SCHEMES.map((s) => (
            <div
              key={s.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                s.highlight ? 'border-brand-blue shadow-lg shadow-blue-100' : 'border-slate-200'
              }`}
            >
              <span
                className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold whitespace-nowrap ${
                  s.highlight ? 'bg-brand-blue text-white' : 'bg-slate-700 text-white'
                }`}
              >
                {s.badge}
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {s.name}
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.tagline}</p>

              <div className="mt-6 flex-1 space-y-3 border-y border-slate-100 py-5">
                {s.rows.map((row) => (
                  <div key={row.label} className="flex flex-col gap-0.5">
                    <span className="text-xs text-slate-500">{row.label}</span>
                    <span className="text-sm font-semibold text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 flex items-start gap-2 text-sm text-slate-700">
                <Check size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>Cocok untuk: {s.fit}</span>
              </p>

              <a
                href={`https://wa.me/6282175757415?text=${encodeURIComponent(
                  `Halo, saya mau tanya ${s.name} (${s.title}) QliniLab`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 block rounded-lg px-6 py-3 text-center font-semibold transition ${
                  s.highlight
                    ? 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                    : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Chat via WhatsApp
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Harga belum termasuk PPN, langganan tahunan dibayar di muka.{' '}
          <a href="#kontak" className="font-medium text-brand-blue hover:underline">
            Hubungi tim kami
          </a>{' '}
          buat konsultasi skema yang paling cocok.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="kontak" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Siap coba QliniLab?</h2>
      <p className="mt-3 text-slate-600">
        Ceritakan kebutuhan lab Anda, tim kami akan bantu setup demo.
      </p>
      <a
        href="https://wa.me/6282175757415"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-lg bg-brand-blue px-8 py-3 font-semibold text-white transition hover:bg-brand-blue-dark"
      >
        Chat via WhatsApp
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
        <span>© {new Date().getFullYear()} QliniLab. Semua hak dilindungi.</span>
        <span>qlinilab.id</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
