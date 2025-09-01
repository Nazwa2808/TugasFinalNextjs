import Image from "next/image";
import Link from "next/link";
import NazwaFoto from "../public/Nazwa.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <Image
        src="/Nazwa.jpg"
        alt="Foto Nazwa"
        width={180} height={180} className="rounded-full shadow-lg"/>

      <h1 className="text-3xl font-bold mt-4">Nazwa Olivia Putri</h1>
      <span className="text-black-400 font-bold text-2xl"> Siswi | UI/UX | Pecinta Pink  </span> 

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link href="/about">
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 shadow-md">
            About
          </button>
        </Link>
        <Link href="/impian">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md">
            Impian
          </button>
        </Link>
        <Link href="/motivasi">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 shadow-md">
            Motivasi
          </button>
        </Link>
        <Link href="/project">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-md">
            Project
          </button>
        </Link>
        <Link href="/skills">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 shadow-md">
            Skills
          </button>
        </Link>
      </div>
    </main>
  );
}
