document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const formDataObj = Object.fromEntries(formData.entries());

        
        console.log(formDataObj);
        alert('Form submitted successfully!');
        this.reset();
    });
});
