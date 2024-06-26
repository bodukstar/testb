document.addEventListener("DOMContentLoaded", function() {
    // Затримка 3 секунди перед запуском ефекту згасання
    setTimeout(function() {
        var textElement = document.getElementById("blackText");
        textElement.classList.add("fade-out");

        setTimeout(function() {
            window.location.href = '../happy/happy.html'
        }, 1000);
        
    }, 12000); // 3000 мілісекунд = 3 секунди
    
    
});
