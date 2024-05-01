$(document).ready(function() {
    var clock = $('#your-clock').FlipClock({
        clockFace: 'YearlyCounter', // Changes to show years
        autoStart: false,
        countdown: true
    });
 
    // Set initial time, here example is roughly 5 years in seconds
    var fiveYearsInSeconds = 5 * 365 * 24 * 60 * 60;
    clock.setTime(fiveYearsInSeconds);
    clock.start();

    function randomizeCountdown() {
        if (Math.random() < 0.1) {  // Approximately 10% chance to trigger the random change
            let randomTime = Math.floor(Math.random() * fiveYearsInSeconds);
            clock.setTime(randomTime);
        }
    }

    // Function to ensure the seconds are always showing as two digits
    function adjustClockDisplay() {
        $('.flip').each(function(){
            var digit = $(this).find('.flip-clock-active').text();
            if (digit.length < 2) {
                $(this).find('.flip-clock-active').text('0' + digit);
            }
        });
    }

    setInterval(function() {
        adjustClockDisplay();  // Adjust the display
        randomizeCountdown();  // Possibly randomize the countdown
    }, 1000); // Every second check for adjustment and randomization
});
