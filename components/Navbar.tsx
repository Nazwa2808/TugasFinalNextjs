import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-900 shadow-md sticky top-0 z-50">
      <Link href="/" className="hover:text-pink-400">Home</Link>
      <Link href="/about" className="hover:text-pink-400">About</Link>
      <Link href="/impian" className="hover:text-pink-400">Impian</Link>
      <Link href="/motivasi" className="hover:text-pink-400">Motivasi</Link>
      <Link href="/project" className="hover:text-pink-400">Project</Link>
      <Link href="/skills" className="hover:text-pink-400">Skills</Link>
    </nav>
  );
}