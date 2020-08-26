    // 侧边栏的隐藏和展开
    let hide = document.getElementById('hide');
    let aside = document.querySelector("aside");
    let main = document.querySelector("main");


    hide.onclick = () => {
        aside.parentNode.removeChild(aside);
        hide.parentNode.removeChild(hide);
        createShow();
    }

    function createShow() {
        let show;
        show = document.createElement("a");
        show.classList.add('btn','rounded-circle','position-absolute','hidden');
        show.setAttribute('role','button');
        show.setAttribute('title','显示侧边栏');
        show.innerHTML = "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-chevron-left\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "  <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n" +
            "</svg>";
        main.appendChild(show);

        show.onclick = () => {
            show.parentNode.removeChild(show);
            createAside();
        }
    }

    function createAside() {
        let newAside;
        let hide;
        hide = document.createElement("a");
        hide.classList.add('btn','rounded-circle','position-absolute','hidden');
        hide.setAttribute('id','hide');
        hide.setAttribute('role','button');
        hide.setAttribute('title','隐藏侧边栏');
        hide.innerHTML = "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-chevron-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "  <path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"/>\n" +
            "</svg>";
        newAside = aside.cloneNode(true);
        main.appendChild(hide);
        main.appendChild(newAside);

        hide.onclick = () => {
            newAside.parentNode.removeChild(newAside);
            hide.parentNode.removeChild(hide);
            createShow();
        }

    }