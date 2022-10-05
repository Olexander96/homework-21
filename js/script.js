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

    //анімація star rating - click(спроба зробити через цикл)

    const STARS = $('.star_icon');

    STARS.each(function() {
        $(this).on('click', function() {
            for(let i = 0; i <= $(this).index(); i++) {
                STARS.eq(i).addClass('star_icon-active');
            }
        })
    })
     

    //анімація star rating - click
    // const STAR_1 = $('.star_icon1');
    // const STAR_2 = $('.star_icon2');
    // const STAR_3 = $('.star_icon3');
    // const STAR_4 = $('.star_icon4');
    // const STAR_5 = $('.star_icon5');
    
    // STAR_1.on('click', function() {
    //     STAR_1.addClass('star_icon-activebg');
    // }) 

    // STAR_2.on('click', function() {
    //     STAR_1.addClass('star_icon-activebg');
    //     STAR_2.addClass('star_icon-activebg');
    // }) 
    // STAR_3.on('click', function() {
    //     STAR_1.addClass('star_icon-activebg');
    //     STAR_2.addClass('star_icon-activebg');
    //     STAR_3.addClass('star_icon-activebg');
    // }) 
    // STAR_4.on('click', function() {
    //     STAR_1.addClass('star_icon-activebg');
    //     STAR_2.addClass('star_icon-activebg');
    //     STAR_3.addClass('star_icon-activebg');
    //     STAR_4.addClass('star_icon-activebg');
    // }) 
    // STAR_5.on('click', function() {
    //     STAR_1.addClass('star_icon-activebg');
    //     STAR_2.addClass('star_icon-activebg');
    //     STAR_3.addClass('star_icon-activebg');
    //     STAR_4.addClass('star_icon-activebg');
    //     STAR_5.addClass('star_icon-activebg');
    // }) 

    
});





    



    