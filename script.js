document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-img').src = `https://i.pravatar.cc/150?img=${data.id}`;
        document.getElementById('profile-name').textContent = data.name;
        document.getElementById('profile-email').textContent = data.email;

        document.getElementById('profile-details-name').textContent = data.name;
        document.getElementById('profile-phone').textContent = `Phone: ${data.phone}`;
        document.getElementById('profile-website').textContent = `Website: ${data.website}`;
    });

    document.querySelector('.card-inner').addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});
