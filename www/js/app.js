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
                        
                        // var body = "<div class='to-top'><img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' style='width:100%;height:200px;' onclick='showNovel("+data[i].id+")'></div>";
                        // $(".contents").slick('slickAdd',body);

                        var body = "<div class='topContents' onclick='showNovel("+data[i].id+")'>";
                                body += "<div class='topContents-align-left'>";
                                    body += "<div class='topContents-text1'>";
                                        body += data[i].title;
                                    body += "</div>";
                                    body += "<div class='topContents-text2'>";
                                        body += data[i].summary_intro;
                                    body += "</div>";
                                    body += "<div class='topContents-text3'>";
                                        if(data[i].genre == 'fantasy'){
                                            body += '판타지';
                                        }else if(data[i].genre == 'romance'){
                                            body += '로맨스';
                                        }else if(data[i].genre == 'scifi'){
                                            body += 'SF';
                                        }else if(data[i].genre == 'martial'){
                                            body += '무협';
                                        }else if(data[i].genre == 'detective'){
                                            body += '추리';
                                        }else if(data[i].genre == 'horror'){
                                            body += '호러';
                                        }
                                    body += "</div>";
                                body += "</div>";
                                body += "<div class='topContents-align-right'>";
                                    body += "<img class='topImg' src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"' data-adaptive-background='1' style='height:200px;width:100%;'>";
                                    //body += "<img name='effect' src='http://150.95.130.43/upload/images/2017062755THREE_COVER.png'>";
                                    
                                body += "</div>";
                            body += "</div>";
                            $(".contents").slick('slickAdd',body);

                    }//for-end
    		    }//success-end
        });//ajax-en    
        
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
            autoplaySpeed:6000,
            arrows:false,
            pauseOnHover:false
        });
        //인기-오늘의 베스트 부분
        $('.todayBest').slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:5000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        //인기-판타지 베스트 부분
        $('.fantasyBest').slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:5000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        //인기-로맨스 베스트 부분
        $(".romanceBest").slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:5000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        
        $(".novelAnother").slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:5000,
            arrows:false,
            pauseOnHover:false,
            slidesToShow:3,
            slidesToScroll:3        
        });
        /*이미지 슬라이드 부분에 추가*/ 
        $(".differentWork").slick({
            infinite: true,
            autoplay:true,
            autoplaySpeed:5000,
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
        //
        $(document).on('click', '.point-list', function() {
            var choosePoint = $('.point-list:active').text();
            $('#buyPointLb').text(choosePoint);
            
        });
        if(!localStorage.getItem('current_id')){
            $('#showPoint').text('0');
        }
        

        
           
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

/**********************************
 * id 찾기
 * **********************************/    
window.idSearch = function(){
    var emailFocus = document.getElementById("idSearchEmailInput");
    var emailJoin = emailFocus.value;
    var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(emailJoin == ""){
        alert("이메일을 입력하세요.");
        emailFocus.focus();
        return;
    }else if(!regEmail.test(emailJoin)){
        alert("이메일 주소를 똑바로 입력해 주세요.");
        emailFocus.focus();
        return;
    }else{
        $.ajax({
            type : "get",
            url : "http://150.95.130.43/get_user/id_search",
            data : {
                email : emailJoin  
            },
            success: function(data){
                alert("아이디는 "+ data[0].user_id + "입니다.");
            },
            error : function(jqXHR, textStatus, errorThrown){
                alert("아이디를 찾지 못했습니다."+ textStatus + " : " + errorThrown);
            }
        })
    }
}

/**********************************
* 비밀번호 찾기
* **********************************/
window.pwSearch = function(){
    var idFocus = document.getElementById("pwSearchIdInput");
    var idJoin = idFocus.value;
    var emailFocus = document.getElementById("pwSearchEmailInput");
    var emailJoin = emailFocus.value;
    var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(idJoin == ""){
        alert("아이디를 입력하세요.");
        idFocus.focus();
        return;
    }else if(emailJoin == ""){
        alert("이메일을 입력하세요.");
        emailFocus.focus();
        return;
    }else if(!regEmail.test(emailJoin)){
        alert("이메일 주소를 똑바로 입력해 주세요.");
        emailFocus.focus();
        return;
    }else{
        $.ajax({
            type : "get",
            url : "http://150.95.130.43/get_user/pw_search",
            data : {
                id : idJoin,
                email : emailJoin  
            },
            success: function(data){
                alert("비밀번호는 "+ data[0].password + "입니다.");
            },
            error : function(jqXHR, textStatus, errorThrown){
                alert("해당 이메일과 아이디의 비밀번호를 찾지 못했습니다."+ textStatus + " : " + errorThrown);
            }
        })
    }
}
/**********************************
 * 로그아웃 하기
 * **********************************/   
 window.logoutClick = function(){
    localStorage.clear();
    $('#slide-top').children().first().remove();
    $('#slide-top').prepend("<img class='logo' src='img/logo.bmp'>");
    $('.showPoint:eq(1)').text("");
    alert("로그아웃 되었습니다.");
    document.getElementById("loginBtn").style.display = "";
    document.getElementById("joinBtn").style.display = "";
    document.getElementById("logoutBtn").style.display = "none";
    menuClose();
 }
/**********************************
 * 아이디, 비밀번호 찾기 취소 버튼
 * **********************************/  
window.searchCancel = function(){
    myNavigator.popPage();
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
    
    //소설의 id값을 받아 해당 작가의 블로그로 이동
    window.blogMove = function(id){
        myNavigator.pushPage('blog.html');
        var novel_id = id;
        $.ajax({
            type: "get",
            url : "http://150.95.130.43/get_novel/UserIdOfNovel",
            data: {
                id : novel_id
            },
            success: function(data){
                var userid = data[0].user_id;
                $.ajax({
                    type: "get",
                    url : "http://150.95.130.43/get_user/getUserInfo",
                    data: {
                        id : userid
                    },
                    success: function(data){
                    $('.blogToolbar > .center').html(data[0].name+" 님의 블로그");
                    $('.blogerName').html(data[0].name+" 블로그");
                    }
                })
                
            }
        })
    }
    
    
    
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
        window.addFavorite = function(id){
            var user_id = localStorage.getItem('current_id');
            var novel_id = id;
            var favoriteIcon = $('#novelFavoriteIcon');
            if(user_id == null){
                alert('로그인이 필요합니다.');
            }else{
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
                        //현재 사용자 아이디와 소설의 번호를 가져와 db에 저장한다.
                
                        $.ajax({
                            type:'get',
                            url:"http://150.95.130.43/set_novel/add_favorite",
                            data:{
                                user_id : user_id,
                                novel_id: novel_id
                            },
                            success:function(data){
                                
                            }
                        });             
                        
                      } 
                    }
                  });
                }
                if(favorite == true){
                    ons.notification.confirm({
                        title:'',
                        message: '관심등록을 취소하시겠습니까?',
                        buttonLabels:['아니요','예'],
                        callback: function(answer){
                        if(answer ==  0)
                        {   
                            return;
                        }  
                        if(answer ==  1)
                        {
                            favoriteIcon.attr('icon','ion-android-star-outline');
                            favorite = false;
                            //사용자id와 해당 소설id를 갖고 db의 데이터를 삭제 
                            $.ajax({
                                type:'get',
                                url:"http://150.95.130.43/set_novel/delete_favorite",
                                data:{
                                    user_id : user_id,
                                    novel_id : novel_id
                                },
                                success:function(data){
                                    
                                    
                                }
                                
                            })//ajax-end
                                  
                        
                    }//if-end
                    }//callback-fucntion-end
                  });//ons-notification-end
                }
            }//else-end
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
                body += "<div class='search-lists' style='height:150px' onclick='showNovel("+data[i].novel_id+")'>";
                  
                        body += "<div class='search-list-left'>";
                            body += "<img src='http://150.95.130.43/upload/images/"+data[i].cover_img_src+"'>";
                        body += "</div>";
                        body += "<div class='search-list-right' style='margin-left:10px;'>";
                            body += "<div class='right-1'>"+data[i].title+"</div>";
                            body += "<div class='right-2'>"+data[i].name+"</div>";
                            if(data[i].genre == 'fantasy'){
                                body += "<div class='right-3'> 장르: 판타지</div>";
                            }
                            else if(data[i].genre == 'romance'){
                                body += "<div class='right-3'> 장르: 로맨스</div>";
                            }
                            else if(data[i].genre == 'scifi'){
                                body += "<div class='right-3'> 장르: SF</div>";
                            }
                            else if(data[i].genre == 'horror'){
                                body += "<div class='right-3'> 장르: 호러</div>";                            
                            }
                            else if(data[i].genre == 'martial'){
                                body += "<div class='right-3'> 장르: 무협</div>";  
                            }
                            else if(data[i].genre == 'detective'){
                                body += "<div class='right-3'> 장르: 추리</div>";  
                            }
                            body += "<div class='right-3'>"+data[i].summary_intro+"</div>";
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
    
    //현재 소설의 번호와 현재 로그인 되어 있는 사용자의id를 사용해 
    //사용자의 아이디의 소설이 관심등록 되어 있다면 관심등록 아이콘을 변경 
    $.ajax({
            type:'get',
            url:"http://150.95.130.43/get_novel/favorite_novel",
            data:{
                user_id : localStorage.getItem('current_id')
    
            },
            success:function(data){
                for(var i = 0; i < Object.keys(data).length; i++){
                    if(data[i].novel_id == id){
                        favorite = true;
                        $('#novelFavoriteIcon').attr('icon','ion-android-star');
                    }
                }//for-end
            }//success-end
    })//ajax-end
    //소설의 id 값을 받아와 그 소설의 데이터를 가져와 페이지를 보여준다.
    $.ajax({
        type: "get",
        url: "http://150.95.130.43/get_novel/show_main_novel",
        data: {
            id : id
        },
        success: function(data){
            $(".mainNovelDropListBlog").attr("onclick","blogMove("+data[0].id+")");
            $("#novelFavoriteIcon").attr("onclick","addFavorite("+data[0].id+")");
            $('.mainNovelToolbar > .center').html(data[0].title);
            $('.main_novel_novelInfo_contentsImg').attr('src',"http://150.95.130.43/upload/images/"+data[0].cover_img_src);
            $('.main_novel_novelInfo_contentsEx').html(data[0].intro);
            //현재 db에 영어로 저장되어 있는 장르를 한글로 바꾼다.
            if(data[0].genre == 'fantasy'){
                $('.novelGenre').text("장르 : 판타지");
            }
            else if(data[0].genre == 'romance'){
                $('.novelGenre').text("장르 : 로맨스");
            }
            else if(data[0].genre == 'scifi'){
                $('.novelGenre').text("장르 : SF");
            }
            else if(data[0].genre == 'horror'){
                $('.novelGenre').text("장르 : 호러");
            }
            else if(data[0].genre == 'martial'){
                $('.novelGenre').text("장르 : 무협");
            }
            else if(data[0].genre == 'detective'){
                $('.novelGenre').text("장르 : 추리");
            }
            $('.mainNovelDropListSetting').attr('onclick','showBackgroundSettings('+data[0].id+')');

            var data_id = data[0].id;
            //모든 에피소드 가져오기 
            $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/get_episodes",
                data: {
                    id : data_id
                },
                success: function(data){
                        //모든 회차의 번호를 select문에 출력 
                        var total_episode_count = 0;
                        for(var i =0; i< Object.keys(data).length ;i++){
                            
                            if(data[i].is_notice == "0"){
                                total_episode_count = total_episode_count+1;
                                $('#novelNumber').append("<option value='"+data[i].id+"'>"+total_episode_count+"</option>");
                            }
                            
                        }
                        $('.episodeCount').prepend ("연재 중 |");
                        $('.episodeCount').append(" 총 "+total_episode_count+"회");

                        var episode_count = 0;
                        for(var i =0; i< Object.keys(data).length ;i++){
                            
                            //만약 데이터에 있는 에피소드가 공지가 아니라면 
                            if(data[i].is_notice == "0" ){
                                episode_count = episode_count+1;                            
                                
                                //if(Object.keys(data).length > 6){
                                        var body = "<ons-list-item class='list-item-container' onclick='isFree("+data[i].is_charge+","+data[i].id+")'>";
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
                                        // if(episode_count == 5){
                                        //     $('.details').append("<a class='addButton' this.onclick=;>"+
                                        //     "<div class='addButtonDiv' onclick='moreList("+data[i].id+"); this.onclick=null'>더보기<i class='fa fa-chevron-down'></i></div></a>");
                                        //     break;
                                        // }
                                      
                        
                                //}                        
                                           
                            }//if-end
                        }//for-end   
                        //공지사항 리스트 출력 
                        for(var j =0; j< Object.keys(data).length ;j++){
                            if(data[j].is_notice == "1" ){
                                $('.main_novel_notice').attr('onclick', 'showNoticeList('+data[j].id+')');
                                $('.list__item__title').append("<p class='noticeItem'>"+data[j].episode+"</p>");
                                    
                                }
                                $('#novel-notice-bar').html(body);   
                        } 
                        $('.list__item__title > p').each(function(){ // #example안의 각 li 요소들을 돌면서.. 
                        $(this).detach().prependTo('.list__item__title'); // 해당 li를 떼어내서 #example의 처음에 끼운다. 
                        $('.noticeItem').nextAll().remove();// 다른 형제 노드 다 삭제
                    });                                                                                                
                }//success-end
            })//ajax-end
     
        }//success-end
    })//ajax-end
    
    
}



