
// スクロール量によってscroll_onを付与する関数
$(window).on("scroll load resize", function(){

    const windowHeight = window.innerHeight;
    console.log('画面の縦サイズは' + windowHeight + 'pxです');

    // const header_height = document.getElementById('header').innerHeight;
    const header_height = document.getElementById('header').clientHeight;
    console.log('headerの高さは' + header_height + 'pxです')

    const scroll = $(window).scrollTop();
    console.log('今は' + scroll + 'px スクロールしています');

    console.log('headerが隠れるまで残り'  + (header_height-scroll) + 'px')

    if (scroll > header_height) {
        $('.header').addClass('scroll_on');
    } else {
        $('.header').removeClass('scroll_on');
        $('.header').removeClass('open');
    }

});

// ハンバーガーメニューをクリックするとメニューが開く関数
$(function() {
    $('.scroll_button').click(function() {
        $('.header').toggleClass('open');
    });
});

// フェイドイン画面の関数
$(function() {
	setTimeout(function(){
		$('.fadein_maincopy').fadeIn(1000);
	},500);

    setTimeout(function(){
		$('.fadein_subcopy').fadeIn(1000);
	},1500);


	setTimeout(function(){
		$('.fadein_page').fadeOut(1000);
	},3000);
});


$(function() {
    $('.service_box').hover(function(){
        $(this).toggleClass('on');
    });
});
