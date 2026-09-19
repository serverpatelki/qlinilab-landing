const CATEGORIES = ['Laboratorium Klinik', 'Rumah Sakit', 'Klinik', 'Medical Check-up', 'Diagnostic Center']

export function Trust() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p data-reveal className="reveal text-center text-sm font-medium text-slate-500">
          Dirancang untuk laboratorium yang ingin kendali lebih penuh
        </p>
        <div
          data-reveal
          className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {CATEGORIES.map((c) => (
            <span key={c} className="text-lg font-bold tracking-tight text-slate-300">
              {c}
            </span>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">
          Dirancang mengikuti alur kerja laboratorium sungguhan.
        </p>
      </div>
    </section>
  )
}