//소설 읽기 페이지로 넘어가는 함수 매개변수로 소설의 회차 아이디를 입력받는다 
window.showMainReadNovel = function(id){

    var id = id;
    $.ajax({
        type: "get",
        url: "http://150.95.130.43/get_novel/get_episode_id",
        data: {
            id : id
        },
        success: function(data){
            $('#novelHeader > .center').html(data[0].episode_title);
            $('#novelAreaText').html(data[0].episode);
            
            //웹에서 적용한 tag를 제거 
            $('#novelAreaText > span').contents().unwrap();

            var targetId = data[0].id;
            //에피소드의belong_to_novel로 해당 소설 가져오기
            $.ajax({
                type:"get",
                url:"http://150.95.130.43/get_novel/get_episodes",
                data:{
                    id: data[0].belong_to_novel
                },
                success: function(data){
                    //하단의 select에 모든 에피소드를 출력 
                    var episode_num = 0;
                    for(var i=0 ; i < Object.keys(data).length ; i++){
                        if(data[i].is_notice == "0"){
                            episode_num = episode_num+1
                            if(data[i].id == targetId){
                                 $('#showAnotherEpisode').append("<option value='"+data[i].id+"' selected>"+episode_num+"</option>");
                             }else{
                                $('#showAnotherEpisode').append("<option value='"+data[i].id+"'>"+episode_num+"</option>");
                            }
                        }//if-end
                    }//for-end
                }//success-end
            })//ajax-end
            
        }//success-end
    })//ajax-end

    myNavigator.pushPage('mainReadNovel.html');
}





 /**********************************
 * 회원가입 정보 입력
 * **********************************/
 window.JoinClick = function(){
    var idFocus = document.getElementById("idJoin");
    var nickFocus = document.getElementById("nickJoin");
    var pwFocus = document.getElementById("pwJoin");
    var pwFocusRe = document.getElementById("pwJoinRe");
    var emailFocus = document.getElementById("emailJoin");
    var idJoin = idFocus.value;
    var nickJoin = nickFocus.value;
    var pwJoin = pwFocus.value;
    var pwJoinRe = pwFocusRe.value;
    var emailJoin = emailFocus.value;
    var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(idJoin == ""){
    alert("아이디를 입력하세요");
        idFocus.focus();
        return ;
    }else if(nickJoin == ""){
        alert("닉네임을 입력하세요");    
        nickFocus.focus();
    }else if(pwJoin == ""){
        alert("비밀번호를 입력하세요");
        pwFocus.focus();
        return;
    }else if(pwJoinRe == ""){
        alert("비밀번호 확인을 입력하세요");
        pwFocusRe.focus();
        return;
    }else if(emailJoin == ""){
        alert("이메일을 입력하세요");
        emailFocus.focus();
        return;
    }else if(!regEmail.test(emailJoin)){
        alert("이메일 주소를 형식에 맞게 입력하세요");
        emailFocus.focus();
        return;
    }else if(pwJoin != pwJoinRe){
        alert("패스워드가 서로 일치하지 않습니다.");
        pwFocusRe.focus();
        return;
    }else{
          $.ajax({
              type:"get",
              url: "http://150.95.130.43/get_user/id_check",
              data: { id : idJoin},
              success: function(msg){
                  if(msg == 1){
                      alert("이미 있는 아이디 입니다.");
                      idFocus.focus();
                      return;
                  }else if(idJoin != "" && nickJoin != "" && pwJoin != "" && pwJoinRe != "" && emailJoin != ""){
                    var joinInfo = {"user_id" : idJoin, "nickname" : nickJoin, "email" : emailJoin, "user_pw" : pwJoin};
                    $.ajax({
                      type: "get",
                       url: "http://150.95.130.43/get_user/write_join",
                         data: joinInfo,
                         success: function(data){
                             alert('가입되었습니다.');
                             myNavigator.pushPage('login.html');
                         },
                         error : function(jqXHR, textStatus, errorThrown){
                             alert("가입되지 않았습니다."+ textStatus + " : " + errorThrown);
                             
                 }
          })
      }
              }
          })
      } 
      
     
 }


