document.getElementById("navbar").innerHTML = `
<nav>
    <div class="logo-container">
        <img src="/assets/logo.jpg" alt="logo" class="logo">
        <a href="/index.html"><h2>RICH LIBRARY</h2></a>
    </div>
    <ul>
        <li><a href="/index.html" id="home">Home</a></li>
        <li><a href="/#aboutSection">About Us</a></li>
        <li><a href="/#categorySection" id="category">Category</a></li>
        <li><a href="/#rulesSection" id="contactUs">Policies</a></li>
        <li><a href="Pages/SignIn/signin.html" id="signin">Sign In</a></li>
    </ul>
</nav>
`;

const username = localStorage.getItem('username');
if (username) {
    document.getElementById('signin').textContent = username;
    document.getElementById('signin').href = 'Pages/Profile/profile.html';
}