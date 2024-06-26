document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
});

document.getElementById('letter').addEventListener('click', function(event) {
    event.stopPropagation();
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});


function openNewPage() {
    window.location.href = "start/friends.html";
}