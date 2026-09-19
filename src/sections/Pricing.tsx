import { CheckCircle2, Clock, RefreshCw, Server, Wallet } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const SCHEMES = [
  {
    name: 'Skema A',
    title: 'Server Cloud Terkelola',
    badge: 'Paling Praktis',
    highlight: true,
    tagline: 'Hosting, keamanan, pencadangan, dan pembaruan — semua kami yang urus.',
    rows: [
      {
        icon: Wallet,
        label: 'Bayar Pertama (Aktivasi)',
        value: 'Rp 15 juta',
        note: 'Implementasi 6 jt + lisensi tahun ke-1 9 jt',
      },
      { icon: RefreshCw, label: 'Tahun Berikutnya', value: 'Rp 11,4 – 15 juta/thn' },
      {
        icon: Server,
        label: 'Infrastruktur',
        value: 'Rp 200rb – 500rb/bln',
        note: 'Sesuai volume pasien',
      },
    ],
    fit: 'Lab yang sudah mapan',
  },
  {
    name: 'Skema B',
    title: 'Server Fisik (On-Premise)',
    badge: 'Server Milik Sendiri',
    highlight: false,
    tagline: 'Server ditempatkan di lokasi lab — cocok kalau data harus di pihak sendiri.',
    rows: [
      {
        icon: Wallet,
        label: 'Bayar Pertama (Aktivasi)',
        value: 'Rp 15 juta + server',
        note: 'Jasa 15 jt (impl+lisensi) + server Rp 20–55 jt (beli sendiri)',
      },
      { icon: RefreshCw, label: 'Tahun Berikutnya', value: 'Rp 12 juta/thn' },
      {
        icon: Server,
        label: 'Infrastruktur',
        value: 'Server fisik milik lab',
        note: 'Sesuai volume pasien',
      },
    ],
    fit: 'Lab yang mau kendali penuh atas server',
  },
  {
    name: 'Skema C',
    title: 'Gratis di Awal, Fee per Pemeriksaan',
    badge: 'Tanpa Biaya di Muka',
    highlight: false,
    tagline: 'Lisensi, infrastruktur & implementasi kami tanggung. Bayar per pemeriksaan.',
    rows: [
      { icon: Wallet, label: 'Bayar Pertama (Aktivasi)', value: 'Rp 0' },
      { icon: RefreshCw, label: 'Berjalan', value: 'Rp 3.000/pemeriksaan' },
      {
        icon: Clock,
        label: 'Minimum & Komitmen',
        value: 'Rp 500rb/bln',
        note: '≈167 pemeriksaan · komitmen 12 bulan',
      },
    ],
    fit: 'Lab baru / tanpa modal',
  },
]

const COMPARE_ROWS: { label: string; values: [string, string, string] }[] = [
  { label: 'Bayar pertama (aktivasi)', values: ['Rp 15 jt', 'Rp 15 jt + server', 'Rp 0'] },
  { label: 'Tahun berikutnya', values: ['Rp 11,4 – 15 jt/thn', 'Rp 12 jt/thn', 'Rp 3.000/pemeriksaan'] },
  { label: 'Infrastruktur', values: ['Cloud, Rp 200–500rb/bln (kami kelola)', 'Server fisik milik lab', 'Cloud (kami tanggung)'] },
  { label: 'Minimum / komitmen', values: ['—', '—', 'Rp 500rb/bln, 12 bulan'] },
  { label: 'Integrasi alat & SatuSehat', values: ['Termasuk', 'Termasuk', 'Termasuk'] },
  { label: 'Biaya pengembangan & update fitur', values: ['Rp 0 (gratis)', 'Rp 0 (gratis)', 'Rp 0 (gratis)'] },
  { label: 'Paling sesuai untuk', values: ['Lab mapan', 'Lab mau server sendiri', 'Lab baru / tanpa modal'] },
]

export function Pricing() {
  return (
    <section id="harga" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Pilih setup yang tepat untuk laboratorium Anda."
          desc={
            <>
              Tiga skema investasi, mulai simpel dan sesuaikan seiring laboratorium bertumbuh. Semua
              skema sudah termasuk integrasi alat analyzer, SatuSehat & BPJS, worklist, dan label
              barcode — fitur dan pembaruan gratis selamanya. Belum termasuk PPN.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SCHEMES.map((s) => (
            <div
              key={s.name}
              data-reveal
              className={`reveal relative flex flex-col rounded-3xl bg-white p-8 ring-1 ${
                s.highlight
                  ? 'shadow-xl shadow-blue-100 ring-brand-blue lg:-translate-y-3'
                  : 'shadow-sm ring-slate-200'
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                  {s.badge}
                </span>
              )}
              {!s.highlight && (
                <span className="inline-block w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {s.badge}
                </span>
              )}

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-blue">{s.name}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.tagline}</p>

              <div className="mt-8 flex-1 space-y-5">
                {s.rows.map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <row.icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{row.label}</p>
                      <p className="text-sm font-semibold text-slate-900">{row.value}</p>
                      {row.note && <p className="mt-0.5 text-xs text-slate-400">{row.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>
                  Cocok untuk <strong>{s.fit}</strong>
                </span>
              </div>

              <a
                href={`https://wa.me/6282175757415?text=${encodeURIComponent(
                  `Halo, saya mau tanya ${s.name} (${s.title}) QliniLab`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 block rounded-xl px-6 py-3 text-center font-semibold transition ${
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

        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900">Bandingkan tiga skema</h3>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-medium text-slate-500">Komponen</th>
                  {SCHEMES.map((s) => (
                    <th
                      key={s.name}
                      className={`px-5 py-4 font-semibold ${s.highlight ? 'text-brand-blue' : 'text-slate-900'}`}
                    >
                      {s.name}
                      <span className="block text-xs font-normal text-slate-500">{s.title}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="px-5 py-4 font-medium text-slate-700">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={`px-5 py-4 ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Implementasi dan migrasi data mungkin dikenakan biaya terpisah tergantung kebutuhan.
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
