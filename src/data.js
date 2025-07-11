// === Foto Profil / Hero ===
import HeroImage from "/assets/pp.jpeg";

const Image = {
  HeroImage,
};

export default Image;

// === Import Tools yang Dipakai ===
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/mysql.png";
import Tools5 from "/assets/tools/blender.png";
import Tools6 from "/assets/tools/figma.png";
import Tools7 from "/assets/tools/bootstrap.png";
import Tools8 from "/assets/tools/unity.png";

// === Daftar Tools Ditampilkan ===
export const listTools = [
  {
    id: 1,
    gambar: Tools3,
    nama: "PHP",
    ket: "Backend Language",
  },
  {
    id: 2,
    gambar: Tools4,
    nama: "MySQL",
    ket: "Database",
  },
  {
    id: 3,
    gambar: Tools5,
    nama: "Blender",
    ket: "3D Modelling",
  },
  {
    id: 4,
    gambar: Tools6,
    nama: "Figma",
    ket: "UI/UX Design",
  },
  {
    id: 5,
    gambar: Tools7,
    nama: "Bootstrap",
    ket: "CSS Framework",
  },
  {
    id: 6,
    gambar: Tools8,
    nama: "Unity",
    ket: "Game Engine",
  },
];

// === Import Gambar proyek ===
import proyek1 from "/assets/proyek/proyek1.webp";
import proyek2 from "/assets/proyek/proyek2.webp";
import proyek3 from "/assets/proyek/proyek3.webp";
import proyek4 from "/assets/proyek/proyek4.webp";

// === Daftar proyek Ditampilkan ===
export const listproyek = [
  {
    id: 1,
    gambar: proyek1,
    nama: "Website E-Commerce (LookWear)",
    desk: "Aplikasi berbasis web yang digunakan untuk memfasilitasi transaksi jual beli produk terutama fashion secara online. Dibangun menggunakan PHP dan MySQL sebagai backend.",
    tools: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 2,
    gambar: proyek2,
    nama: "3D Karakter & Bangunan",
    desk: "Koleksi aset 3D berupa karakter lucu, objek dan bangunan yang dirancang menggunakan Blender. Cocok untuk kebutuhan visualisasi animasi, game, dan edukasi.",
    tools: ["Blender"],
  },
  {
    id: 3,
    gambar: proyek3,
    nama: "Desain UI Aplikasi (Ipusnas)",
    desk: "Desain antarmuka pengguna (UI) untuk aplikasi mobile dengan pendekatan user-centered design. Dibuat menggunakan Figma untuk prototyping dan kolaborasi tim.",
    tools: ["Figma"],
  },
  {
    id: 4,
    gambar: proyek4,
    nama: "3D Platformer Game with Among Us Character using Unity",
    desk: "Game interaktif yang dikembangkan menggunakan Unity dengan tujuan edukatif. Menyajikan konten pembelajaran yang menyenangkan melalui pendekatan gamifikasi.",
    tools: ["Unity"],
  },
];
