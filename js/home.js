$(function () {
    // alert("ボタンがクリックされました！");



    // to-topボタンのスクロール

    $(".top-btn").hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {    //スクロール量が500以上になったら、
            $(".top-btn").fadeIn(500);       //.to-topを0.5秒かけてフェードインさせる。
        } else {                              //そうでなければ、
            $(".top-btn").fadeOut(500);      //.to-topを0.5秒かけてフェードアウトさせる。
        }
    });


    // スムーススクロール
    $(".top-btn").click(function () {                   //.to-topの中のaタグがクリックされたとき、
        $("html,body").animate({ scrollTop: 0 }, 500);    //0.5秒かけて画面の一番上までスクロールするアニメーションを実行
        return false;
    });




    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,        // 自動再生を有効にする
        autoplaySpeed: 2000 ,   // 自動再生のスピード（ミリ秒単位、ここでは2秒ごと）
        arrows:false,
        
    });


    

});