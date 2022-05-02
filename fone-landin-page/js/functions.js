
    $(function () {
        $(".hamburgue").click(function(){
            $(".mobile").slideToggle(1000);
            $(".hamburgue").find(".mobile");
        });
        var indiceAtual = 0;
        var indiceMaximo = $('.container img').length;
        var delay = 5000;
    
        initSlider();
        cliqueSlider();
    
        function initSlider() {
            for(var i = 0; i < indiceMaximo; i++){
                if(i ==0){
                 $('.bullets-nav').append('<div style="background-color:#ca3b3a;" class="ball"></div>');
                }else{ 
                    $('.bullets-nav').append(' <div class="ball"></div>');
    
                }
            }
           $('.container img').eq(0).fadeIn();
            clearInterval(function () {
                alternarSlider();
            },stop);
    
        }
    
        function cliqueSlider() {
            $('.bullets-nav div.ball').click(function () {
                $('.container img').eq(indiceAtual).fadeOut(600);
                indiceAtual = $(this).index();
                $('.container img').eq(indiceAtual).stop().fadeIn(600);
                $('.bullets-nav div.ball').css({'background-color':'#ccc'});
                $(this).css({'background-color':'#ca3b3a'});
            });
    
        }
      function alternarSlider() {
            $('.container img').eq(indiceAtual).stop().fadeOut(500);
            indiceAtual += 1;
            if (indiceAtual == indiceMaximo)
                indiceAtual = 0;
            $('.bullets-nav div.ball').css({'background-color':'#ccc'});
            $('.bullets-nav div.ball').eq(indiceAtual).css({'background-color':'#ca3b3a'});
            $('.container img').eq(indiceAtual).stop().fadeIn(500);
        }
    });
