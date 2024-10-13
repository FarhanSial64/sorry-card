function showCard() {
    document.getElementById('clickMeDiv').style.display = 'none';
    document.getElementById('card').style.display = 'block';
    startFlowerShower();
}

function startFlowerShower() {
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.textContent = '🌸';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(flower);
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}

function showHearts() {
    document.getElementById('sendLoveButton').disabled = true;
    clearScreen();
    showImages();
    startHeartShower();
}

function clearScreen() {
    const elements = document.querySelectorAll('.flower, .heart');
    elements.forEach(el => el.remove());
}

function startHeartShower() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

function showImages() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear existing images
    imageContainer.style.display = 'block';

    const images = [
        
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        imageContainer.appendChild(img);
    });
}
