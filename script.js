$(document).ready(function() {
    var clock = $('#your-clock').FlipClock({
        clockFace: 'DailyCounter', // Keeps it to days, hours, minutes, and seconds
        autoStart: false,
        countdown: true,
        language: 'english'
    });

    // Calculate seconds for 5 years (approximation)
    var totalSeconds = 5 * 365 * 24 * 60 * 60;
    clock.setTime(totalSeconds);
    clock.start();

    function randomizeCountdown() {
        if (Math.random() < 0.05) {  // Adjusted probability to 5%
            let randomTime = Math.floor(Math.random() * totalSeconds);
            clock.setTime(randomTime);
        }
    }

    // Ensure all displays are two digits
    setInterval(function() {
        $('.flip-clock-wrapper ul').each(function () {
            var digits = $(this).find('li.flip-clock-active');
            if (digits.text().length < 2) {
                digits.text('0' + digits.text());
            }
        });
        randomizeCountdown();
    }, 5000); // Adjust timing as needed
});
