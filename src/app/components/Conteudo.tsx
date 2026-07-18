import Image from "next/image"
import { ChevronLeft, ChevronRight, Play,  } from "lucide-react"

const Conteudo = () => {
    return(
        <main className="flex-1 p-6">

          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 group transition-colors">
              <Image src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong>Mc Hariel</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 group transition-colors">
              <Image src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong>Mc Hariel</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
              
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 group transition-colors">
              <Image src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong>Mc Hariel</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 group transition-colors">
              <Image src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong>Mc Hariel</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 group transition-colors">
              <Image src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong>Mc Hariel</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 group transition-colors">
              <Image src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong>Mc Hariel</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
          </div>
          
          <h2 className="font-semibold text-2xl mt-10">Made for Schell Fernandes</h2>

          <div className=" grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Music</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Music</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Music</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Music</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album-hari-1.jpg" width={104} height={104} alt="Capa do album McHariel" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Music</span>
            </a>
          </div>

        </main>
    )
}

export default Conteudo;