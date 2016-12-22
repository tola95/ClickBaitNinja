console.log('ninja online');
$('a').hover(function()
{
    $(this).data('timeout', window.setTimeout(function()
    {
        console.log('hovered for 2 seconds');
    }, 2000));
},
function()
{
    clearTimeout($(this).data('timeout'));
});
