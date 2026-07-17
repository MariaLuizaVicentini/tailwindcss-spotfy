
export default function Home() {
  return (
    <div className=" h-screen flex flex-col">
      <div className=" flex flex-1">
        <aside className="bg-zinc-950 w-64 p-6">
          sidebar
        </aside>
        <main className="flex-1 p-6">
          Conteudo - main
        </main>
      </div>

      <footer className="bg-zinc-800 border-zinc-700 p-6">rodape</footer>
    </div>
  );
}
