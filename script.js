document.addEventListener('DOMContentLoaded', function() {
    const baseTime = new Date(Date.now());
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
        if (Math.random() < 0.1) { // 10% chance to trigger a random change
            const randomYears = Math.floor(Math.random() * 201); // Random number between 0 and 200
            endTime = new Date(baseTime.getTime() + randomYears * 365 * 24 * 60 * 60 * 1000);
        }
    }

    setInterval(updateCountdown, 1000);
    setInterval(randomizeCountdown, 5000); // Randomize every 5 seconds
});