/**********************************
 * 로그인 하기
 * **********************************/
 window.loginClick = function(){
        var idFocus = document.getElementById("username");
        var pwFocus = document.getElementById("password");
        var idValue = idFocus.value;
        var pwValue = pwFocus.value;
        if(idValue == ""){
            alert("아이디를 입력하세요.");
            idFocus.focus();
            return ;
        }else if(pwValue == ""){
            alert("비밀번호를 입력하세요.");
            pwFocus.focus();
            return;
        }else{
            $.ajax({
                     type:"get",
                     url: "http://150.95.130.43/get_user/getUserInfo",
                     data:{
                         id : idValue
                     },
                     success: function(data){
                            //로컬스토레이지에 사용자id 와 닉네임 저장 
                            localStorage.setItem('current_id',data[0].user_id);
                            localStorage.setItem('current_name',data[0].name);
                            $('#slide-top').children().first().remove();
                            //로고 있는 부분에 사용자 닉네임 출력 
                            $('#slide-top').prepend("<div class='slide-top-name'>"+localStorage.getItem('current_name')+"</div>");
                            
                            alert("로그인 완료");
                            
                            $.ajax({
                                type:'get',
                                url:"http://150.95.130.43/get_point/get_point",
                                data:{
                                    user_id:localStorage.getItem('current_id')
                                },
                                success:function(data){
                                    console.log(data);
                                    if(!data[0].point){
                                        $('.showPoint:eq(1)').text("0");
                                    }
                                    else{
                                        $('.showPoint:eq(1)').text(data[0].point);
                                    }
                                }
                            })

                            document.getElementById("loginBtn").style.display = "none";
                            document.getElementById("joinBtn").style.display = "none";
                            document.getElementById("logoutBtn").style.display = "";
                            myNavigator.popPage();
                     }
            })//ajax-end
        }//else-end    
}

