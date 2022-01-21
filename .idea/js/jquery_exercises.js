// // alert($("#header").text());
// let header1 = $("#header");
// alert(header1.html());
//
// alert($("#paragraph").text());
//
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' )});

// $(".codeup").css('border', '1px solid red');

// $("li").css('font-size', '20px');

//JQUERY EVENTS

$('#header').click(function() {
    $(this).css('background-color', '#FF0');
});

$('#paragraph').dblclick(function(e) {
    $(this).css('font-size', '18px');
});

// $('#ulist').mouseenter(function (){
//     $(this).css('color', '#FF0000');
// })

$('#ulist').hover(
    function() {
        $(this).css('color', '#FF0000');
    },
    function() {
        $(this).css('color', '#000000');
    }
);