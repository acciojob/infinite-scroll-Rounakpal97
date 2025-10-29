// Get the list element (assuming it has id="list")
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

// Function to detect if user has scrolled to the bottom
function handleScroll() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        // Add 2 more items when reaching bottom
        addItems(2);
    }
}

// Attach scroll event listener to the list
list.addEventListener('scroll', handleScroll);