/**********************************
 * 공지 사항버튼을 누를시 표시되는 전체 공지사항
 * **********************************/
window.showNoticeList = function(id){
    myNavigator.pushPage('notice.html');
    $.ajax({
        type: "get",
        url: "http://150.95.130.43/get_novel",
        data: {
            id : id
        },
        success: function(data){
        var noticeid = data[0].id;
            $.ajax({
                type: "get",
                url: "http://150.95.130.43/get_novel/get_episodes",
                data: {
                    id : noticeid
                },
                success: function(data){
                    for(var j =0; j< Object.keys(data).length ;j++){
                        if(data[j].is_notice == "1" ){
                            /*Object.keys(data).length*/
                        
                            $('.noticeList').append("<li class='noticeList__header'>"+data[j].created_at+
                            "</li><ons-list-item class='noticeListItem'><p>"+data[j].episode+"</p></ons-list-item>");
                
                        }//if-end
                    }//for-end
                }//success-end
            })//ajax-end        
        }//success-end
    })//ajax-end
}

//선택한 숫자에 따라 해당소설의 회차가 출력
window.changeEpisode = function(selectedEpi){
    var selectedEpi = selectedEpi.value;
    $.ajax({
        type:"get",
        url:"http://150.95.130.43/get_novel/get_episode_id",
        data:{
            id: selectedEpi
        },
        success: function(data){
            $('#novelHeader > .center').html(data[0].episode_title);
            $('#novelAreaText').html(data[0].episode);
            
        }
    })
    
}

