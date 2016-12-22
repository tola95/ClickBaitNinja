console.log('ninja online');

$.get(chrome.extension.getURL('/overlay.html'), function(data) {
    //$(data).appendTo('body');
    // Or if you're using jQuery 1.8+:
    $($.parseHTML(data)).appendTo('body');
});

$(document).ready(function(){
    $("#overlay").hide();
});

$('a').hover(function(e)
{  
    var x = e.pageX;
    var y = e.pageY;
    $(this).data('timeout', window.setTimeout(function()
    {
        console.log('hovered for 2 seconds');
        e.preventDefault();
        $("#overlay iframe").attr("src", $(this).attr('href'));

        $('#overlay').css('left',e.pageX); 
        $('#overlay').css('top',e.pageY);
        $('#overlay').css('display','inline');
        $("#overlay").css("position", "absolute"); 
    }, 2000));
},
function()
{
    clearTimeout($(this).data('timeout'));
});
