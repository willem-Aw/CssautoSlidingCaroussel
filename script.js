(function () {
    // check if the browser supports CSS animations
    var test = document.createElement('div');
    var hasAnimation = false;
    var prefixes = ['animation', 'WebkitAnimation', 'MozAnimation', 'OAnimation', 'msAnimation'];
    for (var i = 0; i < prefixes.length; i++) {
        if (test.style[prefixes[i]] !== undefined) {
            hasAnimation = true;
            break;
        }
    }

    // If no support, use JS fallback
    if (!hasAnimation) {
        document.body.classList.add('no-css-animation');

        var container = document.querySelector('.container');
        var slider = document.querySelector('.slider');
        if (!slider || !container) return;

        var speed = 0.5; // pixels per frame
        var x = 0;
        var paused = false;

        // animation loop function
        function scrollLoop() {
            if (!paused) {
                x -= speed;
                if (Math.abs(x) >= slider.scrollWidth / 2) {
                    x = 0; // réinitialiser pour effet de boucle
                }
                slider.style.left = x + 'px';
            }
            requestAnimationFrame(scrollLoop);
        }

        // event : pause on hover
        container.addEventListener('mouseenter', function () {
            paused = true;
        });
        container.addEventListener('mouseleave', function () {
            paused = false;
        });

        // start the loop
        scrollLoop();
    }
})();
