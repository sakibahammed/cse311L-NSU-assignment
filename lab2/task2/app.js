document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');
    
    if (password !== confirmPassword) {
        message.textContent = 'Error: Passwords do not match!';
        message.className = 'error';
    } else {
        // Here you would typically send the form data to a server
        message.textContent = 'Registration successful!';
        message.className = 'success';
        this.reset(); // Reset form fields
    }
});