    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* 添加图片循环 */
    for (let i = 0;i < 5;i++) {
        const img = document.createElement("img");
        img.src = './images/pic' + (i + 1).toString() + '.jpg';
        thumbBar.appendChild(img);
        img.onclick = function (e) {
            changeImage(e);
        }
    }

    function changeImage(e ){
        displayedImage.setAttribute('src',e.target.getAttribute('src'));
    }


    let count = 1;

    /* 编写 变暗/变量 按钮功能 */
    btn.onclick = function () {
        turnDark();

        if (count % 2 === 0) {
            turnLight();
        }

        count++;
    }

    function turnDark() {
        overlay.style.backgroundColor = 'rgba(0,0,0,.5)';
    }

    function turnLight() {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
