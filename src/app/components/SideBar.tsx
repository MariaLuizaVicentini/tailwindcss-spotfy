import ListaItensNav from "./ListaItensNav";
import ListaPlaylist from "./ListaPlaylist";


const SideBar = () => {

    return (
        <>
            <aside className="bg-zinc-950 w-72 p-6">
                <div className="flex items-center gap-2 ">
                    <div className="w-3 h-3 bg-red-600 rounded-full"/>
                    <div className="w-3 h-3 bg-yellow-600 rounded-full"/>
                    <div className="w-3 h-3 bg-green-600 rounded-full"/>
                </div>
                
                <ListaItensNav/>

                {/* componentizar - ListaPlaylist */}
                <ListaPlaylist/>
            </aside>
        </>
    );
};

export default SideBar;