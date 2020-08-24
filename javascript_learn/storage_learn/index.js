    const rememberDiv = document.querySelector('.remember');
    const enterName = document.getElementById('entername');
    const submitBtn = document.getElementById('submitname');
    const forgetDiv = document.querySelector('.forget');
    const forgetBtn = document.getElementById('forgetname');
    const form = document.querySelector('form');

    const h1 = document.querySelector("h1");
    const personalGreeting = document.querySelector('.personal-greeting');

    // 阻止表单默认提交
    form.addEventListener('submit',function (e) {
            e.preventDefault();
    })

    submitBtn.addEventListener('click',function () {
        localStorage.setItem('name',enterName.value);
        nameDisplayCheck();
    })

    forgetBtn.addEventListener('click',function () {
        localStorage.removeItem('name');
        nameDisplayCheck();
    })

    function nameDisplayCheck() {
        if (localStorage.getItem('name')) {
            let name = localStorage.getItem('name');
            h1.style.fontFamily = 'cursive';
            h1.style.color = 'grey';
            personalGreeting.style.color = 'green';
            h1.textContent = 'Welcome!' + name;
            personalGreeting.textContent = 'Welcome to our website,' + name + '! We hope you have fun while you are here.';
            forgetDiv.style.display = 'block';
            rememberDiv.style.display = 'none';
        } else {
            h1.textContent = 'Welcome to our website';
            personalGreeting.textContent = 'Welcome to our website';
            forgetDiv.style.display = 'none';
            rememberDiv.style.display = 'block';
        }
    }

    // 确定每次页面重新加载后，保持个性化问候
    document.body.onload = nameDisplayCheck;