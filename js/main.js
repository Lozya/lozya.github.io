window.onload = function () {
    var burgerMenu = document.querySelector('.burgerMenu');
    var burgerMenuItems = document.querySelector('.burgerMenu__burgerMenuItems');
    var leftSlider = document.querySelector('#left');
    var rightSlider = document.querySelector('#right');
    var line = document.querySelector('.partnersSection__slider');
    var left = 0;

    burgerMenu.onclick = function(){
        burgerMenuItems.classList.toggle('burgerMenu__burgerMenuItems-active');
    };

    leftSlider.onclick = function()
    {
        if(window.matchMedia('all and (max-width: 700px)').matches) {
            left = left - 267;

            if (left < -534) {
                left = 0;
            }
            line.style.left = left + 'px';
        } else {
            if (window.matchMedia('all and (max-width: 1024px)').matches) {
                left = left - 267;

                if (left <= -534) {
                    left = 0;
                }
                line.style.left = left + 'px';
            }
        }
    };
    rightSlider.onclick = function()
    {
        if(window.matchMedia('all and (max-width: 700px)').matches) {
            left = left + 267;

            if (left >= 267) {
                left = -534;
            }
            line.style.left = left + 'px';
        }else {
            if (window.matchMedia('all and (max-width: 1024px)').matches) {
                left = left + 267;

                if (left >= 267) {
                    left = -267;
                }
                line.style.left = left + 'px';
            }
        }
    };
};


