function map_info(data) {
    $(function () {
        $("div[name=map-info]").hide();

        $test = $("div[name='map-view']").attr("name");

        if ($test == $("div[name='map-view']").attr("name")) {
            $("img").filter(".map_list").each(function () {
                $(this).on("click", function () {
                    if (!$(this).hasClass("selectedMap")) {
                        $("div[name=map-info]").show();

                        $src = $(this).attr("src");
                        $imgId = $(this).attr("id");


                        $img = "<img src='" + $src + "' alt='map image' class='text-right' id='" + $imgId + "'>";


                        $("div[name=map-info]").empty();

                        $("div[name=map-info]").append($img);
                    } else {
                        $("div[name=map-info]").hide();
                    }
                });
            });
        }
    });
}