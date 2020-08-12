    let node = document.getElementById('timer');
    console.log(node);

    // console.dir 打印我们返回的元素对象，更好地查看里面的属性和方法
    console.dir(node);

    let timerText ;
    timerText = document.createElement("p");
    timerText.textContent = node.innerText;
    node.appendChild(timerText);


    // 输出元素节点的文本内容

    // 更新元素节点的文本内容
    //node.innerHTML = ' refresh content';





    /*
    let txt = document.getElementById('txt');
    txt.innerHTML = '好好学习，天天向上！';

    let testString = 'SeanIshim';

    let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

    // 用，号分隔myData, 字符串成了数组
    let myArray = myData.split(',');

    // 数组又成了字符串 方法一
    let myNewString = myArray.join(',');

    // 数组成字符串 方法二
    let newString = myArray.toString();

     */


