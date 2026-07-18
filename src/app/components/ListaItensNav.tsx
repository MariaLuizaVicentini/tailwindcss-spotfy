import { Home as HomeIcon, Search, Library } from "lucide-react";

const ListaItensNav = () => {

    const itensNav = [
        { titulo: "Home", icon: HomeIcon },
        { titulo: "Search", icon: Search },
        { titulo: "Your Library", icon: Library },
    ];

    return (
        <>
            <nav className="space-y-5 mt-6">
                {
                    itensNav.map((itemAtual) => {
                        const Icon = itemAtual.icon; 
                        return (
                            <a key={itemAtual.titulo} href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                                <Icon />
                                {itemAtual.titulo}
                            </a>
                        );
                    })
                }
            </nav>        
        </>
    )
}

export default ListaItensNav;