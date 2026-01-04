/*
Nama File: script.js
Tanggal Mengerjakan: 10 Desember 2025 - 4 Januari 2026
Kelas: 05TPLP017
Kelompok: 2
Anggota: Arshanda Amudhia (231011401821), Egi Witra Aditya (231011400722), Fajar Maulana (231011400741)
Deskripsi: File JavaScript utama yang menangani interaktifitas website seperti dark mode toggle dengan localStorage, dropdown menu untuk mobile, tombol navigasi, dan copy code functionality.
*/

// ========== DARK MODE ==========
const darkToggle = document.getElementById("dark-toggle");
const body = document.body;

// Cek localStorage untuk tema yang tersimpan
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Simpan preferensi
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// ========== DROPDOWN MENU (Mobile) ==========
const menuButtons = document.querySelectorAll(".dropdown .menu-btn");

// Untuk mobile: toggle menu saat diklik
menuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();

      // Tutup menu lain
      menuButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
        }
      });

      // Toggle menu ini
      button.classList.toggle("active");
    }
  });
});

// Tutup menu saat klik di luar (mobile)
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown") && window.innerWidth <= 768) {
    menuButtons.forEach((button) => {
      button.classList.remove("active");
    });
  }
});

// ========== HOMEPAGE START  BUTTON ==========
const startBtn = document.getElementById("start-btn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.location.href = "materi/BAB1/1.1-pendahuluan.html";
  });
}

// COPY CODE BUTTON
const codeBlocks = document.querySelectorAll("pre");

codeBlocks.forEach((pre) => {
  const wrapper = document.createElement("div");
  wrapper.className = "code-wrapper";

  pre.parentNode.insertBefore(wrapper, pre);

  wrapper.appendChild(pre);

  const button = document.createElement("button");
  button.className = "copy-btn";
  button.innerHTML = "📋 Copy";

  button.addEventListener("click", () => {
    const code = pre.innerText;

    navigator.clipboard
      .writeText(code)
      .then(() => {
        button.innerHTML = "Copied!";
        setTimeout(() => {
          button.innerHTML = "📋 Copy";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        button.innerHTML = "Copied!";
        setTimeout(() => {
          button.innerHTML = "📋 Copy";
        }, 2000);
      });
  });

  wrapper.appendChild(button);
});
