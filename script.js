$(function () {
    let count = 0;
    let attempt = 0;
    $(".js-wrapper-key").on("click", function () {
        console.log("click");
        let key = $(this).html();
        $(".js-input-key").each(function () {
            if ($(this).html() === ''){
                $(this).html(key);
                count += 1;
                return false;
            }
        });
        if (count === 5) {
            $(".js-wrapper-box-accept").removeClass("hide");
        }
    });

    $(".js-wrapper-box-accept").on("click", function () {
        console.log("len = ", $(".wrapper__input").length);
        // for (let i = 0; i < $(".wrapper__input").length; i += 1){

        // }
        $(".wrapper__input").css("top", "30px");
        count = 0;
        attempt += 1;
        $(this).addClass("hide");
    })
});