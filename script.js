const list = document.getElementById('infi-list');
let counter = 1;

// Function to add list items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${counter}`;
        list.appendChild(li);
        counter++;
    }
}

// Add initial 10 items
addItems(10);

// Function to detect scroll near the bottom
function handleScroll() {
    // Trigger when user scrolls within 5px of the bottom
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
        addItems(2);
    }
}

// Attach scroll listener
list.addEventListener('scroll', handleScroll);
