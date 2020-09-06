         $(function () {

         // 右侧边栏的隐藏和展开
         let hide = $('#hide');
         let aside = $('aside');
         let main = $('main');

         hide.click(function () {
             aside.remove();
             hide.remove();
             $(this).createShow();
         });

        $.fn.createShow = function () {
            let show = $('<a></a>');
            show.addClass('btn rounded-circle position-absolute hidden');
            show.attr({
                'role': 'button',
                'title': '显示侧边栏'
            });
            show.html("<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-chevron-left\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "  <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n" +
                "</svg>");
            main.append(show);

            show.click(function () {
                show.remove();
                $(this).createAside();
            });
        }

         $.fn.createAside = function () {
             let hide = $('<a></a>');
             let newAside = aside.clone(true);

             hide.addClass('btn rounded-circle position-absolute hidden');
             hide.attr({
                 'id':'hide',
                 'role':'button',
                 'title':'隐藏侧边栏'
             });
             hide.html("<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-chevron-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                 "  <path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"/>\n" +
                 "</svg>");

             main.append(newAside);
             main.append(hide);
             hide.click(function () {
                 newAside.remove();
                 hide.remove();
                 $(this).createShow();
             });
         }
     });

    /*
     $('#hide').click(function () {
         $("aside").animate({
              width:'toggle'
         });
     });
    */

     $(function () {

         // 左侧边栏
         let flag = 0;
         $('.main-menu').click(function () {
             if (flag === 0) {
                 $('#leftBottom').hide();
                 $('.left').animate({
                     width:'72px'
                 });
                 $('.left-text').addClass('d-none');
                 $('.third-one p').css({ paddingLeft:'15px'});
                 $('.third-two').css({paddingLeft:'15px'});
                 $('.nav-item a').css({
                     padding: 0
                 },"fast");

                 $('#writeMail').removeClass('rounded-pill')
                     .addClass('rounded-circle')
                     .css({
                         margin:0,
                         width: '46px',
                         height:'46px'
                     })
                 $('#writeMail img').css({
                     position:'relative',
                     left: '-30%'
                 });
                 $('.nav-item .badge').css({
                     paddingLeft:0
                 });
                 $('.left-center ul li:first-child a div').removeClass('mx-3').addClass('ml-3');
                 $('.left-top-text').remove();

                 $('#userTop').html("<svg class=\"bi\" width=\"1.3rem\" height=\"1.3rem\" fill=\"#5f6368\">\n" +
                     "<use xlink:href=\"bootstrap-icons.svg#chat-quote-fill\"/>\n" +
                     "</svg>");



                 flag = 1;
             } else {
                 $('#leftBottom').show();
                 $('.left').animate({
                     width:'256px'
                 });
                 $('.left-text').removeClass("d-none");
                 $('.third-one p').css({ paddingLeft:'30px'});
                 $('.third-two').css({paddingLeft:'30px'});
                 $('.nav-item a').css({
                     padding: '.5rem 1rem'
                 },"fast");

                 $('#writeMail').removeClass('rounded-circle')
                     .addClass('rounded-pill')
                     .css({
                         marginLeft:'5px',
                         width: '120px',
                         height:'46px'
                     })
                 $('#writeMail img').css({
                     marginRight:'9.5px',
                     position:'relative',
                     left: '0'
                 });
                 $('<span></span>').text('写邮件').addClass('left-top-text').appendTo('#writeMail');
                 $('.nav-item .badge').css({
                     paddingLeft:'70px'
                 });
                 $('.left-center ul li:first-child a div').removeClass('ml-3').addClass('mx-3');
                 flag = 0;
             }
         })
     })

     $(function () {

        // 左侧边栏——更多标签
         let f1 = 0;
         $('.more').click(function () {
             if (f1 === 0) {
                 $('#more-tabs').removeClass('d-none');
                 $('.more div').html("<svg class=\"bi\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n" +
                     "                    <use xlink:href=\"bootstrap-icons.svg#chevron-up\"/>\n" +
                     "                </svg>");
                 $("#more").text("隐藏标签");
                 f1 = 1;
             } else {
                 $('#more-tabs').addClass('d-none');
                 $('.more div').html("<svg class=\"bi\" width=\"1em\" height=\"1em\" fill=\"#5f6368\">\n" +
                     " <use xlink:href=\"bootstrap-icons.svg#chevron-down\"/>\n" +
                     " </svg>");
                 $("#more").text("显示更多标签");

                 f1 = 0;
             }
         });
     })

     $(function () {
         let f2 = 0;
         $('.cla').click(function () {
             if (f2 === 0) {
                 $('#classify').removeClass('d-none');
                 $('.cla a div:first-child').html("<svg class=\"bi\" width=\"0.8em\" height=\"0.8em\" fill=\"currentColor\">\n" +
                     " <use xlink:href=\"bootstrap-icons.svg#caret-up-fill\"/>\n" +
                     " </svg>");
                 f2 = 1;
             } else {
                 $('#classify').addClass('d-none');
                 $('.cla a div:first-child').html("<svg class=\"bi\" width=\"0.8em\" height=\"0.8em\" fill=\"currentColor\">\n" +
                     " <use xlink:href=\"bootstrap-icons.svg#caret-down-fill\"/>\n" +
                     " </svg>");
                 f2 = 0;
             }
         });
     })

    // 写邮件
    $("#writeMail").click(function () {
        window.open("test.html","写邮件","height,width=400");
    });