//소설 읽기 에서 뒤로, 앞으로 버튼 클릭시 소설 이동 
window.moveEpisode = function(data){
    //뒤로버튼 클릭, 현재 선택된 값의 이전 id값을 가져와 화면에 출력
    if(data == 'back'){
        var i = $('#showAnotherEpisode option:selected').prev().val();
        if(!i){
            alert("첫 페이지 입니다.");
            return
        }else{
            $.ajax({
                type:"get",
                url:"http://150.95.130.43/get_novel/get_episode_id",
                data:{
                    id: i
                },
                success:function(data){
                    $('#novelHeader > .center').html(data[0].episode_title);
                    $('#novelAreaText').html(data[0].episode);
                    var targetId = data[0].id;
                    //select문에 모든 회차 출력, 보고있는 회차의 번호를 나타나게한다
                    $.ajax({
                        type:"get",
                        url:"http://150.95.130.43/get_novel/get_episodes",
                        data:{
                            id: data[0].belong_to_novel
                        },
                        success: function(data){
                            //하단의 select에 모든 에피소드를 출력 
                            var episode_num = 0;
                            for(var i=0 ; i < Object.keys(data).length ; i++){
                                if(data[i].is_notice == "0"){
                                    episode_num = episode_num+1
                                    //전 회차의 id와 일치하면 수행, selected 값을 추가한다.
                                    if(data[i].id == targetId){
                                        $("#showAnotherEpisode > option[value="+data[i].id+"]").prop("selected","true");
                                    }
                                    //나머지는 selected 속성을 제거 
                                    else{
                                        //$("#showAnotherEpisode[value="+ +"]").append("<option value='"+data[i].id+"'>"+episode_num+"</option>");
                                        $("#showAnotherEpisode").prop("selected","false");
                                    }
                                }
                            }//for-end
                        }//success-end
                    })//ajax-end
                }//success-end
            })
        }//else-end
        //앞으로버튼 클릭, 현재 선택된 값의 다음 id값을 가져와 화면에 출력
    }//if(back)-end
    else{
        var i = $('#showAnotherEpisode option:selected').next().val();
        if(!i){
            alert("마지막 페이지 입니다.");
            return
        }else{
            $.ajax({
                type:"get",
                url:"http://150.95.130.43/get_novel/get_episode_id",
                data:{
                    id: i
                },
                success:function(data){
                    $('#novelHeader > .center').html(data[0].episode_title);
                    $('#novelAreaText').html(data[0].episode);
                    var targetId = data[0].id;
                    //select문에 모든 회차 출력, 보고있는 회차의 번호를 나타나게한다
                    $.ajax({
                        type:"get",
                        url:"http://150.95.130.43/get_novel/get_episodes",
                        data:{
                            id: data[0].belong_to_novel
                        },
                        success: function(data){
                            //하단의 select에 모든 에피소드를 출력 
                            var episode_num = 0;
                            for(var i=0 ; i < Object.keys(data).length ; i++){
                                if(data[i].is_notice == "0"){
                                    episode_num = episode_num+1
                                    //다음회차의 에피소드 id와 같으면 수행 
                                    if(data[i].id == targetId){
                                        $("#showAnotherEpisode > option[value="+data[i].id+"]").prop("selected","true");
                                    }
                                    //나머지는 selected 속성을 제거 
                                    else{
                                        //$("#showAnotherEpisode[value="+ +"]").append("<option value='"+data[i].id+"'>"+episode_num+"</option>");
                                        $("#showAnotherEpisode").prop("selected","false");
                                    }
                                }
                            }//for-end
                        }//success-end
                    })//ajax-end
                }//success-end
            })//ajax-end
        }//else-end
    }//else(forward)-end
}


