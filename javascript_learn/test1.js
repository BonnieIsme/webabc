    //添加一个图像切换器
    let myImg = document.querySelector('img');

    myImg.onclick = function () {
        let  mySrc = myImg.getAttribute('src');
        if (mySrc === './images/carrot.jpg') {
            myImg.setAttribute('src', './images/cat1.jpg');
        } else {
            myImg.setAttribute('src', './images/carrot.jpg');
        }

    }

    //个性化欢迎信息
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');

    function setUserName() {
        let myName = window.prompt("请输入你的名字:","Bonnie");

        //防止名字为空(若输入为空或者按取消键后自动设置为null，则请设置名字)
        if (!myName) {
            setUserName();
        } else {
            localStorage.setItem('name',myName);
            myHeading.textContent = '欢迎新朋友，' + myName + ', have a good day！';
        }

    }

    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '亲爱的老朋友，' + storedName + ', 欢迎回来！';
    }

    myButton.onclick = function () {
        setUserName();
    }

    let bSpan = document.getElementById('divB');
    bSpan.remove();

    // 对话框，确认加取消
    let bomTest = window.confirm('你学废了吗？')

    // 警告框，仅确认
    let bomtest1 = window.alert('会了不？');