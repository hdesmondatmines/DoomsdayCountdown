$(document).ready(function() {
    var clock = $('#your-clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                alert('The countdown has ended!');
            }
        }
    });

    // Set time for 5 years later as an example
    var futureTime = 5 * 365 * 24 * 60 * 60; // convert years to seconds
    clock.setTime(futureTime);
    clock.setCountdown(true);
    clock.start();

    // Update countdown every 24 hours
    setInterval(function() {
        let change = Math.random() * 10000 - 5000; // example change
        let currentTime = clock.getTime().time + change;
        clock.setTime(currentTime > 0 ? currentTime : 0);
    }, 86400000);
});
