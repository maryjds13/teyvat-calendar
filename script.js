const daysContainer = document.getElementById('days-container');

// Get the current date and day of the week (0 = Sunday, 1 = Monday, etc.)
const today = new Date();
let currentDay = today.getDay(); 

// Map Sunday (0) to index 6 (Sunday is at the end)
currentDay = currentDay === 0 ? 6 : currentDay - 1; 

// Array of the days starting from Monday
const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Create day elements
for (let i = 0; i < daysArray.length; i++) {
    const dayElement = document.createElement('span');
    dayElement.textContent = i + 1;

    // Highlight the current day
    if (i === currentDay) {
        dayElement.classList.add('today');
    }

    daysContainer.appendChild(dayElement);
}
