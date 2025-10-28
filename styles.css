// Datos de los valores con la información del documento Word
const valoresData = {
    sostenibilidad: {
        icon: '🌱',
        title: 'Sostenibilidad',
        description: 'Creemos en un modelo de producción responsable que contribuya activamente al cuidado del medioambiente mediante el reciclaje de plásticos y la economía circular. Nuestro compromiso va más allá de las palabras: implementamos procesos que transforman residuos en recursos valiosos, reduciendo el impacto ambiental y promoviendo un futuro más verde para las próximas generaciones.'
    },
    compromiso: {
        icon: '🤝',
        title: 'Compromiso Social',
        description: 'Nos motiva generar impacto en comunidades educativas, mejorando la calidad del mobiliario escolar y fomentando una conciencia ecológica en niñas, niños y jóvenes. Trabajamos directamente con instituciones educativas para proporcionar soluciones que no solo mejoren su infraestructura, sino que también sirvan como herramientas de aprendizaje sobre sostenibilidad y responsabilidad ambiental.'
    },
    innovacion: {
        icon: '💡',
        title: 'Innovación con Propósito',
        description: 'Utilizamos tecnología accesible y procesos creativos para transformar residuos en soluciones útiles, duraderas y de bajo costo para los colegios. Nuestra innovación no busca solo la novedad, sino crear un impacto real y medible. Desarrollamos productos que combinan funcionalidad, durabilidad y accesibilidad económica, asegurando que nuestras soluciones lleguen a quienes más las necesitan.'
    },
    transparencia: {
        icon: '🔍',
        title: 'Transparencia y Ética',
        description: 'Operamos con responsabilidad y claridad en nuestros procesos productivos, relaciones comerciales y decisiones estratégicas. Creemos que la confianza se construye a través de la honestidad y la apertura. Mantenemos comunicación clara con nuestros stakeholders, documentamos nuestros procesos y tomamos decisiones basadas en principios éticos sólidos que beneficien a todas las partes involucradas.'
    },
    colaboracion: {
        icon: '👥',
        title: 'Colaboración',
        description: 'Valoramos el trabajo en equipo y las alianzas con instituciones, organizaciones y personas que compartan nuestra visión de un futuro más verde y justo. Entendemos que los grandes cambios requieren esfuerzos colectivos. Por eso, buscamos activamente partnerships que multipliquen nuestro impacto y nos permitan aprender de diferentes perspectivas y experiencias.'
    }
};

// Elementos del DOM
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalIcon = document.querySelector('.modal-icon');
const closeBtn = document.querySelector('.close');
const cerrarBtn = document.querySelector('.btn-cerrar');

// Función para abrir el modal
function abrirModal(valorKey) {
    const valor = valoresData[valorKey];
    if (valor) {
        modalIcon.textContent = valor.icon;
        modalTitle.textContent = valor.title;
        modalDescription.textContent = valor.description;
        
        modal.classList.add('show');
        modalOverlay.classList.add('show');
        
        // Prevenir scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal
function cerrarModal() {
    modal.classList.remove('show');
    modalOverlay.classList.remove('show');
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a las tarjetas de valores
    const valorCards = document.querySelectorAll('.valor-card');
    valorCards.forEach(card => {
        card.addEventListener('click', function() {
            const valorKey = this.getAttribute('data-valor');
            abrirModal(valorKey);
        });
        
        // Agregar efecto hover adicional
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Event listeners para los botones "Conocer más"
    const botonesConocerMas = document.querySelectorAll('.btn-conocer-mas');
    botonesConocerMas.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que se dispare el click del card
            const valorKey = this.closest('.valor-card').getAttribute('data-valor');
            abrirModal(valorKey);
        });
    });
    
    // Event listeners para cerrar el modal
    closeBtn.addEventListener('click', cerrarModal);
    cerrarBtn.addEventListener('click', cerrarModal);
    modalOverlay.addEventListener('click', cerrarModal);
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            cerrarModal();
        }
    });
    
    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
    
    // Aplicar animación inicial a las tarjetas
    valorCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Función para agregar efectos de partículas (opcional)
function crearEfectoParticulas() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            pointer-events: none;
            animation: flotar ${3 + Math.random() * 4}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(particula);
    }
}

// CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes flotar {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .container {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Inicializar efectos cuando se carga la página
// window.addEventListener('load', crearEfectoParticulas);
