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
         //소설 읽기에서 화면을 터치 할시 
        $(document).on('click', '#novelArea', function() {
            $('#novelHeader').slideToggle(400);
            $('#novelFooter').slideToggle(400);
            
           
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


/**********
 * 아이디, 비밀번호 찾기에서 버튼을 누를시 내용을 보이고 숨김
***********/
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
      document.getElementById('choose-sel').removeAttribute('modifier');
      if (event.target.value == 'material' || event.target.value == 'underbar') {
        document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
      }
    }
    function addOption(event) {
      const option = document.createElement('option');
      let text = document.getElementById('optionLabel').value;
      option.innerText = text;
      text = '';
      document.getElementById('dynamic-sel').appendChild(option);
    }
    


    /******************************************
     * 특정 소설 페이지 툴바 드랍다운메뉴
     * ****************************************/
    var showPopover = function(target) {
      document.getElementById('popover').show(target);
    };

    /******************************************
     * 좋아요, 즐겨찾기 버튼
     * ****************************************/
     function itGood(){
         var result = $('#good');
         if(result.hasClass("fa fa-heart-o") == true){
            var r = confirm("좋아요를 하시겠습니까?");
            if(r == true){
                result.prop('class', 'fa fa-heart info');
            }else if(r == false){
                return;
            }    
         }else if(result.hasClass("fa fa-heart-o") == false){
             var r = confirm("좋아요를 취소하시겠습니까?");
             if(r == true){
                 result.prop('class', 'fa fa-heart-o');
             }else if(r == false){
                 return;
             }
         }
     };

     function bookMark(){
        var result = $('#bookmark');
         if(result.hasClass("fa fa-star-o") == true){
            var r = confirm("선호작품 등록하시겠습니까?");
            if(r == true){
                result.prop('class', 'fa fa-star');
            }else if(r == false){
                return;
            }    
         }else{
             var r = confirm("선호작품 등록취소하시겠습니까??");
             if(r == true){
                 result.prop('class', 'fa fa-star-o');
             }else if(r == false){
                 return;
             }
         }
 };









