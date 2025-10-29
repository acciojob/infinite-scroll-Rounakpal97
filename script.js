// Get the list element
const list = document.getElementById('list');

// Counter to keep track of item numbers
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

// Function to check if user has scrolled to the bottom
function handleScroll() {
    // Check if the user reached the bottom of the list
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(2); // Add 2 more items
    }
}

// Attach scroll event to the list
list.addEventListener('scroll', handleScroll);
