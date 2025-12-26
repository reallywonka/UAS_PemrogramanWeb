# Website Pembelajaran - Tugas UAS Pemrograman Web 1

Website pembelajaran interaktif untuk mempelajari HTML, CSS, dan JavaScript.

## 📁 Struktur Folder

```
UAS1/
├── index.html              # Homepage/Landing page
├── login.html              # Halaman login
├── register.html           # Halaman registrasi
├── about.html              # Halaman tentang kami
├── contact.html            # Halaman kontak
├── css/
│   └── style.css          # File CSS utama
├── js/
│   ├── script.js          # JavaScript utama (navigasi, dark mode)
│   └── auth.js            # JavaScript untuk autentikasi
├── images/
│   └── logo.png           # Logo website
├── materi/
│   ├── bab1.html          # Tutorial HTML
│   ├── bab2.html          # Tutorial CSS
│   └── bab3.html          # Tutorial JavaScript
└── videos/                 # Folder untuk video (kosong)
```

## ✨ Fitur Website

### 1. **Homepage/Landing Page**

- Hero section dengan call-to-action button
- Grid teknologi yang dipelajari (HTML, CSS, JavaScript)
- Fitur utama website
- Design responsif untuk semua device

### 2. **Sistem Autentikasi**

- **Register**: Pendaftaran user baru dengan validasi
- **Login**: Login dengan email dan password
- Data disimpan di localStorage (lokal, tanpa backend)
- Status login ditampilkan di header

### 3. **Navigasi**

- Header dengan menu dropdown (Tutorials, References, Exercises)
- Popup panel navigasi (seperti referensi web folder)
- Responsive untuk mobile

### 4. **Halaman Materi**

- **bab1.html**: Tutorial lengkap HTML
- **bab2.html**: Tutorial lengkap CSS
- **bab3.html**: Tutorial lengkap JavaScript
- Sidebar navigasi untuk masing-masing materi
- Konten langsung di HTML (tidak menggunakan JavaScript)

### 5. **Dark Mode**

- Toggle dark/light mode
- Preferensi tersimpan di localStorage

### 6. **Halaman Tambahan**

- **About**: Informasi tentang website
- **Contact**: Form kontak dengan validasi

## 🚀 Cara Menjalankan

1. Buka folder `UAS1`
2. Double-click file `index.html` atau
3. Klik kanan > Open with > Browser pilihan Anda
4. Website akan terbuka di browser

**Alternatif dengan Live Server:**

- Install extension "Live Server" di VS Code
- Klik kanan pada `index.html` > Open with Live Server

## 🎨 Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3**: Styling dan responsive design
- **JavaScript**: Interaktivitas, dark mode, dan autentikasi
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Roboto)

## 📱 Responsive Design

Website ini fully responsive dan dapat diakses dengan baik di:

- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (< 768px)

## 🔐 Autentikasi

### Register

1. Klik tombol "Sign In" di header
2. Klik link "Register"
3. Isi form (nama, email, password, confirm password)
4. Data tersimpan di localStorage

### Login

1. Klik tombol "Sign In" di header
2. Masukkan email dan password yang sudah didaftarkan
3. Setelah login, nama user muncul di header

### Logout

Klik nama user di header > Konfirmasi logout

## 🎯 Fitur Unggulan

1. **Simpel dan Clean**: Design minimalis seperti referensi folder web
2. **Mudah Dinavigasi**: Menu yang jelas dan sidebar untuk materi
3. **Konten Berkualitas**: Tutorial lengkap dengan contoh kode
4. **Dark Mode**: Untuk kenyamanan mata
5. **Fully Responsive**: Berfungsi di semua device
6. **Local Authentication**: Sistem login/register tanpa backend

## 📝 Catatan

- Website ini murni menggunakan HTML, CSS, dan JavaScript (no framework)
- Data user disimpan di localStorage (tidak permanen, akan hilang jika clear browser data)
- Logo website sudah di-generate dan tersimpan di folder `images/`
- Semua konten tutorial ada langsung di file HTML, tidak menggunakan JavaScript untuk load konten

## 👨‍💻 Dibuat Oleh

**Tugas UAS Pemrograman Web 1**

- Folder: UAS1
- Referensi Design: Folder web

---

**Happy Coding! 🚀**
