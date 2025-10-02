document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        // A variável 'i' funciona como o 'index'
        const card = cards[i]; // Acessamos o card atual pelo índice 'i'

        setTimeout(() => {
            card.classList.add('visible');
        }, i * 150); // Usamos 'i' para calcular o atraso
    }
});