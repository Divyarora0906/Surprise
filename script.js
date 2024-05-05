// Function to create and append hearts
function createHearts() {
    // Remove any existing hearts
    document.querySelectorAll('.heart').forEach(function(heart) {
        heart.remove();
    });

    // Create and append hearts
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 150 + 'px';
        document.querySelector('.envelope').appendChild(heart);
    }

    // Remove the event listener after animation is triggered once
    document.querySelector('.wrapper').removeEventListener('click', createHearts);
}

// Attach event listener to the wrapper element
document.querySelector('.wrapper').addEventListener('click', createHearts);
