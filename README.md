# Website Pembelajaran - Tugas UAS Pemrograman Web 1

Website pembelajaran interaktif untuk mempelajari HTML, CSS, dan JavaScript.

## 📁 Struktur Folder

```
UAS/
├── index.html              # Homepage/Landing page
├── login.html              # Halaman login
├── register.html           # Halaman registrasi
├── about.html              # Halaman tentang kami
├── contact.html            # Halaman kontak
├── css/
│   └── style.css           # File CSS utama
├── js/
│   ├── script.js           # JavaScript utama (navigasi, dark mode)
│   └── auth.js             # JavaScript untuk autentikasi
├── images/
│   └── logo.png            # Logo website
├── materi/
│   ├── bab1.html           # Tutorial HTML
│   ├── bab2.html           # Tutorial CSS
│   └── bab3.html           # Tutorial JavaScript
└── videos/                 # Folder untuk video (opsional)
```

## ✨ Fitur Website

### 1. **Homepage/Landing Page**

- Hero section dengan call-to-action button
- Grid teknologi yang dipelajari (HTML, CSS, JavaScript)
- Fitur utama website
- Design responsif untuk semua device

### 2. **Sistem Autentikasi**

- **Register**: Pendaftaran user baru dengan validasi
  - Nama lengkap
  - Email
  - Password & konfirmasi password
- **Login**: Login dengan email dan password
- Data disimpan di localStorage (lokal, tanpa backend)
- Status login ditampilkan di header
- Logout dengan konfirmasi

### 3. **Navigasi**

- Header dengan menu dropdown (Tutorials, References, Exercises)
- Popup panel navigasi (seperti referensi web folder)
- Responsive untuk mobile dan tablet

### 4. **Halaman Materi**

- **bab1.html**: Tutorial lengkap HTML
  - Pendahuluan HTML
  - Struktur dasar dokumen
  - Tags dan atribut
  - Heading dan paragraf
  - References tabel
  - Exercises
- **bab2.html**: Tutorial lengkap CSS
  - Pengenalan CSS
  - Syntax CSS
  - Selectors (element, ID, class)
  - Colors dan background
  - Box model
  - References tabel
  - Exercises
- **bab3.html**: Tutorial lengkap JavaScript
  - Pengenalan JavaScript
  - Syntax dan statements
  - Variables (var, let, const)
  - Functions dan arrow functions
  - Events
  - DOM manipulation
  - References tabel
  - Exercises
- Sidebar navigasi untuk masing-masing materi
- Konten langsung di HTML (tidak menggunakan JavaScript untuk load konten)

### 5. **Dark Mode**

- Toggle dark/light mode di header
- Preferensi tersimpan di localStorage
- Semua halaman support dark mode

### 6. **Halaman Tambahan**

- **About**: Informasi tentang website pembelajaran
- **Contact**: Form kontak dengan validasi
  - Nama, email, subjek, pesan
  - Social media links

## 🚀 Cara Menjalankan

1. Buka folder `UAS`
2. Double-click file `index.html` atau
3. Klik kanan > Open with > Browser pilihan Anda
4. Website akan terbuka di browser

**Alternatif dengan Live Server:**

- Install extension "Live Server" di VS Code
- Klik kanan pada `index.html` > Open with Live Server

## 🎨 Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3**: Styling dan responsive design
  - CSS Variables untuk theming
  - Flexbox & Grid layout
  - Media queries untuk responsive
- **JavaScript (Vanilla)**: Interaktivitas, dark mode, dan autentikasi
  - localStorage API untuk data persistence
  - DOM manipulation
  - Event handling
- **Font Awesome 6.5.1**: Icons
- **Google Fonts**: Typography (Poppins)

## 📱 Responsive Design

Website ini fully responsive dan dapat diakses dengan baik di:

- **Desktop** (1920px+)
- **Laptop** (1366px - 1920px)
- **Tablet** (768px - 1366px)
- **Mobile** (< 768px)

Fitur responsive:

- Header adaptif
- Sidebar collapse di mobile
- Grid layout yang menyesuaikan
- Navigation popup responsive

## 🔐 Autentikasi (Local Storage)

### Register

1. Klik tombol "Sign In" di header
2. Klik link "Register"
3. Isi form:
   - Nama lengkap
   - Email (valid format)
   - Password (minimal 6 karakter)
   - Konfirmasi password (harus sama)
4. Data tersimpan di localStorage browser

### Login

1. Klik tombol "Sign In" di header
2. Masukkan email dan password yang sudah didaftarkan
3. Setelah login berhasil:
   - Redirect ke homepage
   - Nama user muncul di header (menggantikan tombol Sign In)

### Logout

1. Klik nama user di header
2. Konfirmasi logout
3. Data login dihapus dari localStorage

**Catatan:** Data user tersimpan lokal di browser. Jika clear browser data, akun akan hilang.

## 🎯 Fitur Unggulan

1. **✅ Simpel dan Clean**: Design minimalis, mudah dinavigasi
2. **✅ Konten Lengkap**: Tutorial komprehensif dengan contoh kode
3. **✅ Dark Mode**: Kenyamanan mata, preferensi tersimpan
4. **✅ Fully Responsive**: Berfungsi sempurna di semua device
5. **✅ Local Authentication**: Sistem login/register tanpa backend
6. **✅ Sidebar Navigation**: Navigasi per-topik di halaman materi
7. **✅ Popup Navigation**: Panel navigasi seperti website profesional

## 📝 Catatan Penting

- Website ini **murni menggunakan HTML, CSS, dan JavaScript** (no framework/library)
- Data user disimpan di **localStorage** (tidak permanen, akan hilang jika clear browser data)
- Logo website sudah di-generate dan tersimpan di folder `images/`
- Semua konten tutorial ada **langsung di file HTML**, tidak menggunakan JavaScript untuk load konten
- Font menggunakan **Poppins** dari Google Fonts
- Icons menggunakan **Font Awesome** dari CDN

## 🛠️ Maintenance & Customization

### Mengubah Warna Tema

Edit file `css/style.css` di bagian `:root`:

```css
:root {
  --bs-black: #282a35; /* Warna text/background utama */
  --bs-pink: #ffc0c7; /* Warna aksen pink */
  --bs-yellow: #fff4a3; /* Warna aksen kuning */
  --bs-white: #ffffff; /* Background terang */
  --sidebar-bg: #f1f1f1; /* Background sidebar */
  --border-color: #dcdcdc; /* Warna border */
}
```

### Menambah Konten Materi

1. Edit file `materi/bab1.html`, `bab2.html`, atau `bab3.html`
2. Tambahkan section baru dengan heading dan ID
3. Update sidebar navigation di file tersebut
4. Update popup navigation di semua halaman

### Mengubah Font

Ganti link Google Fonts di `<head>` semua file HTML:

```html
<link
  href="https://fonts.googleapis.com/css2?family=NamaFont&display=swap"
  rel="stylesheet"
/>
```

Dan update di CSS:

```css
body {
  font-family: "NamaFont", sans-serif;
}
```

## 👨‍💻 Dibuat Oleh

**Tugas UAS Pemrograman Web 1**

- Folder: UAS
- Struktur folder sudah dirapikan dan disesuaikan dengan best practice
- Mudah dimaintain dan dikembangkan lebih lanjut

---

**Happy Coding! 🚀**

_Website ini dibuat untuk tujuan pembelajaran. Semua konten dan code dapat dimodifikasi sesuai kebutuhan._
