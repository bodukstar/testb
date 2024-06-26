const food = document.getElementById('food');
const cats = document.querySelectorAll('.cat.animated-cat');
const nextButton = document.getElementById('next-button');
const counters = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};
const maxFeeds = 5;

function makeDraggable(element) {
    let shiftX, shiftY;

    element.addEventListener('mousedown', onMouseDown);
    element.addEventListener('touchstart', onTouchStart);

    function onMouseDown(event) {
        event.preventDefault();
        shiftX = event.clientX - element.getBoundingClientRect().left;
        shiftY = event.clientY - element.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp, { once: true });
    }

    function onTouchStart(event) {
        event.preventDefault();
        shiftX = event.touches[0].clientX - element.getBoundingClientRect().left;
        shiftY = event.touches[0].clientY - element.getBoundingClientRect().top;

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd, { once: true });
    }

    function moveAt(pageX, pageY) {
        element.style.left = `${pageX - shiftX}px`;
        element.style.top = `${pageY - shiftY}px`;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    function onTouchMove(event) {
        moveAt(event.touches[0].pageX, event.touches[0].pageY);
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        checkCollision();
    }

    function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        checkCollision();
    }
}

function checkCollision() {
    const foodRect = food.getBoundingClientRect();

    cats.forEach(cat => {
        const catRect = cat.getBoundingClientRect();

        if (
            foodRect.top < catRect.bottom &&
            foodRect.bottom > catRect.top &&
            foodRect.left < catRect.right &&
            foodRect.right > catRect.left
        ) {
            const catId = cat.getAttribute('data-id');
            counters[catId]++;
            document.getElementById(`counter-${catId}`).innerText = counters[catId];
            food.style.left = '50%';
            food.style.top = '20%';
            food.style.transform = 'translate(-50%, -50%)';

            if (counters[catId] >= maxFeeds) {
                const animatedCat = document.querySelector(`.animated-cat[data-id="${catId}"]`);
                const staticCat = document.querySelector(`.static-cat[data-id="${catId}"]`);
                animatedCat.style.display = 'none';
                staticCat.style.display = 'block';
            }
            checkAllCatsFed();
        }
    });
}

function checkAllCatsFed() {
    const allFed = Object.values(counters).every(count => count >= maxFeeds);
    if (allFed) {
        nextButton.style.display = 'block';
        nextButton.addEventListener('click', goToNextPage);
    }
}

function goToNextPage() {
    // Перенаправлення на нову сторінку
    window.location.href = '../byin/shop.html';
}

food.style.left = '50%';
food.style.top = '20%';
food.style.transform = 'translate(-50%, -50%)';
food.style.position = 'absolute';

makeDraggable(food);
