    // functions 1
    let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    let para = document.createElement('p');
    let section = document.querySelector("section");

    function setName(names) {
        let newName = names[Math.floor(Math.random() * names.length)];

        para.textContent = newName ;
        section.innerHTML = ' ';
        section.appendChild(para);
    }

    setName(names);

    // functions 2
    function draw() {
        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext('2d');
        let x = 50;
        let y = 60;
        let width = 100;
        let height = 75;
        let color = 'blue';

        ctx.fillStyle = color;
        ctx.fillRect(x,y,width,height);
    }

    draw();

    function random(Number) {
        return Math.floor(Math.random() * Number);
    }

    function drawAgain() {
        let canvas = document.getElementById('circle');
        let ctx = canvas.getContext('2d');


        for (let i = 0;i < 100; i++) {
            let width = random(i * 10);
            let height = random(i * 10);

            ctx.beginPath(); //清空子路径列表开始一个新路径的方法
            ctx.fillStyle = 'rgba(241,147,156,.5)';
            ctx.arc(random(width),random(height),random(50),0,2*Math.PI);
            ctx.fill();

        }
    }

    drawAgain();
