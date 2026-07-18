const ListaPlaylist = () => {

    const playlists = [
        {nomePlaylist: "Playlist Eletro"},
        {nomePlaylist: "Playlist Samba"},
        {nomePlaylist: "Playlist Funk"},
        {nomePlaylist: "Playlist MPB"},
    ];

    return(
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            {
                playlists.map((atual) => {
                    return (
                        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{atual.nomePlaylist}</a>
                    )
                })
            }
        </nav>
    )
}

export default ListaPlaylist;