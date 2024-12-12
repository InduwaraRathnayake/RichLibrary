document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('profileInitial').textContent = username.charAt(0).toUpperCase();
        document.getElementById('profileUsername').textContent = username;
    } else {
        window.location.href = 'signin.html';
    }

    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('username');
        window.location.href = '../SignIn/signin.html';
    });
});