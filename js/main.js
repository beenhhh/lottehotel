//스크롤 되면 헤더 bottom만 고정
    let bottomTop  = $('.bottom').offset().top;
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if(scroll >= bottomTop){
            $('.header').css{'position':'relative'};
            $('.bottom').addClass('stick')
        }else{
            $('.bottom').removeClass('stick')
        }
    });