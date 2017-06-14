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
    
    //메뉴 닫기 함수 
    function menuClose(){
        var menu = document.getElementById('menu');
        menu.close();
    };
/******************************************
 * 이미지 슬라이드 부분
 * ****************************************/
    ons.ready(function(){
        //메인 carousel 상단 슬라이드 이미지 가져오기
        $.ajax({
                type:"get",
                url:"http://150.95.130.43/get_novel",
                success:function(data){                   
                    for(var i=0; i< 4;i++){
                        var body = "<div class='to-top'><img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:100%;height:200px;' onclick='showNovel("+data[i].id+")'></div>";
                        $(".contents").slick('slickAdd',body);
                   
                    }
    		    }
        });    
        
        //today's best 가져오기
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/today_best",
                data: {
            	},
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){                     
                         var body = "<div class='to-todayBest'><img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:100%;height:150px;' onclick='showNovel("+data[i].id+")'></div>";
                        $(".todayBest").slick('slickAdd',body);
                     
                    }
    		    }
        });
        //fantasy's best 가져오기
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/fantasy_best",
                data: {
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<div class='to-fantasytBest'>";
                        body += "<img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:100%;height:150px;' onclick='showNovel("+data[i].id+")'>";
                        body += "</div>"; 
                        $(".fantasyBest").slick('slickAdd',body);
                        
                      
                    }
    		    },
                error: function (error) {
                }
        });
        //romance's best 가져오기
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/romance_best",
                data: {
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        
                        var body = "<div class='to-romancetBest'>";
                        body += "<img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:100%;height:150px;' onclick='showNovel("+data[i].id+")'>";
                        body += "</div>"; 
                        $(".romanceBest").slick('slickAdd',body);
                        
                      
                    }
        	    },
                error: function (error) {
                }
        });
        // 요일별 소설 가져오기
        //월
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/monday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='mondayNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#monday').append(body);
                       
                    }
                },
                error: function (error) {
                }
        });
         //화
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/tuesday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='tuesdayNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#tuesday').append(body);
                      
                    }
                },
                error: function (error) {
                }
        });
        //수
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/wednesday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='wednesNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#wednesday').append(body);
                      
                    }
                },
                error: function (error) {
                }
        });
         //목
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/thursday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='thursdayNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#thursday').append(body);
                      
                    }
                }
        });
         //금
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/friday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='fridayNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#friday').append(body);
                       
                    }
                }
        });
         //토
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/saturday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='saturdayNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#saturday').append(body);
                      
                    }
                }
        });
         //일
        $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/sunday",
                data: {
                    
                },
                success: function (data) {                   
                    for(var i=0; i< Object.keys(data).length;i++){
                        var body = "<img class='sundayNovel' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:50%;height:200px;' onclick='showNovel("+data[i].id+")'>";
                       $('#sunday').append(body);
                     
                    }
                }
        });

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
            
        });
        //소설읽기 에서 뷰어설정을 누르면 
        $(document).on('click', '#viewSettings', function() {
            $('#viewSettingForm').slideToggle(200);
            
        });
        //소설읽기에서 뷰어설정 창에서 X를 누르면 
        $(document).on('click', '#viewerClose', function() {
            $('#viewSettingForm').slideToggle(200);
            
        });

    });
         
  
