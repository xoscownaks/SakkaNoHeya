function character_info(data) {
    $(function () {
        $("div[name=character-info]").hide();

        $characterView = $("img").closest("div[name=character-view]").attr("name");

        if ($("img").closest("div[name=character-view]").attr("name") == $characterView) {
            $("img").filter(".character_list").each(function () {
                $(this).click(function () {
                    if (!$(this).hasClass("selectedImg")) {
                        $id = $(this).attr("id");
                        $arrayId = $id - 1;
                        // alert($id);
                        $(this).addClass("selectedImg");
                        $(this).siblings().removeClass("selectedImg");

                        $("div[name=character-view]").find("img").first().before($(this));
                        $("div").animate({                
                            scrollTop :  0            
                        },  400);

                        $("div[name='character-name']").empty();
                        $("div[name='character-age']").empty();
                        $("div[name='character-gender']").empty();
                        $("div[name='character-info']").empty();
                        $("div[name='character-refer_info']").empty();

                        $("div[name=character-info]").show();

                        $("div[name='character-name']").append(data[$arrayId]['name']);
                        $("div[name='character-age']").append(data[$arrayId]['age']);
                        $("div[name='character-gender']").append(data[$arrayId]['gender']);
                        $("div[name='character-info']").append(data[$arrayId]['info']);
                        $("div[name='character-refer_info']").append(data[$arrayId]['refer_info']);


                    } else {
                        $(this).removeClass("selectedImg");
                        $("div[name='character-info']").hide();
                        $("div[name='character-name']").empty();
                        $("div[name='character-age']").empty();
                        $("div[name='character-gender']").empty();
                        $("div[name='character-info']").empty();
                        $("div[name='character-refer_info']").empty();
                    }

                });
            });
        }

    });
}