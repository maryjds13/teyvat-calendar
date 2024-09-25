const daysContainer = document.getElementById('days-container');

// Get today's date
const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Get the number of days in the current month
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Get the first day of the month (to determine where the grid starts)
let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sunday, 1 is Monday, etc.

// Adjust so that Monday is treated as the first day of the week
firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

// Create empty slots for days before the 1st (to align the grid)
for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyElement = document.createElement('span');
    emptyElement.classList.add('empty');
    daysContainer.appendChild(emptyElement);
}

// Generate all the days of the current month
for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('span');
    dayElement.textContent = day;

    // Highlight the current day
    if (day === currentDate) {
        dayElement.classList.add('today'); // Apply the lavender highlight
    }

    daysContainer.appendChild(dayElement);
}
