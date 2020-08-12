    let str = 'good luck';
    let baidu = '百度';

    document.write('<p>' + str.big() + '</p>');
    document.write('<p>' + str.italics() + '</p>');
    document.write('<p>' + str.small() + '</p>');
    document.write('<p>' + baidu.link('https://www.baidu.com/') + '</p>');
    document.write('<a href="#" style="color: #FF359A">在javascript里面写的html</a>');

    // DOM-REGEXP对象
    let testString = 'Give me five, bro!';
    let way = /\w/g;
    let way2 = /\s/g;
    let way3 = /[a-z]/g;
    let way4 = /me/g;
    let way5 = /\bGive/g;

    // 查找单词字符
    document.write('<p>' +　testString.match(way)　+ '</p>');

    // 查找空白字符
    document.write('<p>' +　testString.match(way2)　+ '</p>');

    // 在字符范围内进行全局检索
    document.write('<p>' +　testString.match(way3)　+ '</p>');

    // 指定某个字段的全局搜索
    document.write('<p>' +　testString.match(way4)　+ '</p>');

    // 对字符串中的单词的开头或结尾进行‘Give’的全局搜索
    document.write('<p>' +　testString.match(way5)　+ '</p>');

    // 返回的位置
    document.write('<p>' +　testString.search(way4)　+ '</p>');

    // Regexp对象的方法
    let test = 'Hello, bro';
    let patt = /Hello/g;

    document.write('<p>' +　'返回值：' + patt.exec(test)　+ '</p>');
    document.write('<p>' +　'返回值: ' + patt.test(test)　+ '</p>');

    //DOM date对象
    let date = new Date(1991,10,5,21,33,45,12);
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();

    let historyTime = new Date();
    let historyMs = historyTime.getTime();

    document.write('<p>' + y + '年' + m + '月' + d + '日' + '</p>');
    document.write('距1970年1月1日已是：' + historyMs + '毫秒');