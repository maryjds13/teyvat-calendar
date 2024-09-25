const daysContainer = document.getElementById('days-container');

const today = new Date();
const currentDay = today.getDay(); // Sunday is 0, Monday is 1, and so on

// Array of the days, starting from Monday
const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Loop through and create the day elements
for (let i = 0; i < daysArray.length; i++) {
    const dayElement = document.createElement('span');
    dayElement.textContent = i + 1;

    // Highlight the current day
    if (currentDay === i + 1 || (currentDay === 0 && i === 6)) {
        dayElement.classList.add('today');
    }

    daysContainer.appendChild(dayElement);
}
