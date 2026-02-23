document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as seções que têm a classe 'fade-in-section'
    const secoes = document.querySelectorAll('.fade-in-section');

    // Configura o observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: descomente a linha abaixo se quiser que a animação ocorra apenas uma vez
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento aparece na tela
    });

    // Inicia a observação de cada seção
    secoes.forEach(secao => {
        observer.observe(secao);
    });
});