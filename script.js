const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const sorryMessage = document.getElementById('sorry-message');
const container = document.querySelector('.container');

// Add an event listener to move the "Yes" button around the page
yesBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - yesBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - yesBtn.offsetHeight));

    yesBtn.style.position = 'absolute';
    yesBtn.style.left = `${randomX}px`;
    yesBtn.style.top = `${randomY}px`;

    yesBtn.style.transition = 'all 0.5s ease';  // Smooth movement
});

// Add an event listener to the "No" button to display the sorry message
noBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    sorryMessage.classList.remove('hidden');
});
