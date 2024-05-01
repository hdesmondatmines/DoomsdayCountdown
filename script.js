document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded. Setting up the countdown.");

    // Calculate the end time as 5 years from now
    const endTime = new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date();
        const totalSeconds = Math.floor((endTime - now) / 1000);

        if (totalSeconds <= 0) {
            document.getElementById('your-clock').textContent = "The countdown has finished!";
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

        console.log("Countdown updated:", formattedTime);
    }

    updateCountdown(); // Update immediately on load to ensure it's working
    setInterval(updateCountdown, 1000); // Update the countdown every second
});
