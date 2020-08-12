    const customName = document.getElementById('customName');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');

    let peopleArray = ['哪吒','福尔摩斯','羽丘芽美','柯南','魏无羡'];
    let placeArray = ['肯德基','迪士尼','云深不知处','东京铁塔','鬼屋'];
    let actionArray = ['原地变成大胖子','在人行道化成了一坨泥','变成一条鼻涕虫爬走了','发现手机没带狂奔回家'];

    let people = randomValueFromArray(peopleArray);
    let place = randomValueFromArray(placeArray);
    let action = randomValueFromArray(actionArray);

    storyText = '今天气温 34 摄氏度,' + people + '出去遛弯。当走到'+
    place + '门前时，突然就'+ action +'。' + '人们都惊呆了，李雷全程目睹但并没有慌，因为'+ people +'是一个拥有七龙珠的 130 公斤' +
        '的传奇人物，随时准备召唤神龙，实现愿望。';

    randomize.addEventListener('click', result);

    // 随机返回数组中的一个元素
    function randomValueFromArray(array) {
     return array[Math.floor(Math.random() * array.length)];
    }


    function result() {

        let newStory ;
        let supNewStory;
        newStory = storyText;

        if(customName.value !== '') {
            let name = customName.value;
            supNewStory = storyText.replace('李雷', name);
        } else {
            supNewStory = storyText;
        }

        if(document.getElementById("american").checked) {
            let weight = Math.round(300);
            let temperature = Math.round(94);
            let weightTxt = weight.toString() + ' 英镑';
            let temperTxt = temperature.toString() + ' 华氏度';
            let Story = supNewStory.replace('34 摄氏度',temperTxt);
            newStory = Story.replace('130 公斤',weightTxt);
        } else {
            newStory =supNewStory;
        }

        story.textContent = newStory;
        story.style.visibility = 'visible';

    }