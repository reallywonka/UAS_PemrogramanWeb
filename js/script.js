// ========== DARK MODE TOGGLE ==========
const darkModeToggle = document.getElementById("light-dark-toggle");
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// ========== DROPDOWN NAVIGATION (Mobile Support) ==========
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

// For mobile: toggle dropdown on click
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns
      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.classList.remove("active");
        }
      });

      // Toggle current dropdown
      toggle.classList.toggle("active");
    }
  });
});

// Close dropdown when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown") && window.innerWidth <= 768) {
    dropdownToggles.forEach((toggle) => {
      toggle.classList.remove("active");
    });
  }
});

// ========== HOMEPAGE CTA BUTTON ==========
const homeStartBtn = document.getElementById("home-start-btn");
if (homeStartBtn) {
  homeStartBtn.addEventListener("click", () => {
    window.location.href = "materi/html/bab1/1.1-pendahuluan.html";
  });
}

// ========== SIDEBAR NAVIGATION ACTIVE STATE ==========
const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
const currentPath = window.location.pathname;

sidebarLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath.split("/").pop()) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    sidebarLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ========== CHECK LOGIN STATUS ==========
function checkLoginStatus() {
  const currentUser = localStorage.getItem("currentUser");
  const signInBtn = document.querySelector(
    '.header-right a[href="login.html"]'
  );

  if (currentUser && signInBtn) {
    const userData = JSON.parse(currentUser);
    signInBtn.textContent = userData.name;
    signInBtn.href = "#";
    signInBtn.classList.remove("bg-yellow");
    signInBtn.classList.add("bg-pink");

    signInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Logout?")) {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
      }
    });
  }
}

checkLoginStatus();
