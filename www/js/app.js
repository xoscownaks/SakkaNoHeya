// This is a JavaScript file

/****************************************
 사이드 메뉴 클릭시 페이지 이동 정의 
 * *************************************/
    window.fn = {};
    
    window.fn.open = function() {
      var menu = document.getElementById('menu');
      menu.open();
    };
    
    window.fn.load = function(page) {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load(page)
        .then(menu.close.bind(menu));
    };


/******************************************
 * 이미지 슬라이드 부분
 * ****************************************/
    ons.ready(function(){
       
        //메인 페이지 상단 부분
        $('.contents').slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:4000,
            arrows:false,
            pauseOnHover:false
        });
        //인기-오늘의 베스트 부분
        $('.todayBest').slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:4000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        //인기-판타지 베스트 부분
        $('.fantasyBest').slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:4000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        //인기-로맨스 베스트 부분
        $(".romanceBest").slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:4000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        
        $(".novelAnother").slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:4000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        /*이미지 슬라이드 부분에 추가*/ 
        $(".differentWork").slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:4000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:4,
            slidesToScroll:3        
        });

         //소설 읽기에서 화면을 터치 할시 
        $(document).on('click', '#novelArea', function() {
            $('#novelHeader').slideToggle(200);
            $('#novelFooter').slideToggle(200);
            
        })
        //소설읽기 에서 뷰어설정을 누르면 
        $(document).on('click', '#viewSettings', function() {
            $('#viewSettingForm').slideToggle(200);
            
        })
        //소설읽기에서 뷰어설정 창에서 X를 누르면 
        $(document).on('click', '#viewerClose', function() {
            $('#viewSettingForm').slideToggle(200);
            
        })
    });
         
  
/*****************************************
 * 메인화면에서 인기, 요일 에 따라 내용이 바뀜 
**************************************/
    
    window.bodyChange = function(body){
        var obj1 = document.getElementById('popular');
        var obj2 = document.getElementById('week');
        var monday = document.getElementById('monday');
        
        if(body == "popular"){
            obj1.style.display="block";
            obj2.style.display="none";
        }
        if(body == "week"){
            obj1.style.display="none";
            obj2.style.display="block";
            monday.style.display="block";
        }
    }
    
    /*****************************
     * 메인화면에서 요일에서 상세 요일 별로 보여주는 부분
    ********************************/
    window.weekChange = function(weekend){
        var monday = document.getElementById('monday');
        var tuesday = document.getElementById('tuesday');
        var wednesday = document.getElementById('wednesday');
        var thursday = document.getElementById('thursday');
        var friday = document.getElementById('friday');
        var saturday = document.getElementById('saturday');
        var sunday = document.getElementById('sunday');
        
        if(weekend == "monday"){
            monday.style.display = "block";
            tuesday.style.display = "none";
            wednesday.style.display = "none";
            thursday.style.display = "none";
            friday.style.display = "none";
            saturday.style.display = "none";
            sunday.style.display = "none";
        }
        
        if(weekend == "tuesday"){
            monday.style.display = "none";
            tuesday.style.display = "block";
            wednesday.style.display = "none";
            thursday.style.display = "none";
            friday.style.display = "none";
            saturday.style.display = "none";
            sunday.style.display = "none";
        }
        
        if(weekend == "wednesday"){
            monday.style.display = "none";
            tuesday.style.display = "none";
            wednesday.style.display = "block";
            thursday.style.display = "none";
            friday.style.display = "none";
            saturday.style.display = "none";
            sunday.style.display = "none";
        }
        
        if(weekend == "thursday"){
            monday.style.display = "none";
            tuesday.style.display = "none";
            wednesday.style.display = "none";
            thursday.style.display = "block";
            friday.style.display = "none";
            saturday.style.display = "none";
            sunday.style.display = "none";
        }
        
        if(weekend == "friday"){
            monday.style.display = "none";
            tuesday.style.display = "none";
            wednesday.style.display = "none";
            thursday.style.display = "none";
            friday.style.display = "block";
            saturday.style.display = "none";
            sunday.style.display = "none";
        }
        
        if(weekend == "saturday"){
            monday.style.display = "none";
            tuesday.style.display = "none";
            wednesday.style.display = "none";
            thursday.style.display = "none";
            friday.style.display = "none";
            saturday.style.display = "block";
            sunday.style.display = "none";
        }
        
        if(weekend == "sunday"){
            monday.style.display = "none";
            tuesday.style.display = "none";
            wednesday.style.display = "none";
            thursday.style.display = "none";
            friday.style.display = "none";
            saturday.style.display = "none";
            sunday.style.display = "block";
        }
    }


