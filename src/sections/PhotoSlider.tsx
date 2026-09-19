import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AUTOPLAY_MS = 4800

type Slide = {
  photo: string
  caption: string
  alt: string
}

const SLIDES: Slide[] = [
  {
    photo: 'photo-1614935151651-0bea6508db6b',
    caption: 'Preanalitik yang terkendali',
    alt: 'Analis laboratorium bersarung tangan biru memindahkan sampel dengan mikropipet ke dalam rak tabung',
  },
  {
    photo: 'photo-1639772823849-6efbd173043c',
    caption: 'Sampel terlacak sejak awal',
    alt: 'Tangan bersarung tangan mengambil tabung darah berlabel barcode dari rak sampel laboratorium',
  },
  {
    photo: 'photo-1669344319217-19810a5e3d3b',
    caption: 'Alat terhubung ke satu sistem',
    alt: 'Ruang laboratorium modern yang bersih dengan analyzer dan instrumen di atas meja kerja',
  },
  {
    photo: 'photo-1606206591513-adbfbdd7a177',
    caption: 'Volume besar tetap rapi',
    alt: 'Deretan tabung sampel darah dengan tutup berwarna tersusun rapi di rak laboratorium',
  },
  {
    photo: 'photo-1639772823907-a716be4bdecc',
    caption: 'Pemeriksaan mikroskopis',
    alt: 'Petugas laboratorium mengoperasikan mikroskop untuk memeriksa sediaan',
  },
  {
    photo: 'photo-1581093577421-f561a654a353',
    caption: 'Hasil tervalidasi lebih cepat',
    alt: 'Analis berjas putih bekerja di meja laboratorium dengan layar komputer untuk memvalidasi hasil',
  },
]

function imgSrc(photo: string, w: number) {
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${w}&h=${Math.round((w * 9) / 16)}&q=80`
}

export function PhotoSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS)
    return () => window.clearTimeout(t)
  }, [index, paused, reduced])

  const go = (n: number) => setIndex((n + SLIDES.length) % SLIDES.length)

  return (
    <section className="relative -mt-6 bg-white pb-20 sm:-mt-8 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="reveal relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-5 -bottom-5 top-10 -z-10 rounded-[44px] bg-gradient-to-r from-brand-blue/15 via-cyan-300/25 to-brand-blue/10 blur-2xl"
          />

          <div className="rounded-[32px] bg-white/70 p-2 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-200/80 backdrop-blur-sm sm:p-2.5">
            <div className="rounded-[24px] bg-gradient-to-br from-brand-blue/45 via-cyan-300/70 to-brand-blue/25 p-[2px]">
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label="Galeri suasana laboratorium"
                className="group relative overflow-hidden rounded-[22px] bg-slate-900"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
                  {SLIDES.map((s, i) => (
                    <img
                      key={s.photo}
                      src={imgSrc(s.photo, 1600)}
                      srcSet={`${imgSrc(s.photo, 900)} 900w, ${imgSrc(s.photo, 1600)} 1600w`}
                      sizes="(max-width: 1024px) 100vw, 1100px"
                      alt={s.alt}
                      aria-hidden={i !== index}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable={false}
                      className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-out ${
                        i === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}

                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-blue/40 via-transparent to-cyan-300/25 mix-blend-multiply"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/15"
                  />

                  <button
                    type="button"
                    aria-label="Foto sebelumnya"
                    onClick={() => go(index - 1)}
                    className="absolute left-4 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25 focus-visible:opacity-100 group-hover:opacity-100 sm:flex"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Foto berikutnya"
                    onClick={() => go(index + 1)}
                    className="absolute right-4 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25 focus-visible:opacity-100 group-hover:opacity-100 sm:flex"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
                    <div className="min-w-0">
                      <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90 ring-1 ring-white/25 backdrop-blur">
                        Alur kerja laboratorium
                      </span>
                      <p className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">
                        {SLIDES[index].caption}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {SLIDES.map((s, i) => (
                        <button
                          key={s.photo}
                          type="button"
                          onClick={() => setIndex(i)}
                          aria-label={`Tampilkan foto ${i + 1} dari ${SLIDES.length}`}
                          aria-current={i === index}
                          className={`h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-300 ${
                            i === index ? 'w-10' : 'w-4 hover:bg-white/60'
                          }`}
                        >
                          {i === index &&
                            (reduced ? (
                              <span className="block size-full rounded-full bg-white" />
                            ) : (
                              <span
                                key={index}
                                className="slider-progress block h-full rounded-full bg-white"
                                style={{
                                  animationDuration: `${AUTOPLAY_MS}ms`,
                                  animationPlayState: paused ? 'paused' : 'running',
                                }}
                              />
                            ))}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
