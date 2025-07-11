import DataImage from "./data";
import { listTools, listproyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 bg-neutral-900 text-white">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-neutral-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q className="text-neutral-400">Kesederhanaan dalam desain, kehebatan dalam fungsi.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Adis Koswara</h1>
          <p className="text-base mb-6 text-neutral-400">
            Saya adalah mahasiswa aktif di bidang Teknologi Informasi yang memiliki minat dan keterampilan dalam pengembangan web, pemrograman, dan analisis data.
            Portofolio ini berisi kumpulan proyek yang saya kerjakan secara individu maupun dalam tim, dengan pendekatan yang sistematis dan berbasis kebutuhan pengguna.
            Setiap proyek mencerminkan kemampuan saya dalam menyusun solusi digital berbasis teknologi yang efektif dan efisien.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#proyek" className="bg-neutral-700 p-4 rounded-2xl hover:bg-neutral-600 transition-all">Lihat proyek <i className="ri-arrow-down-s-fill"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy" />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10 bg-neutral-900 text-white" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-neutral-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base text-neutral-400 mb-10">
            Saya adalah mahasiswa aktif Program Studi <strong>Informatika</strong> di <strong>Universitas Gunadarma</strong>.
            Minat saya dalam dunia teknologi informasi dimulai dari ketertarikan terhadap bagaimana sistem digital bekerja secara logis dan efisien.
            Selama masa studi, saya mendalami berbagai aspek pemrograman, pengembangan web, dan analisis data.
            Beberapa proyek yang saya kerjakan mencerminkan ketertarikan saya terhadap pembuatan aplikasi yang tidak hanya fungsional, tetapi juga ramah pengguna.
            Saya berkomitmen untuk terus belajar dan berkontribusi di dunia digital.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">4</h1>
                <p className="text-neutral-400">Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">3</h1>
                <p className="text-neutral-400">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
          <p className="text-neutral-400 xl:w-2/5 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan proyek
          </p>
          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-neutral-600 rounded-md hover:bg-neutral-700 transition-all group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt="Tools" className="w-14 bg-neutral-900 p-1 group-hover:bg-neutral-800" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="text-neutral-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* proyek */}
      <div className="proyek mt-32 py-10 bg-neutral-900 text-white" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-center text-neutral-400 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listproyek.map((proyek) => (
            <div className="p-4 bg-neutral-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} key={proyek.id}>
              <img src={proyek.gambar} alt="Proyek" loading="lazy" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">{proyek.nama}</h3>
              <p className="text-neutral-400 mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="text-sm bg-neutral-700 text-white px-2 py-1 rounded-md">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0 bg-neutral-900 text-white" id="kontak">
        <h1 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-center text-neutral-400 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Mari terhubung dengan saya.
        </p>
        <form action="https://formsubmit.co/adiskoswara2004@gmail.com" method="POST" className="bg-neutral-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama.." className="border border-neutral-600 p-2 rounded-md bg-neutral-900 text-white" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email.." className="border border-neutral-600 p-2 rounded-md bg-neutral-900 text-white" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan.." className="border border-neutral-600 p-2 rounded-md bg-neutral-900 text-white"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 hover:bg-violet-600 p-3 rounded-lg w-full border border-neutral-600 transition-all">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
