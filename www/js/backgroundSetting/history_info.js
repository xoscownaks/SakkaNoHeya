function history_info(data) {
    $(function () {
        $("div[name=history-info]").hide();

        $test = $("div").filter("#timeline").attr("id");

        if ($test == $("div").filter("#timeline").attr("id")) {
            $("div[name='event_list']").each(function () {
                $(this).on("click", function () {
                    if (!$(this).hasClass("selectedEvent")) {
                        $arrayId = $(this).attr("id");
                        // alert(data[$arrayId]['event_name']);

                        $("div[name='event-name']").empty();
                        $("div[name='event-content']").empty();
                        $("div[name='event-refer_info']").empty();
                        $("div[name='event-other']").empty();
                        $("div[name='event-day']").empty();
                        $("div[name='event-character']").empty();
                        $("div[name='event-item']").empty();
                        $("div[name='event-map']").empty();

                        $("div[name=history-info]").show();

                        $refer_str = data[$arrayId]['refer_info'];
                        
                        $refer_str = String($refer_str);
                        
                        
                        $refer = $refer_str.split('^');

                        $start_day = data[$arrayId]['start_day'];
                        $end_day = data[$arrayId]['end_day']
                        $event_day = $start_day + " ~ " + $end_day;
               
                        $("div[name='event-name']").append(data[$arrayId]['event_name']);
                        $("div[name='event-content']").append(data[$arrayId]['event_content']);

                        for ($i = 0; $i < $refer.length; $i++) {
                            $("div[name='event-refer_info']").append("<li>" + $refer[$i] + "</li>");
                        }

                        $("div[name='event-other']").append(data[$arrayId]['other']);
                        $("div[name='event-day']").append($event_day);
                        
                        //인물 정보를 가져와서 배경설정의 사건에 표시 
                        $.ajax({
                            url:"http://150.95.130.43/get_settings/historyCharactersInfo",
                            type:'get',
                            success:function(data){
                                for(var i = 0; i< Object.keys(data).length ; i++){
                                   $("div[name='event-character']").append(" "+data[i].name);
                                }
                            }
                        });//ajax-end 
                        
                        //사물정보를 가져와서 배경설정의 사건에 표시 
                        $.ajax({
                            url:"http://150.95.130.43/get_settings/historyItemsInfo",
                            type:'get',
                            success:function(data){
                                for(var i = 0; i< Object.keys(data).length ; i++){
                                   $("div[name='event-item']").append(" "+data[i].name);
                                }                              
                            }
                        }); 

                        //지도 정보를 가져와서 배경설정의 사건에 표시 
                        $.ajax({
                            url:"http://150.95.130.43/get_settings/historyMapsInfo",
                            type:'get',
                            success:function(data){
                                for(var i = 0; i< Object.keys(data).length ; i++){
                                   $("div[name='event-map']").append(" "+data[i].name);
                                }  
                            }
                        }); 
                        
                        
                    } else {
                        $(this).removeClass("selectedEvent");
                        $("div[name=history-info]").hide();
                    }
                });

            });
        }


    });
}