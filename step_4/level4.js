let score = 0;

function createMoney() {
    const money = document.createElement('img');
    money.src = 'xt.gif'; // Заміни на шлях до твоєї гіфки грошей
    money.classList.add('money');
    money.style.top = `${Math.random() * (window.innerHeight - 120)}px`; // Випадкове положення в межах екрану
    money.style.left = `${window.innerWidth}px`;

    document.getElementById('game-container').appendChild(money);

    animateMoney(money);
}

function animateMoney(money) {
    const duration = Math.random() * 3000 + 2000; // Випадкова тривалість анімації від 2 до 5 секунд

    const keyframes = [
        { transform: `translateX(-${window.innerWidth + 120}px)`, offset: 1 }
    ];

    money.animate(keyframes, {
        duration: duration,
        easing: 'linear',
        iterations: 1,
        fill: 'forwards'
    });

    setTimeout(() => {
        if (money) {
            money.remove();
        }
    }, duration);
}

function checkCollision(player, money) {
    const playerRect = player.getBoundingClientRect();
    const moneyRect = money.getBoundingClientRect();

    return !(
        playerRect.top > moneyRect.bottom ||
        playerRect.bottom < moneyRect.top ||
        playerRect.left > moneyRect.right ||
        playerRect.right < moneyRect.left
    );
}

function handleMoneyCatch(player) {
    const monies = document.querySelectorAll('.money');

    monies.forEach(money => {
        if (checkCollision(player, money)) {
            score++;
            money.remove();
            if (score >= 15) {
                window.location.href = 'set.html'; // Використовуйте правильний відносний шлях
            }
        }
    });
}

setInterval(createMoney, 1000);

const player = document.getElementById('player');
player.style.left = '50%';
player.style.top = '50%';

function makeDraggable(element) {
    let shiftX, shiftY;

    function moveAt(pageX, pageY) {
        element.style.left = pageX - shiftX + 'px';
        element.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        handleMoneyCatch(player);
    }

    function onTouchMove(event) {
        moveAt(event.touches[0].pageX, event.touches[0].pageY);
        handleMoneyCatch(player);
    }

    element.addEventListener('mousedown', function(event) {
        event.preventDefault();

        shiftX = event.clientX - element.getBoundingClientRect().left;
        shiftY = event.clientY - element.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    element.addEventListener('touchstart', function(event) {
        shiftX = event.touches[0].clientX - element.getBoundingClientRect().left;
        shiftY = event.touches[0].clientY - element.getBoundingClientRect().top;

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', function() {
            document.removeEventListener('touchmove', onTouchMove);
        }, { once: true });
    });

    element.ondragstart = function() {
        return false;
    };
}

makeDraggable(player);
