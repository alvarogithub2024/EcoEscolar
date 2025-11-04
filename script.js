// Datos de los valores extraídos del documento Word
const valoresData = {
    sostenibilidad: {
        title: 'Sostenibilidad',
        description: 'Creemos en un modelo de producción responsable que contribuya activamente al cuidado del medioambiente mediante el reciclaje de plásticos y la economía circular. Nuestro compromiso va más allá de las palabras: implementamos procesos que transforman residuos en recursos valiosos, reduciendo el impacto ambiental y promoviendo un futuro más verde para las próximas generaciones.'
    },
    compromiso: {
        title: 'Compromiso Social',
        description: 'Nos motiva generar impacto en comunidades educativas, mejorando la calidad del mobiliario escolar y fomentando una conciencia ecológica en niñas, niños y jóvenes. Trabajamos directamente con instituciones educativas para proporcionar soluciones que no solo mejoren su infraestructura, sino que también sirvan como herramientas de aprendizaje sobre sostenibilidad y responsabilidad ambiental.'
    },
    innovacion: {
        title: 'Innovación con Propósito',
        description: 'Utilizamos tecnología accesible y procesos creativos para transformar residuos en soluciones útiles, duraderas y de bajo costo para los colegios. Nuestra innovación no busca solo la novedad, sino crear un impacto real y medible. Desarrollamos productos que combinan funcionalidad, durabilidad y accesibilidad económica, asegurando que nuestras soluciones lleguen a quienes más las necesitan.'
    },
    transparencia: {
        title: 'Transparencia y Ética',
        description: 'Operamos con responsabilidad y claridad en nuestros procesos productivos, relaciones comerciales y decisiones estratégicas. Creemos que la confianza se construye a través de la honestidad y la apertura. Mantenemos comunicación clara con nuestros stakeholders, documentamos nuestros procesos y tomamos decisiones basadas en principios éticos sólidos que beneficien a todas las partes involucradas.'
    },
    colaboracion: {
        title: 'Colaboración',
        description: 'Valoramos el trabajo en equipo y las alianzas con instituciones, organizaciones y personas que compartan nuestra visión de un futuro más verde y justo. Entendemos que los grandes cambios requieren esfuerzos colectivos. Por eso, buscamos activamente partnerships que multipliquen nuestro impacto y nos permitan aprender de diferentes perspectivas y experiencias.'
    }
};

// Elementos del DOM
const modal = document.getElementById('modal-valor');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const closeBtn = document.querySelector('.close');
const cerrarBtn = document.querySelector('.btn-cerrar');

// Función para abrir el modal
function abrirModal(valorKey) {
    const valor = valoresData[valorKey];
    if (valor) {
        modalTitulo.textContent = valor.title;
        modalDescripcion.textContent = valor.description;
        
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
    // Agregar event listeners a los valores
    const valores = document.querySelectorAll('.valor[data-valor]');
    valores.forEach(valor => {
        valor.addEventListener('click', function() {
            const valorKey = this.getAttribute('data-valor');
            abrirModal(valorKey);
        });
    });
    
    // Event listeners para cerrar el modal
    if (closeBtn) {
        closeBtn.addEventListener('click', cerrarModal);
    }
    
    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', cerrarModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', cerrarModal);
    }
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            cerrarModal();
        }
    });

    // Smooth scroll para navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
