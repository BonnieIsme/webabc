    // Scene() 构造器创建一个新的场景，表示即将显示的整个3D世界
    let scene = new THREE.Scene();

    // 创建摄影机 四个参数：观察区域（角度表示） 屏幕宽高比 近裁切面 远裁切面
    let camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
    camera.position.z = 5;

    // 渲染器
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 创建魔方
    let cube;
    let loader = new THREE.TextureLoader();

    loader.load('../images/metal003.png',function (texture) {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2,2);

        let geometry = new THREE.BoxGeometry(2.4,2.4,2.4); // 几何形状
        let material = new THREE.MeshLambertMaterial({     // 素材
            map:texture,
            shading: THREE.FlatShading
        });

        cube = new THREE.Mesh(geometry,material);
        scene.add(cube);



        draw(); // 开始动画
        console.log('ok');
    });

    // draw()前，先打光，以至于照亮场景中的物体
    let light = new THREE.AmbientLight('rgb(255,255,255)'); // 轻度照亮全场的柔光，就像太阳光
    scene.add(light);

    let spotLight = new THREE.SpotLight('rgb(255,255,255)'); // 直射的硬光，就像聚光灯
    spotLight.position.set(100,1000,1000);
    spotLight.castShadow = true;
    scene.add(spotLight);

    function draw() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene,camera);
        requestAnimationFrame(draw);
    }

