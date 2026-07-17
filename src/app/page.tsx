import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from "lucide-react";

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

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
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
        </main>
      </div>

      <footer className="bg-zinc-800 border-zinc-700 p-6">
        rodape
      </footer>
    </div>
  );
}

