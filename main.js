$(function(){

    $('#open-hamb').click(function(){
        $(this).css('display','none');
        $('#close-hamb').css('display','block');

        $('.mobile-menu-items').css('right','0');
    })

    $('#close-hamb').click(function(){
        $(this).css('display','none');
        $('#open-hamb').css('display','block');

        $('.mobile-menu-items').css('right','-100%');
    })

    $('#botao-scroll').click(function(){
        $('html,body').animate({
            scrollTop: $('#section01').offset().top
        }, 1000);
    });

    $('#botao-scroll1').click(function(){
        $('html,body').animate({
            scrollTop: $('#section01').offset().top
        }, 1000);
    });

    $('#botao-scroll2').click(function(){
        $('html,body').animate({
            scrollTop: $('#section02').offset().top
        }, 1000);
    });

})