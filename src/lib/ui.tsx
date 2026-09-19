import type { ReactNode } from 'react'

export function SectionHeading({
  title,
  desc,
  align = 'center',
}: {
  title: ReactNode
  desc?: ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div
      data-reveal
      className={`reveal mx-auto max-w-2xl ${align === 'center' ? 'text-center' : 'max-w-xl text-left'}`}
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-[2.5rem] md:leading-[1.15]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{desc}</p>}
    </div>
  )
}
