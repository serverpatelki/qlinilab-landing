import { Activity, DatabaseBackup, KeyRound, ScrollText, ServerCog, UserCheck } from 'lucide-react'
import { SectionHeading } from '../lib/ui'

const ITEMS = [
  { icon: UserCheck, title: 'Role-based Access', desc: 'Akses diatur berdasarkan peran dan tanggung jawab tiap staf.' },
  { icon: ScrollText, title: 'Auditability', desc: 'Setiap perubahan data tercatat dalam audit trail yang immutable.' },
  { icon: DatabaseBackup, title: 'Data Backup', desc: 'Pencadangan data laboratorium secara berkala.' },
  { icon: KeyRound, title: 'Secure Authentication', desc: 'Autentikasi berbasis sesi dengan praktik keamanan modern.' },
  { icon: Activity, title: 'Operational Monitoring', desc: 'Status alat dan layanan dipantau untuk deteksi gangguan lebih awal.' },
  { icon: ServerCog, title: 'System Availability', desc: 'Infrastruktur dirancang untuk operasional laboratorium sehari-hari.' },
]

export function Security() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          title={<span className="text-white">Dibangun untuk operasional layanan kesehatan.</span>}
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              data-reveal
              className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <it.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
