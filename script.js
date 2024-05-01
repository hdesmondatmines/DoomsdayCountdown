document.addEventListener('DOMContentLoaded', function() {
    const endTime = new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000); // 5 years from now

    function updateCountdown() {
        const now = new Date();
        const totalSeconds = (endTime - now) / 1000;

        const years = Math.floor(totalSeconds / (3600 * 24 * 365));
        let remainder = totalSeconds % (3600 * 24 * 365);

        const days = Math.floor(remainder / (3600 * 24));
        remainder = remainder % (3600 * 24);

        const hours = Math.floor(remainder / 3600);
        remainder = remainder % 3600;

        const minutes = Math.floor(remainder / 60);
        const seconds = Math.floor(remainder % 60);

        const formattedTime = `${years} years, ${days} days, ${hours}h:${minutes}m:${seconds}s`;
        document.getElementById('your-clock').textContent = formattedTime;
    }

    updateCountdown(); // Update immediately on load
    setInterval(updateCountdown, 1000); // Then update every second
});
