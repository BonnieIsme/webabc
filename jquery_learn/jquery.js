$(function () {
    $("<input type='button' name='test' value='click me'>" +
        "<input type='button' name='test' value='triggle click me'>" +
        "<input type='button' name='test' value='detach click me'>" +
        "<input type='button' name='test' value='toggle click me'>").appendTo($('body'));

    $("input[type=button]")
        .eq(0).on('click',function () {
        alert('you click me.');
    }).end().eq(1)   // end()取消当前的jquery对象，返回到前面的jquery对象，接着eq()返回新的jquery对象
        .on('click',function () {
            // $('input[type=button]:eq(0)').trigger('click');
             $('.panel').text('Triggle click me.');
        }).end().eq(2)
        .on('click',function () {
           // $('input[type=button]:eq(0)').unbind('click');
             $('.panel').text('Detach click me.');
            }).end().eq(3)
        .click(function () {
            $('.panel').toggle('slow');
        });
})