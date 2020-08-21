    let media = document.querySelector('video');
    let controls = document.querySelector('.controls');

    // 控件们
    let play = document.querySelector('.play');
    let stop = document.querySelector('.stop');
    let rwd = document.querySelector('.rwd');
    let fwd = document.querySelector('.fwd');

    let timerWrapper = document.querySelector('.timer');
    let timer = document.querySelector('.timer span');
    let timerBar = document.querySelector('.timer div');


    // 删除默认浏览器控件 并使自定义控件可见
    media.removeAttribute('controls');
    controls.style.visibility = 'visible';

    media.ontimeupdate = () => {
        setTime();
    }

    // 播放和暂停视频
    play.addEventListener('click',playPauseMedia);

    function playPauseMedia() {
        console.log(media.currentTime);
        rwd.classList.remove('active');
        fwd.classList.remove('active');
        clearInterval(intervalRwd);
        clearInterval(intervalFwd);
        if (media.paused) {
           // play.setAttribute('data-icon','U');
            media.play();
        } else {
           // play.setAttribute('data-icon','P');
            media.pause();
        }
    }


    stop.addEventListener('click',stopMedia);
    media.addEventListener('ended',stopMedia);
    function stopMedia() {
            media.pause();
            media.currentTime = 0;
            play.setAttribute('data-icon','P');

            // 修复播放和暂停功能，防止快进或快退功能激活时，它不起作用
            rwd.classList.remove('active');
            fwd.classList.remove('active');
            clearInterval(intervalRwd);
            clearInterval(intervalFwd);
    }

    // 快进与快退
    let intervalFwd;
    let intervalRwd;

    rwd.addEventListener('click',mediaBackward);
    fwd.addEventListener('click',mediaForward);

    function mediaBackward() {
        clearInterval(intervalFwd);
        fwd.classList.remove('active');

        if (rwd.classList.contains('active')) {
            rwd.classList.remove('active');
            clearInterval(intervalRwd);
            media.play();
        } else {
            rwd.classList.add('active');
            intervalRwd = setInterval(windBackward,200);
            media.pause();

        }
    }

    function mediaForward() {
        clearInterval(intervalRwd);
        rwd.classList.remove('active');

        if(fwd.classList.contains('active')) {
            fwd.classList.remove('active');
            clearInterval(intervalFwd);
            media.play();
        } else {
            fwd.classList.add('active');
            media.pause();
            intervalFwd = setInterval(windForward, 200);
        }
    }

    function windBackward() {
        if(media.currentTime <= 3) {
            stopMedia();
        } else {
            media.currentTime -= 3;
        }
    }

    function windForward() {
        if(media.currentTime >= media.duration - 3) {
            stopMedia();
        } else {
            media.currentTime += 3;
        }
    }

    function setTime() {
    let minutes = Math.floor(media.currentTime / 60);
    let seconds = Math.floor(media.currentTime - minutes * 60);
    let minuteValue ;
    let secondValue;

    if( minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = '0' + seconds;
    } else {
        secondValue = seconds;
    }

    let mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;

    // 设置内部<div>的长度应该是通过首先计算外部的<div>的宽度来计算出来的
    let barLength = timerWrapper.clientWidth * (media.currentTime / media.duration);
    timerBar.style.width = barLength + 'px';
    }





