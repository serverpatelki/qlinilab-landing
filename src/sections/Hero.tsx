import { AlertTriangle, ArrowRight, CheckCircle2, Circle, CircleDashed, Clock, FlaskConical, Users } from 'lucide-react'
import { CountUp } from '../lib/CountUp'

const RECENT_ORDERS = [
  { name: 'CBC (Darah Lengkap)', status: 'Selesai' as const },
  { name: 'Glukosa Puasa', status: 'Diproses' as const },
  { name: 'Profil Lipid', status: 'Validasi' as const },
  { name: 'Urinalisis', status: 'Selesai' as const },
]

const STATUS_ICON = {
  Selesai: CheckCircle2,
  Diproses: CircleDashed,
  Validasi: Circle,
}

const CHART_BARS = [38, 52, 46, 64, 58, 72, 66, 80, 74, 88]

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5">
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="ml-3 rounded-md bg-slate-50 px-3 py-1 text-xs text-slate-400">
            dashboard.qlinilab.id
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Pasien Hari Ini', value: 248, icon: Users },
              { label: 'Order Laboratorium', value: 1284, icon: FlaskConical },
              { label: 'Pending', value: 32, icon: Clock },
              { label: 'Nilai Kritis', value: 7, icon: AlertTriangle, danger: true },
            ].map((s) => (
              <div key={s.label} className={`rounded-xl border p-3.5 ${s.danger ? 'border-red-200 bg-red-50' : 'border-slate-100'}`}>
                <s.icon size={15} className={s.danger ? 'text-red-500' : 'text-slate-400'} />
                <p className={`mt-2 text-xl font-extrabold ${s.danger ? 'text-red-700' : 'text-slate-900'}`}>
                  <CountUp to={s.value} />
                </p>
                <p className="text-[11px] leading-tight text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-100 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">Aktivitas Pemeriksaan · 10 hari terakhir</p>
              <span className="text-xs font-semibold text-slate-900">TAT 94,2%</span>
            </div>
            <div className="mt-3 flex h-16 items-end gap-1.5">
              {CHART_BARS.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-brand-blue/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold text-slate-500">Order Laboratorium Terbaru</p>
            <div className="divide-y divide-slate-100">
              {RECENT_ORDERS.map((o) => {
                const Icon = STATUS_ICON[o.status]
                return (
                  <div key={o.name} className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-700">{o.name}</span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Icon size={13} />
                      {o.status}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-5 -top-5 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-md shadow-slate-900/5 sm:flex">
        <CheckCircle2 size={18} className="text-brand-blue" />
        <div>
          <p className="text-xs font-semibold text-slate-900">Hasil tervalidasi</p>
          <p className="text-[11px] text-slate-400">2 detik lalu</p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400 sm:hidden">
        Ilustrasi tampilan — data contoh, bukan data pasien sungguhan.
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="bg-white pt-14 pb-16 sm:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div data-reveal className="reveal">
          <p className="text-sm font-semibold text-brand-blue">Laboratory Information System</p>
          <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Laboratorium Anda.
            <br />
            Satu Sistem Terhubung.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            QliniLab menghubungkan alur kerja laboratorium Anda — dari pendaftaran pasien hingga
            hasil tervalidasi — dalam satu platform modern.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontak"
              className="group flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 text-center font-semibold text-white transition hover:bg-brand-blue-dark"
            >
              Request Demo
              <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#produk"
              className="flex items-center justify-center rounded-xl border border-slate-200 px-7 py-3.5 text-center font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Explore Platform
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Dibangun untuk operasional laboratorium modern.</p>
        </div>

        <div data-reveal className="reveal">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
