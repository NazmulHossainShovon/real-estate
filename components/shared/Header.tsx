export default function Header() {
  return (
    <nav className="flex justify-between items-center mb-20">
      <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
        HINEX
      </div>
      <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition">
        Explore Divisions
      </button>
    </nav>
  );
}