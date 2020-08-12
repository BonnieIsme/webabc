    // switch的初步练习
    let select = document.querySelector('select');
    let para  = document.querySelector('p');
    let str = 'good luck';




    select.addEventListener('change',setWeather);

    function setWeather() {
        let choice = select.value;
        switch (choice) {
            case 'sunny':
                para.textContent = '晴天，祝你好运！';
                break;

            case 'rainy':
                para.textContent = '下雨天，记得带伞！';
                break;

            case 'snowing':
                para.textContent = '下雪去堆雪人吧！';
                break;

            default:
                para.textContent = ' ';
        }
    }

    console.log(select);
    console.log(para);
    console.dir(select);
    console.dir(para);
    alert(select.getAttributeNode('id').nodeValue);


    // switch与三元运算练习
    let selectTheme = document.querySelector('#theme');

    function update(bgColor,txtColor) {
        document.querySelector("html").style.backgroundColor = bgColor;
        document.querySelector('html').style.color = txtColor;
    }

    selectTheme.onchange = function () {
        ( selectTheme.value === 'black' ) ? update('black','wheat') : update('white','grey');
    }

