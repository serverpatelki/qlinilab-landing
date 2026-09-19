export function FinalCTA() {
  return (
    <section id="kontak" className="bg-ink py-28">
      <div data-reveal className="reveal mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-[2.75rem] md:leading-tight">
          Siap modernisasi laboratorium Anda?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Lihat bagaimana QliniLab bisa disesuaikan dengan alur kerja laboratorium Anda.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/6282175757415?text=Halo%2C%20saya%20mau%20request%20demo%20QliniLab"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-ink transition hover:bg-slate-100"
          >
            Request a Demo
          </a>
          <a
            href="https://wa.me/6282175757415"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