/***********************************
 * 아이디, 비밀번호 찾기에서 버튼을 누를시 내용을 보이고 숨김
*************************************/
    window.idPwChange = function(idPw){
        var idSearch = document.getElementById("idSearch");
        var pwSearch = document.getElementById("pwSearch");
        if(idPw=="id"){
            idSearch.style.display="block";
            pwSearch.style.display="none";
        }
        if(idPw=="pw"){
            idSearch.style.display="none";
            pwSearch.style.display="block";
        }
    }
    
    /**************************************
     소설 읽는 부분에서 회차 이동 기능 하는 함수 
     ********************************/
    function editSelects(event) {
        alert(event.target.value);
    }
    


    /******************************************
     * 특정 소설 페이지 툴바 드랍다운메뉴
     * ****************************************/
    var showPopover = function(target) {
      document.getElementById('popover').show(target);
    };

    /******************************************
     * 추천, 관심등록 버튼
     * ****************************************/
          function itGood(){
         var result = $('#good');
         if(result.hasClass("fa fa-heart-o") == true){
            $.confirm({
                useBootstrap: false,
                 boxWidth: '80%',
                title: '안내!',
                content: '추천 하시겠습니까?!',
                buttons: {
                    OK: function () {
                        $.alert('등록되었습니다!');
                        result.prop('class', 'fa fa-heart info');
                    },
                    CANCEL: function () {
                        return;
                    },
                }
            });
            }else if(result.hasClass("fa fa-heart-o") == false){
             $.confirm({
                 useBootstrap: false,
                 boxWidth: '80%',
                title: '안내!',
                content: '추천 취소하시겠습니까?!',
                buttons: {
                    OK: function () {
                        $.alert('취소되었습니다!');
                        result.prop('class', 'fa fa-heart-o');
                    },
                    CANCEL: function () {
                        return;
                    },
                }
            });
        };
     };
     
     function Favorite(){
         var result = $('#Favorite');
         if(result.hasClass("fa fa-star-o") == true){
            $.confirm({
                useBootstrap: false,
                 boxWidth: '80%',
                title: '안내!',
                content: '선호작품 등록하시겠습니까?',
                buttons: {
                    OK: function () {
                        $.alert('등록되었습니다!');
                        result.prop('class', 'fa fa-star');
                    },
                    CANCEL: function () {
                        return;
                    },
                }
            });
            }else if(result.hasClass("fa fa-star-o") == false){
             $.confirm({
                 useBootstrap: false,
                 boxWidth: '80%',
                title: '안내!',
                content: '선호작품 등록취소하시겠습니까?',
                buttons: {
                    OK: function () {
                        $.alert('취소되었습니다!');
                        result.prop('class', 'fa fa-star-o');
                    },
                    CANCEL: function () {
                        return;
                    },
                }
            });
        };
     };
     
         /******************************************
     * 더보기 클릭시
     * ****************************************/
        
        $(window).on('load', function () {
            load('#js-load', '4');
            $("#js-btn-wrap .button").on("click", function () {
                load('#js-load', '4', '#js-btn-wrap');
            })
        });
         
        function load(id, cnt, btn) {
            var girls_list = id + " .js-load:not(.active)";
            var girls_length = $(girls_list).length;
            var girls_total_cnt;
            if (cnt < girls_length) {
                girls_total_cnt = cnt;
            } else {
                girls_total_cnt = girls_length;
                $('.button').hide();
            }
            $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
        }
    
    
    /***********************************
     * 소설읽는 화면의 뷰어를 설정하는 기능
     * ***********************************/
    window.mainReadNovelSettings = function(settings){
        
        //초기화
        if(settings == "init"){
            $('#novelAreaText').css('font-family','Noto Sans');
            $('#novelAreaText').css('font-size','20px');
            $('#novelAreaText').css('line-height','150%');
            $('#novelAreaText').css('color','black');
            $('#novelArea').css('background-color','white');
        }
        //나눔고딕
        if(settings == "nanum"){
             $('#novelAreaText').css('font-family','Nanum Gothic');
        }
        //돋움
        if(settings == "Jeju"){
            $('#novelAreaText').css('font-family','Jeju Myeongjo');
        }
        //궁서
        if(settings == "Hanna"){
            $('#novelAreaText').css('font-family','Hanna');
        }
        //글씨 크기 20
        if(settings == "size20"){
            $('#novelAreaText').css('font-size','20px');
        }
        //글씨 크기 22
        if(settings == "size22"){
            $('#novelAreaText').css('font-size','22px');
        }
        //글씨 크기 24
        if(settings == "size24"){
            $('#novelAreaText').css('font-size','24px');
        }
        //글씨 크기 26
        if(settings == "size26"){
            $('#novelAreaText').css('font-size','26px');
        }
        //줄간격 160%
        if(settings == "line160"){
            $('#novelAreaText').css('line-height','160%');
        }
        //줄간격 170%
        if(settings == "line170"){
            $('#novelAreaText').css('line-height','170%');
        }
        //줄간격 180%
        if(settings == "line180"){
            $('#novelAreaText').css('line-height','180%');
        }
        //줄간격 190%
        if(settings == "line190"){
            $('#novelAreaText').css('line-height','190%');
        }
        //줄간격 200%
        if(settings == "line200"){
            $('#novelAreaText').css('line-height','200%');
        }
        //글자색 white
        if(settings == "fontColor-white"){
            $('#novelAreaText').css('color','white');
        }
        //글자색 black
        if(settings == "fontColor-black"){
            $('#novelAreaText').css('color','black');
        }
        //배경색 white
        if(settings == "backgroundColor-white"){
            $('#novelArea').css('background-color','white');
        }
        //배경색 255,211,128
        if(settings == "backgroundColor-255,211,128"){
            $('#novelArea').css('background-color','rgb(255,212,128)');
        }
         //배경색 255,211,128
        if(settings == "backgroundColor-230,255,230"){
            $('#novelArea').css('background-color','rgb(230,255,230)');
        }
         //배경색 255,211,128
        if(settings == "backgroundColor-244,204,255"){
            $('#novelArea').css('background-color','rgb(244,204,255)');
        }
        //배경색 255,211,128
        if(settings == "backgroundColor-black"){
            $('#novelArea').css('background-color','black');
        }
    }







