$(function () {

    let word = '';

    $.ajax({
        url: 'test1.txt',
        dataType: 'text',
        success: function (data) {
            ChoiseWord(data);
        }
    });
    
    function ChoiseWord(data) {
        let arrayOfLines = data.split(' ');
        arrayOfLines = arrayOfLines.filter(function(line) {
            return line.trim() !== '';
        });
        if (arrayOfLines.length > 0) {
            let randomWord = arrayOfLines[Math.floor(Math.random() * arrayOfLines.length)];
            word = randomWord;
        }
    }
    
    let count = 0;
    let attempt = 0;
    $(".js-wrapper-key").on("click", function () {
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

    $(".wrapper__box_input").on("click", function () {
        if ($(this).length > 0 && $(this).hasClass('disable') === false) {
            $(this).html('');
        }
    });

    $(".js-wrapper-box-accept").on("click", function () {
        count = 0;
        attempt += 1;
        let userWord = "";
        $(".wrapper__box_input").each(function () {
            $(this).addClass("disable");
            if (word.indexOf($(this).text().toLowerCase()) > -1) {
                $(this).css({"background-color": "green", "color": "white"});
            }
            userWord += $(this).text();
        });
        $(".wrapper__container").prepend(`
        <div class="wrapper__input">
            <div class="wrapper__box wrapper__box_input"><p class="js-input-key wrapper__key"></p></div>
            <div class="wrapper__box wrapper__box_input"><p class="js-input-key wrapper__key"></p></div>
            <div class="wrapper__box wrapper__box_input"><p class="js-input-key wrapper__key"></p></div>
            <div class="wrapper__box wrapper__box_input"><p class="js-input-key wrapper__key"></p></div>
            <div class="wrapper__box wrapper__box_input"><p class="js-input-key wrapper__key"></p></div>
        </div>
        `);
        $(this).addClass('hide');
    });
});