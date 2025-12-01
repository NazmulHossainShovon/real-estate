import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center mb-20">
      <Link
        href="/"
        className="text-4xl font-bold bg-black rounded-full px-4 py-2 flex items-center justify-center"
      >
        <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent font-bold">
          HINEX
        </span>
      </Link>
    </nav>
  );
}
