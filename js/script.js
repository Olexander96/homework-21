$( document ).ready(function() {
    
    // Створення анімованого кола рейтингу
    const CIRCLE = document.querySelector('.progress-ring--circle')
    const RADIUS = CIRCLE.r.baseVal.value;
    const CIRCLE_LENGTH = 2 * Math.PI * RADIUS;

    CIRCLE.style.strokeDasharray = `${CIRCLE_LENGTH} ${CIRCLE_LENGTH}`;
    CIRCLE.style.strokeDashoffset = CIRCLE_LENGTH;

    function setProgress(rating) {
        const OFFSET = CIRCLE_LENGTH - rating / 100 * CIRCLE_LENGTH;
        CIRCLE.style.strokeDashoffset = OFFSET;
    }

    const RATING = document.querySelector('.rating_value')
        RATING_VALUE = RATING.textContent * 10;
    setProgress(RATING_VALUE)//бере значення з рейтингу

    // hover ефект для посилань
    const LINK_ICON = $('.link_icon');

    LINK_ICON.mouseover( function () {
        $(this).addClass('link_icon-active');
    })
    LINK_ICON.mouseout( function () {
        $(this).removeClass('link_icon-active')
    })

    const LINK_TEXT = $('.link_text');

    LINK_TEXT.mouseover( function () {
        $(this).addClass('link_text-active')
    })
    LINK_TEXT.mouseout( function () {
        $(this).removeClass('link_text-active')
    })

    //анімація stars 

    const STARS = $('.star');

    STARS.on('mouseover', function () {
        $(this).addClass('star--active-mouse');
        $(this).prevAll().addClass('star--active-mouse');
    })
    STARS.on('mouseout', function () {
        $(this).removeClass('star--active-mouse');
        $(this).prevAll().removeClass('star--active-mouse');
    })

    STARS.on('click', function () {
        $(this).toggleClass('star--active');
        $(this).prevAll().toggleClass('star--active');
    })

    
});





    



    