//메인소설의 select문의 회차를 선택후 보기 버튼을 클릭하면 해당 회차를 보여준다.
window.showMainReadNovelByMainNumber = function(){
    var a = $("#novelNumber option:selected").val();
    showMainReadNovel(a);
}



//관심등록한 소설들을 출력 
window.showFavoriteNovel = function(){
    //로그인 여부 확인 
    if(localStorage.getItem('current_id') == null){
        alert('로그인이 필요합니다.');
    }else{
        myNavigator.pushPage('favorite.html');
        var user_id = localStorage.getItem('current_id')
        //현재 로그인된 사용자의 모든 관심등록된 소설 가져오기
        $.ajax({
            type:'get',
            url:"http://150.95.130.43/get_novel/favorite_novel",
            data:{
                user_id:user_id
            },
            //소설의 id를 가져온다 
            success:function(data){
                
                for(var i =0 ; i < Object.keys(data).length ; i++){
                    
                    $.ajax({
                        type:'get',
                        url:"http://150.95.130.43/get_novel/show_main_novel",
                        async:false,
                        data:{
                            id: data[i].novel_id
                        }, 
                        success:function(data){
                            var createEle="";
                            createEle += "<img src='http://150.95.130.43/upload/images/"+data[0].cover_img_src+"' onclick='showNovel("+data[0].id+")'>";
                            $('#favorite-list').append(createEle);              
                        }                        
                    })//ajax-end
                }//for-end
            }//success-end
        })
    }
}

//포인트 구매 페이지로 이동
window.showPointBuyPage = function(){
    if(localStorage.getItem('current_id') == null){
        alert('로그인이 필요합니다.');
    }else{
        myNavigator.pushPage('pointBuyPage.html');
    }
}


//포인트 구매
window.buyPoint = function(){
    var point = $(":input:radio[name=pointValue]:checked").val();
    if(!point){
        alert('구매할 포인트를 선택하세요');
        return;
    }else{
        ons.notification.confirm({
            title:'',
            message: '포인트를 구매하시겠습니까?',
            buttonLabels:['아니요','예'],
            callback: function(answer)
            {
                //아니요
                if(answer ==  0)
                {
                    return;
                }  
                //예
                if(answer ==  1)
                {
                    //기존의 포인트 가있는지 가져오기
                    $.ajax({
                        type:'get',
                        url:"http://150.95.130.43/get_point/get_point",
                        data:{
                            user_id:localStorage.getItem('current_id')
                        },
                        success:function(data){
                            $.ajax({
                                type:'get',
                                url:"http://150.95.130.43/set_point/set_point",
                                data:{
                                    user_id:localStorage.getItem('current_id'),
                                    point:point,
                                    current_point: data[0].point
                                },
                                success:function(data){
                                    alert('감사합니다.');
                                    
                                    $.ajax({
                                        type:'get',
                                        url:"http://150.95.130.43/get_point/get_point",
                                        data:{
                                            user_id:localStorage.getItem('current_id')
                                        },
                                        success:function(data){
                                            console.log(data);                           
                               
                                            if(data[0].point == 0){
                                                $('.showPoint:eq(1)').text("0");
                                            }
                                            else{
                                                $('.showPoint:eq(1)').text(data[0].point);
                                            }
                                            myNavigator.popPage();
                                        }//success-end
                                    })//ajax-end
                                    
                                }
                            })//ajax-end

                        }//success-end
                    })//ajax-end
                    
                        
                }//if-end 
            }//callback-end
        });//confirm-end
       
    }    
}

/***********************
 * 포인트 사용 
 * **********************/
window.usePoint = function(){
    var user_id = localStorage.getItem('current_id');
    $.ajax({
        type:'get',
        url:"http://150.95.130.43/get_point/get_point",
        data:{
            user_id:user_id
        },
        success:function(data){
            $.ajax({
                type:'get',
                url:"http://150.95.130.43/set_point/set_point_again",
                data:{
                    current_point:data[0].point,
                    user_id : user_id
                },
                success:function(data){
                    if(data[0].point == 0){
                        $('.showPoint:eq(1)').text("0");
                    }
                    else{
                        $('.showPoint:eq(1)').text(data[0].point);
                    }
                }
            })//ajax-end

        }//success-end
    })//ajax-end
    
    
    
}


/**************************************
 * 해당 에피소드가 무료인지 유료인지 판단
 * **********************************/
