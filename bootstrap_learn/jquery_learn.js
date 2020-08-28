    $('#test-btn').click(function () {
        $('.test-jq').hide(1000);
    });

    $('#show-btn').click(function () {
        $('.test-jq').show(1000);
    });

    // 显示和隐藏切换
    $('.toggle-text').click(function () {
        $('.test-jq').toggle(1000);
    });

    // 动画
    $('#animate').click(function () {
        $('.test-jq').animate({
            width:'toggle'
        });
    });

  /*  myWindow = window.open('../gmail/test.html','_blank','test','width=200,height=200');
    myWindow.document.write("it is a test");
    myWindow.focus();
    myWindow.opener.document.write("it is a parent window");

   */

  /*  $('#forForm').click(function () {
        window.open('../gmail/test.html?toname=opener.form1.in','_blank','test','width=200,height=200');
    });

   */

    $('#write').click(function () {
        window.open('../gmail/test.html','_blank','test','width=200,height=200')
    });