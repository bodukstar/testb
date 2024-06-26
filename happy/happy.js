var clicker  = 0;




document.addEventListener('click', function(event) {
    // Створення елементу img для гіфки
    const gif = document.createElement('img');
    gif.src = 'XiPv.gif'; // Заміни на шлях до твоєї гіфки
    gif.style.position = 'absolute';
    gif.style.left = `${event.clientX}px`;
    gif.style.top = `${event.clientY}px`;

    clicker++
    
    // Додавання гіфки до контейнера
    const container = document.getElementById('gif-container');
    container.appendChild(gif);
    
    // Видалення гіфки через 2 секунди
    setTimeout(() => {
        container.removeChild(gif);
    }, 2000);
    
    if (clicker === 30){
        window.location.href = 'set.html'
    }
});



