// $('.hamburger').on('click',function(){
//      $('.top-menu-item').slideToggle();
// });





// $('.clear-case2, .clear-case4, .lear-case6').hover(function(){
//     $('Production').stop().fadeToggle();
// });







// $('.box').hover(function(){
//     $(this).children('p').stop().fadeToggle();
// });








// オプションを指定してSkipprの実行
$("#container").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'bubble',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 2000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
});











$('.Natsumi').on('click',function(){
    $('.profile_container-box1').slideToggle();
});



$('.Tomoko').on('click',function(){
    $('.profile_container-box2').slideToggle();
});

$('.Sakura').on('click',function(){
    $('.profile_container-box3').slideToggle();
});

$('.Nobuko').on('click',function(){
    $('.profile_container-box4').slideToggle();
});

$('.Rie').on('click',function(){
    $('.profile_container-box5').slideToggle();
});

$('.Shizuka').on('click',function(){
    $('.profile_container-box6').slideToggle();
});








$('.menu').on('click',function(){
    $('.header_nav-list-item').slideToggle();
});





// $(function(){
//     $( 'Natsumi')
//       .bind( 'touchstart', function(){
//         $( this ).addClass( 'hover' );
//     }).bind( 'touchend', function(){
//         $( this ).removeClass( 'hover' );
//     });
// });





// $(function(){
//     $( 'Tomoko')
//       .bind( 'touchstart', function(){
//         $( this ).addClass( 'hover' );
//     }).bind( 'touchend', function(){
//         $( this ).removeClass( 'hover' );
//     });
// });





// $(function(){
//     $( 'Sakura')
//       .bind( 'touchstart', function(){
//         $( this ).addClass( 'hover' );
//     }).bind( 'touchend', function(){
//         $( this ).removeClass( 'hover' );
//     });
// });



// $(function(){
//     $( 'Nobuko')
//       .bind( 'touchstart', function(){
//         $( this ).addClass( 'hover' );
//     }).bind( 'touchend', function(){
//         $( this ).removeClass( 'hover' );
//     });
// });


// $(function(){
//     $( 'Rie')
//       .bind( 'touchstart', function(){
//         $( this ).addClass( 'hover' );
//     }).bind( 'touchend', function(){
//         $( this ).removeClass( 'hover' );
//     });
// });




// $(function(){
//     $( 'Shizuka')
//       .bind( 'touchstart', function(){
//         $( this ).addClass( 'hover' );
//     }).bind( 'touchend', function(){
//         $( this ).removeClass( 'hover' );
//     });
// });






// wow.jsを起動するコード
new WOW().init();




// $("#theTarget").skippr({
//     // スライドショーの変化 ("fade" or "slide")
//     transition : 'fade',
//     // 変化に係る時間(ミリ秒)
//     speed : 1000,
//     // easingの種類
//     easing : 'easeOutQuart',
//     // ナビゲーションの形("block" or "bubble")
//     navType : 'block',
//     // 子要素の種類("div" or "img")
//     childrenElementType : 'div',
//     // ナビゲーション矢印の表示(trueで表示)
//     arrows : true,
//     // スライドショーの自動再生(falseで自動再生なし)
//     autoPlay : false,
//     // 自動再生時のスライド切替間隔(ミリ秒)
//     autoPlayDuration : 5000,
//     // キーボードの矢印キーによるスライド送りの設定(trueで有効)
//     keyboardOnAlways : true,
//     // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
//     hidePrevious : false
// });
