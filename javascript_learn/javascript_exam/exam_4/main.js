    // 设置画布

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let para = document.querySelector("p");
    let count = 0;

    // 生成随机数的函数

    function random(min,max) {
     const num = Math.floor(Math.random() * (max - min)) + min;
     return num;
    }

    function randomColor() {
        return 'rgb(' +
            random(0,255) + ', ' +
            random(0,255) + ', ' +
            random(0,255) + ')' ;
    }

    function Shape(x,y,velX,velY,exists) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.exists = exists;
    }

    function EvilCircle(x,y,exists) {
        Shape.call(this,x,y,20,20,exists);
        this.color = 'white';
        this.size = 10;
    }

    EvilCircle.prototype = Object.create(Shape.prototype);
    EvilCircle.prototype.constructor = EvilCircle;


    function ball(x, y, velX, velY, color, size,exists) {

        Shape.call(this,x,y,velX,velY,exists);
        this.color = color;
        this.size = size;
    }

    ball.prototype = Object.create(Shape.prototype);
    ball.prototype.constructor = ball;

    ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
        ctx.fill();
    }

    EvilCircle.prototype.drawEvil = function(){
        ctx.beginPath();
        ctx.lineWidth = 3; // 让圈更厚一点
        ctx.strokeStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
        ctx.stroke();
    }

    // 让小球动起来！
    ball.prototype.update = function () {
        if ((this.x +　this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    EvilCircle.prototype.checkBounds = function (){
        if ((this.x + this.size) >= width) {
           this.x -= this.size;
        }

        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }

        if ((this.y + this.size) >= height) {
            this.y -= this.size;
        }

        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

    EvilCircle.prototype.setControl = function(){
        window.onkeydown = e => {
            switch (e.key) {
                case 'a':
                    this.x -= this.velX;
                    break;
                case  'd':
                    this.x += this.velX;
                    break;
                case  'w':
                    this.y -= this.velY;
                    break;
                case  's':
                    this.y += this.velY;
            }
        }
    }

    EvilCircle.prototype.collisionDetect = function(){
        for (let j = 0;j <balls.length; j++) {
            if (balls[j].exists === true ) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= (this.size + balls[j].size)) {
                    balls[j].exists = false;
                    count --;
                    para.textContent = '还剩' + count + '个球';
                }
            }
        }
    }
    let balls = [];

    while (balls.length < 25) {
        let size = random(10,20);
        let ballItem = new ball(
            random(0 + size, width - size),
            random(0 +　size, height - size),
            random(-5,5),
            random(-5,5),
            randomColor(),
            size,
            true
        );

        balls.push(ballItem);
        count++;
        para.textContent = '还剩' + count + '个球';

    }

    let evil  = new EvilCircle(
        random(0 , width ),
        random(0 , height ),
        true
    );

    evil.setControl();


    // 运动循环
    function loop() {
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.fillRect(0,0,width,height);

        for (let i = 0;i < balls.length;i++) {
            if (balls[i].exists === true) {
                balls[i].draw();
                balls[i].update();
                balls[i].collisionDetect();
            }
        }

        evil.drawEvil();
        evil.checkBounds();
        evil.collisionDetect();

        requestAnimationFrame(loop);
    }

    // 添加碰撞检测
    ball.prototype.collisionDetect = function () {
        for (let j = 0;j < balls.length; j++) {
            if (this !== balls[j]) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = randomColor();
                }
            }
        }

    }

    loop();