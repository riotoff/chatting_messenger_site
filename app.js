$(document).ready(function(){
    // Плавная прокрутка до нужной секции
    $('.menu a').on('click', function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // Появление элементов при прокрутке
    $(window).on('scroll', function(){
        $('.fade-in').each(function(){
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(elementPos < topOfWindow + $(window).height() - 200){
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    });
});