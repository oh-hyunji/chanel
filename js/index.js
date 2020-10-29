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

});