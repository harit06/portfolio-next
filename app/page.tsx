import { Danfo } from "next/font/google"

const danfo = Danfo({ subsets: ["latin"] })

export default function Home() {
  return (
    <div
      className={`flex flex-col-reverse w-full h-screen text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl ${danfo.className} tracking-widest pb-30 pl-10 `}
    >
      <div className="uppercase">Hariharasudhan</div>
      <div className="uppercase">Thirumurthy</div>
    </div>
  )
}
