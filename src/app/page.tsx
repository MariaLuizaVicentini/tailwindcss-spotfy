import { Home as HomeIcon, Repeat, SkipForward, Search, SkipBack, Shuffle, Library, ChevronLeft, ChevronRight, Play, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col">

      <div className=" flex flex-1">
        <aside className="bg-zinc-950 w-72 p-6">
          <div className="flex items-center gap-2 ">
            <div className="w-3 h-3 bg-red-600 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-600 rounded-full"/>
            <div className="w-3 h-3 bg-green-600 rounded-full"/>
          </div>
          <nav className="space-y-5 mt-6">
            <a href="" className="flex items-center gap-3  text-sm font-semibold text-zinc-200   ">
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex items-center gap-3  text-sm font-semibold text-zinc-200   ">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-3  text-sm font-semibold text-zinc-200   ">
              <Library/>
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-0 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Eletro</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Samba</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist MPB</a>
          </nav>
        </aside>

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
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album-hari-1.jpg" width={56} height={56} alt="Capa do album McHariel" />
          <div className="flex flex-col">
            <strong className="font-normal">Temporada 2026</strong>
            <span className="text-xs text-zinc-400">Mc Hariel Artista</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200 "/>
            <SkipBack size={20} className="text-zinc-200 "/>

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200 "/>
            <Repeat size={20} className="text-zinc-200 "/>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"/>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"/>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>

      </footer>
    </div>
  );
}

