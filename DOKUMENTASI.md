# 💻 Portofolio Pribadi Mahasiswa Informatika

Website portofolio pribadi modern, responsif, dan ringan yang dibangun khusus untuk mahasiswa teknik informatika dengan estetika dark mode ala terminal/editor kode, aksen neon cyberpunk, animasi typing teks, dan dukungan tema light/dark mode.

---

## 📁 Struktur Folder Proyek

```text
portofolio/
├── index.html          # Struktur halaman semantik & konten utama
├── style.css           # Styling lengkap, tema dark/light, animasi & responsif
├── script.js           # Logika interaktif, typing effect, render dinamis proyek & skill
├── README.md           # Dokumentasi dan panduan penggunaan
└── assets/             # Folder gambar (foto profil & thumbnail proyek)
```

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini dibuat menggunakan **HTML, CSS, dan JavaScript murni** (tanpa framework, tanpa backend, tanpa build tools).

1. Buka File Explorer di komputer Anda.
2. Masuk ke folder `portofolio/`.
3. Klik ganda file `index.html` (atau klik kanan > **Buka dengan / Open with** > Pilih browser favorit Anda seperti Chrome, Edge, Firefox, atau Brave).
4. Alternatif menggunakan VS Code: Klik kanan `index.html` lalu pilih **Open with Live Server**.

---

## ⚙️ Panduan Kustomisasi Konten

### 1. Mengganti Foto Profil
- Simpan file foto Anda ke dalam folder `assets/`, misalnya dengan nama `assets/profile.jpg`.
- Buka file `index.html`, cari baris komentar:
  ```html
  <!-- CATATAN: Untuk mengganti dengan foto asli, ganti div di bawah dengan:
       <img src="assets/profile.jpg" alt="Foto Muhammad Farrel" class="profile-avatar"> -->
  <div class="profile-avatar" title="Placeholder Foto Profil (Ganti di assets/)">
    MF
  </div>
  ```
- Ganti elemen `<div class="profile-avatar">...</div>` dengan elemen `<img>` yang disediakan di komentar tersebut.

### 2. Mengedit Data Proyek & Skill
Data proyek dan keahlian dipisahkan secara rapi di dalam file `script.js` agar sangat mudah ditambah atau diperbarui tanpa harus merombak struktur HTML:

- **Menambah/Mengedit Proyek:** Buka `script.js`, cari variabel `projectsData`. Anda cukup menambahkan objek proyek baru:
  ```javascript
  {
    id: "proyek-4",
    category: "Web Application",
    title: "Nama Proyek Baru",
    description: "Deskripsi singkat mengenai fitur dan tujuan proyek Anda.",
    tags: ["React", "TailwindCSS", "Node.js"],
    icon: "fa-solid fa-laptop-code",
    demoUrl: "https://link-demo-anda.com",
    repoUrl: "https://github.com/NnoeeL/nama-repo"
  }
  ```

- **Menambah/Mengedit Skill:** Buka `script.js`, cari variabel `skillCategories`. Anda dapat menambah kategori baru atau menyisipkan item skill ke dalam array `skills`.

### 3. Mengubah Kontak & Media Sosial
Tautan media sosial dan kontak berada di `index.html` pada bagian `<section id="kontak">`:
- **GitHub:** `https://github.com/NnoeeL`
- **Instagram:** `https://instagram.com/nnoelfr`
- **TikTok:** `https://tiktok.com/@nno3el`
- **Email:** `farrelch21@gmail.com`

---

## 🌐 Cara Upload ke GitHub Pages (Hosting Gratis)

Portofolio ini dapat di-hosting secara gratis selamanya menggunakan **GitHub Pages**:

### Metode 1: Menggunakan Terminal / Git
1. Buka terminal di dalam folder `portofolio/`:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portofolio mahasiswa informatika"
   ```
2. Buat repositori publik baru di GitHub (misalnya bernama `portofolio` atau `NnoeeL.github.io`).
3. Hubungkan remote dan push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/NnoeeL/portofolio.git
   git push -u origin main
   ```
4. Masuk ke repositori Anda di GitHub:
   - Klik tab **Settings** > Pilih menu **Pages** di bilah kiri.
   - Pada bagian **Build and deployment > Source**, pilih **Deploy from a branch**.
   - Pilih Branch: `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, portofolio Anda akan aktif di:
   `https://NnoeeL.github.io/portofolio/`

---

## 📝 Catatan Asumsi & Fitur Utama

- **Identitas Default:** Muhammad Farrel (Noel) / @NnoeeL, Mahasiswa S1 Teknik Informatika Universitas Siliwangi (UNSIL) semester 4.
- **Warna & Aksen:** Latar belakang dark slate (`#0b0f17`), neon emerald (`#10b981`), neon cyan (`#06b6d4`), dan neon purple (`#8b5cf6`).
- **Font Terintegrasi:** *JetBrains Mono* (kode, header, badge, prompt) dan *Plus Jakarta Sans* (paragraf & navigasi).
- **Aksesibilitas & Kerapian:** Menyertakan Semantic HTML5, aria-labels pada tombol interaktif, meta tag Open Graph untuk preview link saat dibagikan ke WhatsApp/sosmed, dan fitur salin email instan ke clipboard.
