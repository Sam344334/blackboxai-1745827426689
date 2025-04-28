document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const togglePassword = document.getElementById('togglePassword');
    const loginContainer = document.getElementById('loginContainer');
    const ideContainer = document.getElementById('ideContainer');
    const ideFrame = document.getElementById('ideFrame');
    
    // Password visibility toggle
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerHTML = type === 'password' ? 
            '<i class="fas fa-eye"></i>' : 
            '<i class="fas fa-eye-slash"></i>';
    });

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const password = passwordInput.value;
        
        if (password === 'Samurai-IDE') {
            // Hide login container and show IDE
            loginContainer.classList.add('hidden');
            ideContainer.classList.remove('hidden');
            // Set iframe source after successful login
            ideFrame.src = 'https://agent.blackbox.ai/?sandbox=mh5lqk';
        } else {
            // Show error message with shake animation
            errorMessage.classList.remove('hidden');
            errorMessage.classList.add('shake');
            
            // Remove shake class after animation completes
            setTimeout(() => {
                errorMessage.classList.remove('shake');
            }, 500);
            
            // Clear password field
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
});
