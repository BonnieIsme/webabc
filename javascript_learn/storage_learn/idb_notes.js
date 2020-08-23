    const list = document.querySelector('ul');
    const titleInput = document.getElementById('title');
    const bodyInput  = document.getElementById('body');
    const form = document.querySelector("form");
    const createBtn  = document.querySelector("form button");
    let dataBase;

    // 确保加载完之后操作
    window.onload = () => {

        // 打开数据库
        let Request = window.indexedDB.open('note',1);

        // 若尚未设置数据库，或者使用比现有更大版本号打开数据库时，则运行此程序
        // 无中生库
        Request.onupgradeneeded = (e) => {
            let dataBase = e.target.result;
            let objectStore = dataBase.createObjectStore('note',{keyPath:'id',autoIncrement:true});

            objectStore.createIndex('title','title',{unique:false});
            objectStore.createIndex('body','body',{unique:false});

            console.log('Database setup complete');
        }

        Request.onerror = () => {
            console.log('Database failed to open.');
        };

        Request.onsuccess = () => {
            console.log('Database opened successfully.');
            dataBase = Request.result;
            displayData();
        };



        // 添加数据到数据库
        form.onsubmit = (e) => {
            e.preventDefault();

            let newItem = {title:titleInput.value,
                            body: bodyInput.value};

            let transaction = dataBase.transaction(['note'],'readwrite');  // 返回一个transaction对象

            let objectStore = transaction.objectStore('note');

            let request = objectStore.add(newItem); // 返回一个请求对象

            request.onsuccess = () => {
                titleInput.value = ' ';
                bodyInput.value = ' ';
            };

            transaction.oncomplete = () => {
                console.log('Transaction completed');
              //  displayData();
            };

            transaction.onerror = () => {
                console.log('Transaction not opened due to error');
            };

        };

        createBtn.onclick = displayData;

        function displayData() {

            // 首先清空一下列表，否则会有大量重复信息
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }

            let objectStore = dataBase.transaction(['note'],'readwrite').objectStore('note');

            // IDBObjectStore.openCursor()，可用于迭代对象存储中的记录的构造
            objectStore.openCursor().onsuccess = (e) => {
                let cursor = e.target.result;
                if (cursor) {
                    let listItem = document.createElement('li');
                    let h3 = document.createElement("h3");
                    let para =document.createElement("p");

                    listItem.appendChild(h3);
                    listItem.appendChild(para);

                    h3.textContent = cursor.value.title;
                    para.textContent = cursor.value.body;

                    list.appendChild(listItem);

                    listItem.setAttribute('data-note-id',cursor.value.id);
                    
                    let deleteBtn = document.createElement("button");
                    listItem.appendChild(deleteBtn);
                    deleteBtn.textContent = 'delete';

                    deleteBtn.onclick = deleteItem;

                    cursor.continue();
                } else {
                    if (!list.firstChild) {
                        let listItem = document.createElement('li');
                        list.appendChild(listItem);
                        listItem.textContent = 'No notes stored';
                    }

                    console.log('Notes all displayed');
                }
            }
        }

        function deleteItem(e) {
            let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
            let transaction = dataBase.transaction(['note'],'readwrite');
            let objectStore = transaction.objectStore('note');
            let request = objectStore.delete(noteId);

            transaction.oncomplete = () => {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                console.log('Note' + noteId + 'deleted');

                if (!list.firstChild) {
                    let listItem = document.createElement("li");
                    listItem.textContent = 'No notes here';
                    list.appendChild(listItem);
                }
            };

            request.onsuccess = () => {
                console.log('delete successfully');
            }

        }

    };