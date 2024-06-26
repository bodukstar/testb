document.getElementById('static-cat').addEventListener('click', function() {
    document.getElementById('static-cat').classList.add('hidden');
    document.getElementById('animated-cat').classList.remove('hidden');

    setTimeout(function() {
        window.location.href = '../step_3/level3.html'; // замініть на адресу вашої нової сторінки
    }, 1700); // Затримка у 1700 мілісекунд (1,7 секунди)
    
});

document.getElementById('static-y2').addEventListener('click', function() {
    document.getElementById('static-y2').classList.add('hidden');
    document.getElementById('animated-y2').classList.remove('hidden');
});
