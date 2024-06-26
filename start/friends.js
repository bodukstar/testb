window.onload = function() {
    setTimeout(showSpeechBubble, 5000); // Показуємо вікно через (5000) 5 секунд
}

function showSpeechBubble() {
    document.getElementById('speech-bubble').style.display = 'block';
}

function makeChoice(choice) {
    if (choice === 'так') {
        window.location.href = '../step_1/level1.html'; // Замість 'yes.html' вкажіть шлях до потрібної сторінки
    } else if (choice === 'ні') {
        window.location.href = '../step_1/level1.html'; // Замість 'no.html' вкажіть шлях до потрібної сторінки
    }
}
