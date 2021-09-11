$(document).ready(function(){
    
   
    //cont
    var $play = [
        ["cont_01.png", "play_icon.png", "죄 많은 소녀 (After My Death, 2019)"],
        ["cont_02.jpeg", "play_icon.png", "소공녀 (Microhabitat, 2020)"],
        ["cont_03.jpg", "play_icon.png", "벌새 (House of Hummingbird, 2018)"],
    ]
    console.log($play)

    var $bar = `
    <div class="box">
        <div class="cont">
            <img src="" alt="">
            <a href=""><img src="" alt=""></a>
        </div>
        <h2></h2>
    </div>
    `;

    for(i=0; i<$play.length; i++){
       $("#cont .content").append($bar)
    }

    $("#cont .box").each(function(i){
       $(this).find("img").attr("src", "./img/"+$play[i][0]);
       $(this).find("a img").attr("src", "./img/"+$play[i][1]);
       $(this).find("h2").text($play[i][2]);
    })


    //actors
    var $actor = [
        ["yeobeen.png", "전여빈", "필모그래피"],
        ["saebyeok.png", "김새벽", "필모그래피"],
        ["sanghee.png", "이상희", "필모그래피"],
        ["yeeun.png", "김예은", "필모그래피"],
        ["hakju.png", "이학주", "필모그래피"],
        ["jungmin.png", "박정민", "필모그래피"],
    ]
    console.log($actor)

    var $bag = `
    <div class="box">
        <div class="txt_part">
            <p></p>
            <a class="btn" href=""></a>
        </div>
        <img src="" alt="">
    </div>
    `;

    for(i=0; i<$actor.length; i++){
        $("#actors .people").append($bag)
    }

    $("#actors .box").each(function(i){
        $(this).find("img").attr("src", "./img/"+$actor[i][0]);
        $(this).find("p").text($actor[i][1]);
        $(this).find(".btn").text($actor[i][2]);
    })


    //슬라이드 
    setInterval(function(){
        var $first = $("#review ul li").first();
        console.log($first);
        $("#review ul").stop().animate({"margin-left":"-100%"}, 2000, function(){
            $("#review ul").append($first).css("margin-left", "0%");
        });
    }, 5000);

    


});