document.addEventListener('DOMContentLoaded', function () {
    // Handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Here you can add code to handle form submission, e.g., sending data to a server
            alert('Form submitted successfully!');
        });
    }

    // Handle modal functionality
    const modal = document.getElementById('myModal');
    const modalBtn = document.getElementById('start-button');
    const modalCloseBtn = document.getElementsByClassName('close')[0];

    if (modalBtn && modalCloseBtn) {
        modalBtn.onclick = function () {
            modal.style.display = "block";
        }

        modalCloseBtn.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Handle video functionality
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    if (videoThumbnails) {
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                const newVideoId = this.dataset.video;
                const videoIframe = document.getElementById('video-foreground');
                videoIframe.src = `https://www.youtube.com/embed/${newVideoId}?autoplay=1&controls=0&mute=1&disablekb=1&modestbranding=1&start=15&end=35&loop=1`;
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add code here to handle form submission, e.g., sending data to a server
            alert('Form submitted successfully!');
        });
    }

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalBtn = document.getElementById('start-button');
    const modalCloseBtn = document.getElementsByClassName('close')[0];

    if (modalBtn && modalCloseBtn) {
        modalBtn.onclick = function () {
            modal.style.display = "block";
        }

        modalCloseBtn.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Video functionality
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    if (videoThumbnails) {
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                const newVideoId = this.dataset.video;
                const videoIframe = document.getElementById('video-foreground');
                videoIframe.src = `https://www.youtube.com/embed/${newVideoId}?autoplay=1&controls=0&mute=1&disablekb=1&modestbranding=1&start=15&end=35&loop=1`;
            });
        });
    }

    // Example of additional functionality: Toggle menu for mobile devices
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
});
