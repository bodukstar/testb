document.getElementById('spinButton').addEventListener('click', () => {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');
    
    const symbols = ['🍒', '🍋', '🔔', '🍉', '⭐'];
    
    const spin = (reel) => {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        reel.style.transform = `translateY(-${randomIndex * 100}px)`;
        return symbols[randomIndex];
    };
    
    const symbol1 = spin(reel1);
    const symbol2 = spin(reel2);
    const symbol3 = spin(reel3);
    
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        result.textContent = 'Ви виграли!';
    } else {
        result.textContent = 'Спробуйте ще раз!';
    }
});