window.isFree = function(charge,episode_id){
        //유료
        if(charge == 1){
            if(localStorage.getItem('current_id') == null){
                alert('로그인이 필요합니다.');
                return;
            }else{
                ons.notification.confirm({
                    title:'',
                    message: '유료 작품입니다.     포인트를 사용하시겠습니까?',
                    buttonLabels:['아니요','예'],
                    callback: function(answer)
                    {
                        //아니요
                        if(answer ==  0)
                        {
                            return;
                        }  
                        //예
                        if(answer ==  1)
                        {
                            showMainReadNovel(episode_id);
                            usePoint();
                           
                        }//if-end 
                    }//callback-end
                });//confirm-end
            }
        }
        //무료
        else{
            showMainReadNovel(episode_id);
            return;
        }
}














/******************************************
 * 소설의 배경설정 정보를 출력 
 * ******************************************/
window.showBackgroundSettings = function(id){
    myNavigator.pushPage('backgroundSetting.html');
    
    //소설의 사건을 가져와 그래프로 출력, 그 사건의 간단한 정보 출력
    $.ajax({
        url:"http://150.95.130.43/get_settings/historyGraphInfo",
        type:'get',
        success:function(data){
            //ready함수를 실행하여 data를 갖고 구글api 사용해 그래프 그리기
            
            for(var i = 0; i< Object.keys(data).length ; i++){
                var body = "<div name='event_list' id='"+i+"'><a href='#'>"+data[i].event_name+"</a></div>";
                $('#timetableList').append(body);
            }
            ready(data);
            history_info(data);
        }//success-end
    });//ajax-end 
                                                                                                                                                                                                                         
    //소설의 배경설정의 인물들을 가져온다
    $.ajax({
        url:"http://150.95.130.43/get_settings/charactersInfo",
        type:'get',
        success:function(data){ 
            for(var i = 0; i< Object.keys(data).length ; i++){
                var body = "<img id='"+data[i].id+"' src='http://150.95.130.43/img/background/characterImg/"+data[i].img_src+"' class='character_list'>";
                $("div[name='character-view']").append(body);
            }
            character_info(data);
        }//success-end
    });//ajax-end 

    
    //소설의 배경설정의 사물들을 가져온다
    $.ajax({
        url:"http://150.95.130.43/get_settings/itemsInfo",
        type:'get',
        success:function(data){
            for(var i = 0; i< Object.keys(data).length ; i++){
                var body = "<img id='"+data[i].id+"' src='http://150.95.130.43/img/background/itemImg/"+data[i].img_src+"' class='item_list'>";
                $("div[name='item-view']").append(body);
            }
            item_info(data);
        }//success-end
    });//ajax-end 
    

    //소설의 배경설정의 인물들을 가져와서 관계도를 그려준다.
    $.ajax({
        url:"http://150.95.130.43/get_settings/charactersInfo",
        type:'get',
        success:function(data){ 
            var chaInfos = data;
            var nodes = {};
    		var rel = {};            
          
            $.ajax({
            url:"http://150.95.130.43/get_settings/relationsInfo",
            type:'get',
            success:function(data){ 
                    var links = data;
                    
                    links.forEach(function(link) {
            			link.id = "rel" + link.relnum;
        
        				link.source = nodes[link.source] ||
        						(nodes[link.source] = {chaId: link.source});
        				link.target = nodes[link.target] ||
        						(nodes[link.target] = {chaId: link.target});
        				link.relationship = link.relationship;
    			    });
                
            		// svg크기 정의 div크기에서 어느정도 여백
        			var width = 900;
        			var height = 500;
        
        
        			//********************************************************************//
        			// 											force 레이아웃 정의
        			//********************************************************************//
        			var force = d3.layout.force()
        					.nodes(d3.values(nodes))
        					.links(links)
        			 		.size([400, 400])
        					.linkDistance(250)
        					.charge(-800)
        					.on("tick", tick);
        
        			// 드래그를 시작할 때 함수 적용(노드 고정)
        			var drag = force.drag().on("dragstart", dragstart);
        
        			// #for-div 내 svg 생성
        			var svg = d3.select("#force-div").append("svg")
        					.attr("width", width)
        					.attr("height", height)
        					.attr("class", "mind-area");
    
    
        			// 노드의 이미지 패턴 정의
        			var defs = svg.append("defs").attr("id", "imgdefs");
        			chaInfos.forEach(function(chainfo){
        				var catpattern = defs.append("pattern")
        															.attr("id", "pattern" + chainfo.id)
        															.attr("height", 1)
        															.attr("width", 1)
        															.attr("x", "0")
        															.attr("y", "0");
        				catpattern.append("image")
        					 .attr("height", 70)
        					 .attr("width", 70)
        					 .attr("xlink:href", "http://150.95.130.43/img/background/characterImg/" + chainfo.img_src);
        			});
        
        
        			//********************************************************************//
        			// 											노드, 링크 요소 추가
        			//********************************************************************//
        			// 화살표 생성
        			var marker = svg.append("svg:defs").selectAll("marker");
        			marker = marker.data(["end"])
        			marker.exit().remove();
        			marker.enter().append("svg:marker")
        					.attr("id", String)
        					.attr("viewBox", "0 -5 10 10")
        					.attr("refX", 38)
        					.attr("refY", -1)
        					.attr("markerWidth", 14)
        					.attr("markerHeight", 14)
        					.attr("orient", "auto")
                            .attr("style", "fill:blue;")
        					.append("svg:path")
        					.attr("d", "M0,-5L10,0L0,5");
                            
        
        
        			// 연결선 생성 및 svg 적용, + 연결선마다 화살표 적용
        			var path = svg.append("svg:g").selectAll("path");
        
        
        			// relationship 데이터를 text로 생성
        			var relTextArea = svg.append("svg:g");
        			var mytext = relTextArea.selectAll("text");
        
        			// 노드 정의
        			var node = svg.selectAll(".node");
        
        			restart();
                    
    
    
        			// 연결선 커브 및 크기변경 + 노드 위치이동
        			var tf = true;
                   
        			function tick() {
        					path.attr("d", function(d) {
        							var dx = d.target.x - d.source.x,
        									dy = d.target.y - d.source.y,
        									dr = Math.sqrt(dx * dx + dy * dy);
        
        							var tickfunc = "M" +
        									d.source.x + "," +
        									d.source.y + "A" +
        									dr + "," + dr + " 0 0,1 " +
        									d.target.x + "," +
        									d.target.y;
        
        							// if(tf == true){
        							// 	alert(tickfunc);
        							// 	tf = false;
        							// }
        
        							return tickfunc;
        					});
        
        
        					node.attr("transform", function(d) {
        									 return "translate(" + d.x + "," + d.y + ")"; });
        			}
        
        			// 드래그 시작 시, 노드를 고정
        			function dragstart(d){
        				 d3.select(this).classed("fixed", d.fixed = true);
        				//  console.log("nodes↓");
        				//  console.log(nodes);
        				//  console.log("links↓");
        				//  console.log(links);
        				//  console.log("path↓");
        				//  console.log(path);
        				//  console.log("nodes↓");
        				//  console.log(rel);
        			}
        
        			function restart(){
                        // alert("asd");
        				force.nodes(d3.values(nodes));
        				force.links(links);
        
        				// 연결선 생성 및 svg 적용, + 연결선마다 화살표 적용
        				path = path.data(links)
        				path.remove();
        				path = path.enter().append("svg:path")
        						.attr("id", function(d) { return d.id; } )
        						.attr("class", "link")
        						.attr("marker-end", "url(#end)")
                                .attr("style", "fill:none; stroke: steelblue; stroke-width: 1;");
        
        				mytext = mytext.data(links)
        				mytext.remove();
        				mytext = mytext.enter().append("text")
        				.attr("dx", "100")
        				.attr("dy", "-8")
        				.attr("id", function(d) { return  "text" + d.id; })
        				.append("textPath")
        				.attr("xlink:href", function(d) { return "#" + d.id; })
        				.attr("style", "fill:magenta; font-weight:bold; font-size:15")
        				.text(function(d) { return d.relationship; } );
        
        				var relText = relTextArea.selectAll("text");
        
        				// 노드 정의
        				node = node.data(d3.values(nodes));
        				node.remove();
        				node = node.enter().append("g")
        				.attr("class", "node")
        				.attr("xlink:href", function(d) { return d.chaId; })
        				.call(force.drag);
        
        
        				// 노드에 원형 추가
        				node.append("circle")
        						.attr("r", 35)
        						.attr("fill", function(d) { return "url(#pattern" + d.chaId +")"; });
        
        				// 노드에 텍스트 추가 (name 데이터)
        				node.append("text")
        					 .attr("text-anchor", "middle")
        					 .attr("dy","25")
        						.attr("style", "fill:white; font-weight:bold; font-size:16")
        						.text(function(d) { return getChaInfoById(d.chaId).name; });
        
        
        				// force 재시작
        				force.start();
        			}
                    
                    // ID값으로 캐릭터의 정보를 가져옴
        			function getChaInfoById(id){
        				var chaInfose = chaInfos;
        				var chaInfo = null;
                    
        				chaInfose.some(function(info){
        					if(info.id == id){
                                
        						chaInfo = info;
        						return;
        					}
        				});
        				return chaInfo;
        			}			                             
           
                }//success-end
            });   
         
        }//success-end
    });//ajax-end 
    
    
    
    //소설의 배경설정의 지도들을 가져온다
    $.ajax({
        url:"http://150.95.130.43/get_settings/mapsInfo",
        type:'get',
        success:function(data){
            for(var i = 0; i< Object.keys(data).length ; i++){
                var body = "<img id='"+data[i].id+"' src='http://150.95.130.43/img/background/mapImg/mapCover/"+data[i].cover_src+"' class='map_list'>";
                $("div[name='map-view']").append(body);
            }
            map_info(data);
        }//success-end
    });//ajax-end 

}



