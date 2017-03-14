/**
 * Created by Cynthia on 10/02/2017.
 */

$(function () {
    $('.language-dropdown').click(function () {
        $('.language-dropdown').toggleClass('closed');
        $('.language-dropdown').toggleClass('opened');
    });

    if ($(".result-message").size() > 0){
    //     console.log('Setting focus');
    //     document.getElementsByClassName("result-message").focus();
    //     // $(window).scrollTop($(".result-message").position().top);
        location.href = "#result-message";
        // $(".result-message")[0].focus();
    }

    // window.setTimeout(function () { $('.result-message').focus(); }, 1);

});