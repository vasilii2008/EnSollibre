document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            try {
                // Here you would typically send the data to your server
                console.log('Form data:', data);
                
                // Show success message
                alert('¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.');
                contactForm.reset();
            } catch (error) {
                console.error('Error:', error);
                alert('Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo.');
            }
        });
    }

    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            try {
                // Here you would typically send the email to your server
                console.log('Newsletter email:', email);
                
                // Show success message
                alert('¡Gracias por suscribirse a nuestro boletín!');
                newsletterForm.reset();
            } catch (error) {
                console.error('Error:', error);
                alert('Ocurrió un error al suscribirse. Por favor, inténtelo de nuevo.');
            }
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .project-card, .contact-form').forEach(el => {
        observer.observe(el);
    });

    // Add scroll effect to stats
    const stats = document.querySelector('.stats');
    if (stats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statItems = stats.querySelectorAll('.stat-number');
                    statItems.forEach(item => {
                        const target = parseInt(item.textContent);
                        let current = 0;
                        const increment = target / 100;
                        
                        const updateCount = () => {
                            current += increment;
                            item.textContent = Math.floor(current);
                            if (current < target) {
                                requestAnimationFrame(updateCount);
                            }
                        };
                        
                        updateCount();
                    });
                }
            });
        });
        
        observer.observe(stats);
    }
});
