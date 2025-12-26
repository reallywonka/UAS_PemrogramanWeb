// ========== DARK MODE TOGGLE ==========
const darkModeToggle = document.getElementById('light-dark-toggle');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// ========== NAVIGATION POPUP ==========
const tutorialBtn = document.getElementById('tutorial-btn');
const referencesBtn = document.getElementById('references-btn');
const exercisesBtn = document.getElementById('exercises-btn');

const tutorialsNav = document.getElementById('nested-navigation-tutorials');
const referencesNav = document.getElementById('nested-navigation-references');
const exercisesNav = document.getElementById('nested-navigation-exercises');

const closeBtnTutorials = document.getElementById('close-btn-tutorials');
const closeBtnReferences = document.getElementById('close-btn-references');
const closeBtnExercises = document.getElementById('close-btn-exercises');

// Open Tutorials
if (tutorialBtn && tutorialsNav) {
    tutorialBtn.addEventListener('click', () => {
        tutorialsNav.classList.remove('nested_navigation_hidden');
        referencesNav?.classList.add('nested_navigation_hidden');
        exercisesNav?.classList.add('nested_navigation_hidden');
    });
}

// Open References
if (referencesBtn && referencesNav) {
    referencesBtn.addEventListener('click', () => {
        referencesNav.classList.remove('nested_navigation_hidden');
        tutorialsNav?.classList.add('nested_navigation_hidden');
        exercisesNav?.classList.add('nested_navigation_hidden');
    });
}

// Open Exercises
if (exercisesBtn && exercisesNav) {
    exercisesBtn.addEventListener('click', () => {
        exercisesNav.classList.remove('nested_navigation_hidden');
        tutorialsNav?.classList.add('nested_navigation_hidden');
        referencesNav?.classList.add('nested_navigation_hidden');
    });
}

// Close buttons
if (closeBtnTutorials) {
    closeBtnTutorials.addEventListener('click', () => {
        tutorialsNav.classList.add('nested_navigation_hidden');
    });
}

if (closeBtnReferences) {
    closeBtnReferences.addEventListener('click', () => {
        referencesNav.classList.add('nested_navigation_hidden');
    });
}

if (closeBtnExercises) {
    closeBtnExercises.addEventListener('click', () => {
        exercisesNav.classList.add('nested_navigation_hidden');
    });
}

// Close navigation when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nested-navigation') && 
        !e.target.closest('#tutorial-btn') && 
        !e.target.closest('#references-btn') && 
        !e.target.closest('#exercises-btn')) {
        tutorialsNav?.classList.add('nested_navigation_hidden');
        referencesNav?.classList.add('nested_navigation_hidden');
        exercisesNav?.classList.add('nested_navigation_hidden');
    }
});

// ========== HOMEPAGE CTA BUTTON ==========
const homeStartBtn = document.getElementById('home-start-btn');
if (homeStartBtn) {
    homeStartBtn.addEventListener('click', () => {
        window.location.href = 'materi/bab1.html';
    });
}

// ========== SIDEBAR NAVIGATION ACTIVE STATE ==========
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
const currentPath = window.location.pathname;

sidebarLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
        link.classList.add('active');
    }
    
    link.addEventListener('click', () => {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ========== CHECK LOGIN STATUS ==========
function checkLoginStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const signInBtn = document.querySelector('.header-right a[href="login.html"]');
    
    if (currentUser && signInBtn) {
        const userData = JSON.parse(currentUser);
        signInBtn.textContent = userData.name;
        signInBtn.href = '#';
        signInBtn.classList.remove('bg-yellow');
        signInBtn.classList.add('bg-pink');
        
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Logout?')) {
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            }
        });
    }
}

checkLoginStatus();
