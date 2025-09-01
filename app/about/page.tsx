import Image from "next/image";
import "../../public/Nazwa.jpg";

export default function About() {
  return (
    <div className="page flex flex-col items-center min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-pink-600">About Me</h1>
      <div className="container flex flex-col md:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-lg">
        <div className="left md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-pink-300">Biodata Nazwa</h2>
          <p className="text-gray-700 leading-relaxed">
            Haii semuanya, aku <b>Nazwa Olivia Putri</b>, biasa dipanggil Awa.
            Aku tinggal di JL Simpati II No 29 RT 07 RW 01.
            Lahir tanggal <b>28 Oktober 2008</b>, pas banget sama Hari Sumpah Pemuda.
            Warna favoritku Pink, lagu favoritku <i>Everything U Are</i> dari Hindia.
            Hal yang nggak aku suka: kucing (soalnya geli).
            Prinsipku: cinta boleh hadir, tapi jangan sampai pelajaran jadi korban.
          </p>
        </div>

        <div className="right md:w-1/2 flex justify-center">
          <div className="bg-pink-100 p-3 rounded-2xl shadow-xl">
            <Image
              src="/Nazwa.jpg"
              alt="Foto Nazwa"
              width={300}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="favorit-awa mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Top Hal Yang Awa Suka</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-4 bg-pink-100 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-black">Makan Taiyaki</h3>
            <p className="text-black">Lucu bentuknya, rasanya beda dari kue biasa, bikin senyum tanpa alasan.</p>
          </div>
          <div className="card p-4 bg-pink-200 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-black">Suka Luppy</h3>
            <p className="text-black">Karena manis, pemalu, warnanya pink, dan sangat perhatian sama teman-temannya.</p>
          </div>
          <div className="card p-4 bg-pink-100 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-black">Fotoin Senja</h3>
            <p className="text-black">Senja punya nuansa tenang dan damai, cocok buat refleksi diri.</p>
          </div>
          <div className="card p-4 bg-pink-200 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-black">Nyobain Cafe Baru</h3>
            <p className="text-black">Datang ke cafe buat cari suasana baru, minumannya selalu matcha.</p>
          </div>
          <div className="card p-4 bg-pink-100 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-black">Dengerin lagu Hindia</h3>
            <p className="text-black">Lirik-liriknya jujur dan relate banget sama kehidupan sehari-hari.</p>
          </div>
        </div>
      </div>
      <div className="contact mt-16 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
        <div className="flex justify-center gap-10">
          <a
            href="https://www.instagram.com/awawadora_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-pink-500 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@blububbtaiyaki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-pink-500 hover:underline ml-6"
          >
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
