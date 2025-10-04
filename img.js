document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('home');

    if (section) {
        const backgrounds = [
            'images/bg/1.jpeg',
            'images/bg/2.jpeg',
            'images/bg/3.jpeg',
            'images/bg/4.jpeg',
            'images/bg/5.jpeg'
        ];

        const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        section.style.backgroundImage = `url('${randomBg}')`;
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
        },
    });
    
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('mobile-menu').classList.add('hidden');
                });
            });
        });
    });
});
