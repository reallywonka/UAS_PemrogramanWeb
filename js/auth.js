// ========== AUTHENTICATION LOGIC ==========

// Register Form
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        // Validation
        if (password !== confirmPassword) {
            alert('Password tidak cocok!');
            return;
        }
        
        if (password.length < 6) {
            alert('Password minimal 6 karakter!');
            return;
        }
        
        // Get existing users or create new array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if email already exists
        if (users.find(user => user.email === email)) {
            alert('Email sudah terdaftar!');
            return;
        }
        
        // Add new user
        users.push({
            name: name,
            email: email,
            password: password
        });
        
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registrasi berhasil! Silakan login.');
        window.location.href = 'login.html';
    });
}

// Login Form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Save current user
            localStorage.setItem('currentUser', JSON.stringify({
                name: user.name,
                email: user.email
            }));
            
            alert('Login berhasil! Selamat datang, ' + user.name);
            window.location.href = 'index.html';
        } else {
            alert('Email atau password salah!');
        }
    });
}
