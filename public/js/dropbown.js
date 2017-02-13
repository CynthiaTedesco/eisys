/**
 * Created by Cynthia on 10/02/2017.
 */

$(function() {
    console.log('charging dropdown.js...');

    $('.language-dropdown').click(function() {
        console.log('clicking languages');
        $('.language-dropdown').toggleClass('closed');
        $('.language-dropdown').toggleClass('opened');
    });

    function la(){
        console.log('PRINTING!!!');
    }
});