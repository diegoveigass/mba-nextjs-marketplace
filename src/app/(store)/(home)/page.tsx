import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[760px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group col-span-6 relative row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
          src="/moletom-ai-side.png"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-24 right-24 h-12 flex items-center gap-2 max-w-[350px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate flex-1">Moletom AI Side1</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
          src="/moletom-never-stop-learning.png"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[350px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate flex-1">Moletom AI Side1</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
          src="/moletom-ia-p-devs.png"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[350px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate flex-1">Moletom AI Side1</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  )
}
