// Fetch Nav bar
        fetch('../../nav_bar.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;

                // Fix image paths for subdirectory
                const logoImg = document.getElementById('logo-img');
                const hamburgerImg = document.getElementById('hamburger-img');
                const logoLink = document.querySelector('.logo');

                if (logoImg) logoImg.src = '/images/AquaLens-Logo.png';
                if (hamburgerImg) hamburgerImg.src = '/images/Hamburger_Menu_Nav_bar.png';
                if (logoLink) logoLink.href = '/index.html';
            });

        // Fetch footer
        fetch('../../footer.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;
            });

        const links = document.querySelectorAll('.navbar a');
        links.forEach(link => {
            const linkFile = link.getAttribute('href').split('/').pop();
            const currentFile = window.location.pathname.split('/').pop();

            if (linkFile === currentFile) {
                link.classList.add('active');
            }
        });

        function toggleMenu() {
            const dropdown = document.getElementById('mobileDropdown');
            dropdown.classList.toggle('show');
        }   


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    // Create a container for success messages
    const successMessage = document.createElement("p");
    successMessage.style.color = "lightgreen";
    successMessage.style.marginTop = "10px";
    successMessage.style.fontWeight = "bold";
    form.appendChild(successMessage);

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Collect form values
        const formData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            questionType: form.questionType.value,
            phone: form.phone.value,
            message: form.message.value
        };

        // Log data to console (for testing)
        console.log("Form submitted:", formData);

        // Display success message on page
        successMessage.textContent = "Thank you! Your message has been submitted.";

        // Optional: clear form after submission
        form.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.textContent = "";
        }, 5000);
    });
});


