import { Home as HomeIcon, Repeat, SkipForward, Search, SkipBack, Shuffle, Library, ChevronLeft, ChevronRight, Play, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

import Conteudo from './components/Conteudo'
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col">

      <div className=" flex flex-1">
        <SideBar/>
        <Conteudo/>
      </div>
      <Footer/>
    </div>
  );
}

