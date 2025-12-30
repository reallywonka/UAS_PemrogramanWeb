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
