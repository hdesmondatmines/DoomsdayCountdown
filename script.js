$(document).ready(function() {
    var clock = $('#your-clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false
    });

    // Set initial time, just as an example, adjust as needed
    clock.setTime(31536000); // roughly 365 days in seconds
    clock.setCountdown(true);
    clock.start();

    function randomAdjustment() {
        let randomChange = Math.random() * 10000 - 5000; // Change range
        let currentTime = clock.getTime().time + randomChange;
        if (Math.random() > 0.95) { // 5% chance to hit zero and flash
            currentTime = 0;
            $('#your-clock').css('color', 'red');
            setTimeout(function() {
                $('#your-clock').css('color', '');
                clock.setTime(31536000); // reset to initial time after flashing
            }, 3000); // flash for 3 seconds
        }
        clock.setTime(currentTime > 0 ? currentTime : 0);
    }

    setInterval(randomAdjustment, 5000); // adjust every 5 seconds
});
