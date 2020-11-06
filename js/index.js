var timeLoop;
var port = port || (function () {
    var cnt = 0;
    var textArr = ['마드모아젤의 사회적 거리 두기', '2020 홀리데이 메이크업 컬렉션', '시간이 흘러도 변치 않는 클래식한 향', '빛나는 광채로 끌어올리세요'];
    var titleArr = ['피트니스 에디션', '레 체인 도르 드 샤넬', 'N°5', '르 리프트'];
    function slide(btId) {
        $('.slide_img').removeClass('on');
        $('.mark').removeClass('slct');
        
        if(btId == 'right') {
            cnt++;    
        } else {
            cnt--;
        }

        if(cnt < 0) cnt = 3;
        if(cnt > 3) cnt = 0;

        $('.slide_img').eq(cnt).addClass('on');
        $('.mark').eq(cnt).addClass('slct');
        $('.slide_title strong').html(textArr[cnt]);
        $('.slide_title h1').html(titleArr[cnt]);

        if(cnt == 1) $('.slide_title').css('right','60%');
        else $('.slide_title').css('right','20%');

        if(cnt == 0) {
            $('.slide_title strong').css('color','#444');
            $('.slide_title h1').css('color','#000');
        } else {
            $('.slide_title strong').css('color','#fff');
            $('.slide_title h1').css('color','#fff');
        }

        timeLoop = setTimeout(function(){slide(btId);}, 3000);
    }

    return {
        slide : slide,
    }
})();

$(function(){
    setTimeout(function(){port.slide('right');}, 3000);

    $('.bt_box').on('click', function(){
        clearTimeout(timeLoop);

        var btId = $(this).attr('id');
        if(btId !== 'pause') {
            btId = (btId == 'play') ? 'right' : btId;
            port.slide(btId);

            $('#play').addClass('off');
            $('#pause').removeClass('off');
        } else {
            $('#pause').addClass('off');
            $('#play').removeClass('off');
        }
    });

    $('.se3_content').eq(0).css({'left':'0'});    
    $('.se3_slbt #seLeft').css({'opacity':'0', 'cursor':'none'});    

    var page = 0;
    var pageNum = 1;
    $('.se3_bt').on('click', function(){
        var btId = $(this).attr('id');
        if(pageNum == 1 && btId == 'seLeft') return;
        if(pageNum == 3 && btId == 'seRight') return;

        if(btId == 'seRight') {
            $('.se3_slbt #seLeft').css({'opacity':'1', 'cursor':'pointer'});    
            $('.se3_content').eq(page).css({'left':'-100%'});    
            page++;
            pageNum++;
        } else {
            $('.se3_slbt #seRight').css({'opacity':'1', 'cursor':'pointer'});    
            $('.se3_content').eq(page).css({'left':'100%'});    
            page--;
            pageNum--;
        }

        var pagelen = $('.se3_content').length;
        var count = pageNum + '/' + pagelen;
        $('.count').html(count);

        $('.se3_content').eq(page).animate({'left':'0'}, 500);

        if(page < 1) $('.se3_slbt #seLeft').css({'opacity':'0', 'cursor':'none'});
        if(page > 1) $('.se3_slbt #seRight').css({'opacity':'0', 'cursor':'none'});
    });

    $('.menu li').mouseenter(function(){
        $('.sub_box').css('display','none');
        $('.sub_box').css('opacity','0');

        $('.navi').css('margin-bottom','0');
        $('.menu li').removeClass('menu_on');

        var num = $(this).index();
        $(this).addClass('menu_on');

        $('.sub_box').eq(num).css('display','flex');
        $('.sub_box').eq(num).animate({'opacity':'1'}, 300);
    }).mouseleave(function(){
        var num = $(this).index();
        if(num == 3) {
            $('.menu li').removeClass('menu_on');
            $('.navi').css('margin-bottom','25px');
        }
    });

    $('.sub_close').on('click',function(){
        $('.menu li').removeClass('menu_on');
        $('.navi').css('margin-bottom','25px');
        $('.sub_box').animate({'opacity':'0'}, 300, function(){
            $('.sub_box').css('display','none');
        });
    });

    $('.login_icon').mouseenter(function(){
        $('.login').css('display','flex');
        $('.login').animate({'opacity':'1'});
    });

    $('.login_close').on('click',function(){
        $('.login').css('display','none');
        $('.login').animate({'opacity':'0'});
    });

    var slideHeigh = $('.slide_img img').height();
    $('#slideBox').height(slideHeigh);

    $(window).resize(function(){
        slideHeigh = $('.slide_img img').height();
        $('#slideBox').height(slideHeigh);
    });
});

    