/*****************************************
 * 메인화면에서 인기, 요일 에 따라 내용이 바뀜 
**************************************/
    
    window.bodyChange = function(body){
        var obj1 = document.getElementById('popular');
        var obj2 = document.getElementById('week');
        var monday = document.getElementById('monday');
        var tuesday = document.getElementById('tuesday');
        var wednesday = document.getElementById('wednesday');
        var thursday = document.getElementById('thursday');
        var friday = document.getElementById('friday');
        var saturday = document.getElementById('saturday');
        var sunday = document.getElementById('sunday');
        
        if(body == "popular"){
            obj1.style.display="block";
            obj2.style.display="none";
            monday.style.display="none";
            tuesday.style.display="none";
            wednesday.style.display="none";
            thursday.style.display="none";
            friday.style.display="none";
            saturday.style.display="none";
            sunday.style.display="none";
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
    var mainNovelShowPopover = function(target) {
      document.getElementById('mainNovelPopover').show(target);
    };
    
     /******************************************
     * 블로그 페이지 툴바 드랍다운메뉴
     * ****************************************/
    var blogShowPopover = function(target) {
      document.getElementById('BlogPopover').show(target);
    };
    
    
    
    
    
        /*************
         * 추천 기능 함수 true, false에 따라 추천 상태를 구분 
         * ***********/
        var good = false;
        window.isGood = function(){
            var goodIcon = $('.novelGoodIcon');
            if(good == false){
                ons.notification.confirm({
                title:'',
                message: '추천 하시겠습니까',
                buttonLabels:['아니요','예'],
                callback: function(answer) {
                  if(answer ==  0)
                  {
                    return;
                  }  
                  if(answer ==  1)
                  {
                    goodIcon.attr('icon','ion-ios-heart');
                    good = true;
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  } 
                }
              });
            }
            if(good == true){
                ons.notification.confirm({
                title:'',
                message: '추천을 취소 하시겠습니까',
                buttonLabels:['아니요','예'],
                callback: function(answer) {
                  if(answer ==  0)
                  {
                    return;
                  }  
                  if(answer ==  1)
                  {
                    goodIcon.attr('icon','ion-ios-heart-outline');
                    good = false;
                    
                    
                    
                    
                    
                    
                    
                    
                  } 
                }
              });
            }
        }
        
        
        /***********************
         * 관심등록 기능 
         * ********************/
        var favorite = false;
        window.addFavorite = function(){
            var favoriteIcon = $('.novelFavoriteIcon');
            if(favorite == false){
                ons.notification.confirm({
                title:'',
                message: '관심도서로 등록하시겠습니까?',
                buttonLabels:['아니요','예'],
                callback: function(answer) {
                  if(answer ==  0)
                  {
                    return;
                  }  
                  if(answer ==  1)
                  {
                    favoriteIcon.attr('icon','ion-android-star');
                    favorite = true;
                    
                    
                    
                    
                    
                    
                    
                  } 
                }
              });
            }
            if(favorite == true){
                ons.notification.confirm({
                title:'',
                message: '관심등록을 취소하시겠습니까?',
                buttonLabels:['아니요','예'],
                callback: function(answer) {
                  if(answer ==  0)
                  {
                    return;
                  }  
                  if(answer ==  1)
                  {
                    favoriteIcon.attr('icon','ion-android-star-outline');
                    favorite = false;
                    
                    
                    
                    
                    
                    
                  } 
                }
              });
            }
        }
        /************************
         * 북마크 등록 함수 
         * *********************/
        window.bookMark = function(){
            var bookMarkIcon = $('#novelBookMarkIcon');
            bookMarkIcon.attr('style','color:orange;');
            bookMarkIcon.attr('size','40px');
            alert('북마크 등록');
              
              
            
        }
        
        
    /******************************************
     * 더보기 클릭시
     * ****************************************/
    function moreList(){
    
            var content="";
            for(var i=0; i<3; i++){
                content +=
                "<ons-list-item class='list-item-container'>"+
                "<ons-row>"+
                "<ons-col width='75px'>"+"사진"+
                "</ons-col>"+
                "<ons-col>"+
                "<div class='location'>"+
                "<div>"+"횟수"+"</div><div style='width:60px'>"+"댓글수"+"</div><div>"+"날짜"+"</div>"+
                "</div>"+
                "<div class='name'>"+"제목"+
                "</div>"+
                "</ons-col>"+
                "</ons-row>"+
                "</ons-list-item>";
            }
            
           /*나중에 쓸 js*/ /*content+="<tr id='addbtn'><td colspan='5'><div class='btns'><a href='javascript:moreList();' class='btn'>더보기</a></div>  </td></tr>";*/
            
            $(content).appendTo(".chapterListDiv");
    };   
    
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

/**********************************
 * 검색 창에서 키워드 입력후 검색버튼 누를 시 
 * **********************************/
 window.searchContents = function(){
     var searchContent = document.getElementById('searchContent').value;
     $.ajax({
        type: "get",
        url: "http://150.95.130.43/get_novel/search",
        data: {
            searchContent : searchContent
        },
        success: function (data) {       
            var body = "";
            for(var i =0; i< Object.keys(data).length ;i++){
                body += "<div class='search-lists' onclick='showNovel("+data[i].novel_id+")'>";
                    body += "<div class='search-list-top'>";
                        body += "<div class='search-list-left'>";
                            body += "<img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"'>";
                        body += "</div>";
                        body += "<div class='search-list-right'>";
                            body += "<div class='right-1'>"+data[i].title+"</div>";
                            body += "<div class='right-2'>"+data[i].name+"</div>";
                            body += "<div class='right-3'><ons-icon icon='ion-android-arrow-dropright' style='margin-right:5px'></ons-icon>"+data[i].genre+"</div>";
                        body += "</div>";
                    body += "</div>";
                    body += "<div class='search-list-bottom"+i+"'>";  
                        body += "<ons-icon icon='ion-android-arrow-dropdown'>소개</ons-icon>";
                        body += "<div class='search-intro-toggle"+i+"' style='display:none;'>"+data[i].summary_intro;
                        body += "</div>";
                    body += "</div>";
                body += "</div>";
                
            }
            $('#search-list-page').html(body);
        }
     })
 }
/***************************************
 * 해당 id 의 소설을 가져온다 
 * ************************************/
window.showNovel = function(id){
    myNavigator.pushPage('mainNovel.html');

    $.ajax({
        type: "get",
        url: "http://150.95.130.43/get_novel/show_main_novel",
        data: {
            id : id
        },
        success: function(data){
            
            $('.mainNovelToolbar > .center').text(data[0].title);
            $('.main_novel_novelInfo_contentsImg').attr('src',"http://150.95.130.43/upload/images/"+data[0].cover_img_src);
            $('.main_novel_novelInfo_contentsEx').text(data[0].intro);
            
            
            var data_id = data[0].id;
            //모든 에피소드 가져오기 
            $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/get_episodes",
                data: {
                    id : data_id
                },
                success: function(data){
                    for(var i =0; i< Object.keys(data).length ;i++){
                        var episode_count = i+1;
                        $('#number').append("<option value='"+episode_count+"'>"+episode_count+"</option>");
                        
                        var notice_body = "";
                        //만약 데이터에있는 에피소드가 공지라면 
                        if(data[i].is_notice == "1"){
                            $('.list__item__title').append("<p>"+data[i].episode+"</p>");
                                notice_body += "<li class='noticeList__header'>";
                                    notice_body += data[i].created_at;
                                notice_body += "</li>";
                                notice_body += "<ons-list-item class='noticeListItem'>";
                                notice_body += data[i].episode;
                                notice_body += "</ons-list-item>";
                                console.log(notice_body);
                        }
                        $('#novel-notice-bar').html(body);
                        //만약 데이터에 있는 에피소드가 공지가 아니라면 
                        if(data[i].is_notice == "0"){
                            var body = "<ons-list-item class='list-item-container' onclick='showMainReadNovel("+data[i].id+")'>";
                                    body += "<ons-row>";
                                        body += "<ons-col width='75px'>";
                                            body += "<img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' class='thumbnail'>";
                                        body += "</ons-col>";
                                        body += "<ons-col>";
                                            body += "<div class='location'>";
                                                body += "<div>"+episode_count+"화</div>";
                                                body += "<div style='width:60px'>댓글</div>";
                                                body += "<div>"+data[i].created_at+"</div>";
                                            body += "</div>";
                                            body += "<div class='name'>";
                                                body += data[i].episode_title;
                                            body += "</div>";
                                        body += "</ons-col>";
                                        if(data[i].is_charge == "1"){
                                            body += "<div class='ketImg'><i class='fa fa-lock fa-2x'></i></div>";
                                        }else{
                                            body += "";
                                        }
                                    body += "</ons-row>";
                                body += "</ons-list-item>";
                                $('.chapterListDiv').append(body);
                        }
                        
                    }
                }
            })
     
        }
    })
}


window.showMainReadNovel = function(id){
    var id = id;
    $.ajax({
        type: "get",
        url: "http://150.95.130.43/get_novel/get_episode_id",
        data: {
            id : id
        },
        success: function(data){
            $('#novelHeader > .center').text(data[0].episode_title);
            $('#novelAreaText').text(data[0].episode);
        }
    })
    myNavigator.pushPage('mainReadNovel.html');
}



