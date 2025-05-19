        // Función para mostrar/ocultar el botón "Volver arriba"
        function toggleBackToTopButton() {
            const backToTopButton = document.getElementById('backToTop');
            
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        }
        
        // Evento scroll para el botón "Volver arriba" y Función para el botón "Volver arriba"
        window.addEventListener('scroll', toggleBackToTopButton);
       
        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // asegurando que el botón "Volver arriba" esté oculto al cargar
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('backToTop').classList.add('opacity-0', 'invisible');
            
            // Marcar el enlace activo en el menú
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });
        
        // Pausar animación al hacer tocar los productos
        const productScroll = document.querySelector('.product-scroll-wrapper');
        if (productScroll) {
            productScroll.addEventListener('mouseenter', () => {
                productScroll.style.animationPlayState = 'paused';
            });
            
            productScroll.addEventListener('mouseleave', () => {
                productScroll.style.animationPlayState = 'running';
            });
        }
