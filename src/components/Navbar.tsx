export default function Navbar() {
  return (
    <nav className="w-full border-b-1 border-b-stone-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="">
          <div className="text-3xl">Packet Arena</div>
        </div>
        <div className="space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded border-1 border-solid border-black">Sign in</button>
          <button className="bg-white text-black px-4 py-2 rounded border-1 border-solid border-black">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
