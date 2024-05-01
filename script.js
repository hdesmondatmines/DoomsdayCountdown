document.addEventListener('DOMContentLoaded', function() {
    let baseTime = new Date();
    let endTime = new Date(baseTime.getTime() + 5 * 365 * 24 * 60 * 60 * 1000); // Initially set to 5 years from now

    function updateCountdown() {
        const now = new Date();
        const totalSeconds = Math.floor((endTime - now) / 1000);

        if (totalSeconds <= 0) {
            document.getElementById('your-clock').textContent = "Time's up!";
            return;
        }
 
        const years = Math.floor(totalSeconds / (3600 * 24 * 365));
        let remainder = totalSeconds % (3600 * 24 * 365);

        const days = Math.floor(remainder / (3600 * 24));
        remainder %= (3600 * 24);

        const hours = Math.floor(remainder / 3600);
        remainder %= 3600;

        const minutes = Math.floor(remainder / 60);
        const seconds = remainder % 60;

        const formattedTime = `${years} years, ${days} days, ${hours}h:${minutes}m:${seconds}s`;
        document.getElementById('your-clock').textContent = formattedTime;
    }

    function randomizeCountdown() {
        if (Math.random() < 0.3) { // 30% chance to change years
            const randomYears = Math.floor(Math.random() * 100001); // Random number between 0 and 100,000
            endTime = new Date(baseTime.getTime() + randomYears * 365 * 24 * 60 * 60 * 1000);
        }
        if (Math.random() < 0.4) { // 40% chance to change days
            const randomDays = Math.floor(Math.random() * 366); // Random number between 0 and 365
            endTime.setDate(endTime.getDate() + randomDays - endTime.getDay());
        }
        if (Math.random() < 0.5) { // 50% chance to change hours
            const randomHours = Math.floor(Math.random() * 24); // Random number between 0 and 23
            endTime.setHours(endTime.getHours() + randomHours - endTime.getHours());
        }
        if (Math.random() < 0.6) { // 60% chance to change minutes
            const randomMinutes = Math.floor(Math.random() * 60); // Random number between 0 and 59
            endTime.setMinutes(endTime.getMinutes() + randomMinutes - endTime.getMinutes());
        }
    }

    setInterval(updateCountdown, 1000); // Update the countdown every second
    setInterval(randomizeCountdown, 2000); // Randomize every 2 seconds
});
