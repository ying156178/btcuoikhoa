
//open Form
function openForm(){
    formaddtodo.style.display="block";
    backgroundtask=document.getElementById("backgroundtask");
    backgroundtask.style.opacity='0.3'
    backgroundtask.style.zIndex='10'
}
// close Form
function closeForm(){
    formaddtodo.style.display="none";
    //reset cac dac diem ve mac dinh
    document.getElementById("category").value="";
    document.getElementById("title").value="";
    document.getElementById("content").value=''
    document.getElementById("category").style.border='0.5px solid #a9a9a9'
    document.getElementById("title").style.border='0.5px solid #a9a9a9'
    document.getElementById("content").style.border='0.5px solid #a9a9a9'
    backgroundtask=document.getElementById("backgroundtask");
    backgroundtask.style.opacity='0'
    backgroundtask.style.zIndex='-10'
}
function openEditForm(){
    formedittodo.style.display="block";
    backgroundtask=document.getElementById("backgroundtask");
    backgroundtask.style.opacity='0.3'
    backgroundtask.style.zIndex='10'
}
function closeEditForm(){
    formedittodo.style.display="none";
    document.getElementById("edit-category").style.border='0.5px solid #a9a9a9'
    document.getElementById("edit-title").style.border='0.5px solid #a9a9a9'
    document.getElementById("edit-content").style.border='0.5px solid #a9a9a9'
    backgroundtask=document.getElementById("backgroundtask");
    backgroundtask.style.opacity='0'
    backgroundtask.style.zIndex='-10'
}
//doi mau o khi phat hien noi dung
function checkEmtyorWhiteSpaceinCell(){
    const category = document.getElementById("category").value
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    //them cac bien check de xac nhan truyen du lieu
    checkCategory=false
    checkTitle=false
    checkContent=false
    //check category
    if (!(category != null && /\S/.test(category))){
        document.getElementById("category").style.border='1px solid #E74C3C'
    } else {
        document.getElementById("category").style.border='1px solid #3BC057'
        checkCategory=true}
    //check title
    if (!(title != null && /\S/.test(title))){
        document.getElementById("title").style.border='1px solid #E74C3C'
    } else {
        document.getElementById("title").style.border='1px solid #3BC057'
        checkTitle=true}
    //check content
    if (!(content != null && /\S/.test(content))){
        document.getElementById("content").style.border='1px solid #E74C3C'
    } else {
        document.getElementById("content").style.border='1px solid #3BC057'
        checkContent=true}
    return checkCategory,checkTitle,checkContent
}
//function check empty or whitespace in edit form
function checkEmptyOrWhitespaceinEditForm(){
    const editcategory = document.getElementById("edit-category").value
    const edittitle = document.getElementById("edit-title").value
    const editcontent = document.getElementById("edit-content").value
    //them cac bien check de xac nhan truyen du lieu
    checkeditCategory=false
    checkeditTitle=false
    checkeditContent=false
    //check category
    if (!(editcategory != null && /\S/.test(editcategory))){
        document.getElementById("edit-category").style.border='1px solid #E74C3C'
    } else {
        document.getElementById("edit-category").style.border='1px solid #3BC057'
        checkeditCategory=true}
    //check title
    if (!(edittitle != null && /\S/.test(edittitle))){
        document.getElementById("edit-title").style.border='1px solid #E74C3C'
    } else {
        document.getElementById("edit-title").style.border='1px solid #3BC057'
        checkeditTitle=true}
    //check content
    if (!(editcontent != null && /\S/.test(editcontent))){
        document.getElementById("edit-content").style.border='1px solid #E74C3C'
    } else {
        document.getElementById("edit-content").style.border='1px solid #3BC057'
        checkeditContent=true}
    return checkeditCategory,checkeditTitle,checkeditContent
}
//function tao 1 note-content moi 
function createNoteContent(){
    var newLi=document.createElement("li")
    var newP1=document.createElement("p")
    var newH2=document.createElement('h2')
    var newDiv=document.createElement('div')
    var newP2=document.createElement('p')
    var newI1=document.createElement('i')
    var newSpan=document.createElement('span')
    var newDiv2=document.createElement('div')
    var newI2=document.createElement('i')
    var newI3=document.createElement('i')
    var newSpantimecheck=document.createElement('span')

    //them attribute de an CSS
    newLi.setAttribute('class','note-content')
    newP1.setAttribute('id','category-name')
    newP1.setAttribute('class','category-name')
    newH2.setAttribute('id','task-name')
    newH2.setAttribute('class','task-name')
    newDiv.setAttribute('class','line-content')
    newP2.setAttribute('class','content-name')
    newP2.setAttribute('id','content-name')
    newI1.className='fa-regular fa-clock'
    newSpan.setAttribute('class','time-name')
    newDiv2.setAttribute('class','edit-delete-button')
    newI2.className='fa-regular fa-pen-to-square editForm'
    newI3.className='fa-solid fa-trash-can'
    newSpantimecheck.setAttribute('class','timecheck')


    //them con cua the Li vao
    newLi.appendChild(newP1)
    newLi.appendChild(newH2)
    newLi.appendChild(newDiv)
    newLi.appendChild(newP2)
    newLi.appendChild(newI1)
    newLi.appendChild(newSpan)
    newLi.appendChild(newDiv2)
    newLi.appendChild(newSpantimecheck)
    //them con vua div 2 vao
    newDiv2.appendChild(newI2)
    newDiv2.appendChild(newI3)
    //tim vi tri cua to do list de add the li vao
    var position=document.getElementById('todolist')
    console.log(position);
    position.appendChild(newLi)
}
//function tao 1 note-content moi o doing
function createNoteContentinDoing(){
    var newLi=document.createElement("li")
    var newP1=document.createElement("p")
    var newH2=document.createElement('h2')
    var newDiv=document.createElement('div')
    var newP2=document.createElement('p')
    var newI1=document.createElement('i')
    var newSpan=document.createElement('span')
    var newDiv2=document.createElement('div')
    var newI2=document.createElement('i')
    var newI3=document.createElement('i')
    var newSpantimecheck=document.createElement('span')

    //them attribute de an CSS
    newLi.setAttribute('class','note-content')
    newP1.setAttribute('id','category-name')
    newP1.setAttribute('class','category-name')
    newH2.setAttribute('id','task-name')
    newH2.setAttribute('class','task-name')
    newDiv.setAttribute('class','line-content')
    newP2.setAttribute('class','content-name')
    newP2.setAttribute('id','content-name')
    newI1.className='fa-regular fa-clock'
    newSpan.setAttribute('class','time-name')
    newDiv2.setAttribute('class','edit-delete-button')
    newI2.className='fa-regular fa-pen-to-square editForm'
    newI3.className='fa-solid fa-trash-can'
    newSpantimecheck.setAttribute('class','timecheck')


    //them con cua the Li vao
    newLi.appendChild(newP1)
    newLi.appendChild(newH2)
    newLi.appendChild(newDiv)
    newLi.appendChild(newP2)
    newLi.appendChild(newI1)
    newLi.appendChild(newSpan)
    newLi.appendChild(newDiv2)
    newLi.appendChild(newSpantimecheck)
    //them con vua div 2 vao
    newDiv2.appendChild(newI2)
    newDiv2.appendChild(newI3)
    //tim vi tri cua to do list de add the li vao
    var position=document.getElementById('doing-list')
    position.appendChild(newLi)
}
//function tao 1 note-content moi o finish
function createNoteContentinFinish(){
    var newLi=document.createElement("li")
    var newP1=document.createElement("p")
    var newH2=document.createElement('h2')
    var newDiv=document.createElement('div')
    var newP2=document.createElement('p')
    var newI1=document.createElement('i')
    var newSpan=document.createElement('span')
    var newDiv2=document.createElement('div')
    var newI2=document.createElement('i')
    var newI3=document.createElement('i')
    var newSpantimecheck=document.createElement('span')

    //them attribute de an CSS
    newLi.setAttribute('class','note-content')
    newP1.setAttribute('id','category-name')
    newP1.setAttribute('class','category-name')
    newH2.setAttribute('id','task-name')
    newH2.setAttribute('class','task-name')
    newDiv.setAttribute('class','line-content')
    newP2.setAttribute('class','content-name')
    newP2.setAttribute('id','content-name')
    newI1.className='fa-regular fa-clock'
    newSpan.setAttribute('class','time-name')
    newDiv2.setAttribute('class','edit-delete-button')
    newI2.className='fa-regular fa-pen-to-square editForm'
    newI3.className='fa-solid fa-trash-can'
    newSpantimecheck.setAttribute('class','timecheck')


    //them con cua the Li vao
    newLi.appendChild(newP1)
    newLi.appendChild(newH2)
    newLi.appendChild(newDiv)
    newLi.appendChild(newP2)
    newLi.appendChild(newI1)
    newLi.appendChild(newSpan)
    newLi.appendChild(newDiv2)
    newLi.appendChild(newSpantimecheck)
    //them con vua div 2 vao
    newDiv2.appendChild(newI2)
    newDiv2.appendChild(newI3)
    //tim vi tri cua to do list de add the li vao
    var position=document.getElementById('finish-list')
    position.appendChild(newLi)
}
//function tao 1 note-content moi o block
function createNoteContentinBlock(){
    var newLi=document.createElement("li")
    var newP1=document.createElement("p")
    var newH2=document.createElement('h2')
    var newDiv=document.createElement('div')
    var newP2=document.createElement('p')
    var newI1=document.createElement('i')
    var newSpan=document.createElement('span')
    var newDiv2=document.createElement('div')
    var newI2=document.createElement('i')
    var newI3=document.createElement('i')
    var newSpantimecheck=document.createElement('span')

    //them attribute de an CSS
    newLi.setAttribute('class','note-content')
    newP1.setAttribute('id','category-name')
    newP1.setAttribute('class','category-name')
    newH2.setAttribute('id','task-name')
    newH2.setAttribute('class','task-name')
    newDiv.setAttribute('class','line-content')
    newP2.setAttribute('class','content-name')
    newP2.setAttribute('id','content-name')
    newI1.className='fa-regular fa-clock'
    newSpan.setAttribute('class','time-name')
    newDiv2.setAttribute('class','edit-delete-button')
    newI2.className='fa-regular fa-pen-to-square editForm'
    newI3.className='fa-solid fa-trash-can'
    newSpantimecheck.setAttribute('class','timecheck')


    //them con cua the Li vao
    newLi.appendChild(newP1)
    newLi.appendChild(newH2)
    newLi.appendChild(newDiv)
    newLi.appendChild(newP2)
    newLi.appendChild(newI1)
    newLi.appendChild(newSpan)
    newLi.appendChild(newDiv2)
    newLi.appendChild(newSpantimecheck)
    //them con vua div 2 vao
    newDiv2.appendChild(newI2)
    newDiv2.appendChild(newI3)
    //tim vi tri cua to do list de add the li vao
    var position=document.getElementById('block-list')
    position.appendChild(newLi)
}
//local storage se co 4 key theo tung cai la mang de chua cac object gom category, title, content
//check local storage neu chua co 4 key thi tao, neu da co trong local storage thi se render ra man hinh
//test o todo truoc


//function de nhan gia tri tu form add to do
//sau khi 3 cai check cate, check title, check content thoa man thi thuc hien luu vao local
//dau tien check trong local truoc k co moi tao key
function addValuetoLocalStorage(){
    var category = document.getElementById("category").value
    var title = document.getElementById("title").value
    var content = document.getElementById("content").value
    var time=new Date().toLocaleDateString('en-US',{day: 'numeric',year:'numeric',month: 'short'})
    var timecheck=new Date().toLocaleDateString('en-US',{day:'numeric',year:'numeric', month:'numeric',
        hour: 'numeric',minute: 'numeric',second:'numeric'})
    console.log(timecheck);
    var parseTodo=JSON.parse(localStorage.getItem('todo'));
        if (parseTodo===null){
            parseTodo=[]
        }
        //create new note content value

        var objTodo={
            'category': category,
            'title': title,
            'content': content,
            'time': time,
            'timecheck': timecheck
        }
        parseTodo.push(objTodo)
        var setJSONTodo=JSON.stringify(parseTodo)
        localStorage.setItem('todo',setJSONTodo);    
}
//function to append new task
function appendnewTask(){
    const parseTodo = JSON.parse(localStorage.getItem('todo'));
    const latestTask = parseTodo[parseTodo.length - 1];
    createNoteContent()
    addEventforTrashbutton();
    document.getElementsByClassName('category-name')[parseTodo.length -1].innerHTML= latestTask.category;
    document.getElementsByClassName('task-name')[parseTodo.length -1].innerHTML= latestTask.title;
    document.getElementsByClassName('content-name')[parseTodo.length -1].innerHTML= latestTask.content;
    document.getElementsByClassName('time-name')[parseTodo.length -1].innerHTML= latestTask.time;
    document.getElementsByClassName('timecheck')[parseTodo.length -1].innerHTML= latestTask.timecheck;
    document.getElementsByClassName('editForm')[parseTodo.length -1].addEventListener('click',openEditForm)
    document.getElementById('todo').innerHTML=parseTodo.length
    var editFormButtons = document.querySelectorAll('.editForm');
    editFormButtons.forEach(function(button) {
        button.addEventListener('click', renderAvailableValueinEditForm);
    });
}
//function to append new task to doing
// function appendnewTasktoDoing(){
//     const parseDoing = JSON.parse(localStorage.getItem('doing'));
//     const latestTask = parseDoing[parseDoing.length - 1];
//     createNoteContent()
//     addEventforTrashbutton();
//     document.getElementsByClassName('category-name')[parseDoing.length -1].innerHTML= latestTask.category;
//     document.getElementsByClassName('task-name')[parseDoing.length -1].innerHTML= latestTask.title;
//     document.getElementsByClassName('content-name')[parseDoing.length -1].innerHTML= latestTask.content;
//     document.getElementsByClassName('time-name')[parseDoing.length -1].innerHTML= latestTask.time;
//     document.getElementsByClassName('timecheck')[parseDoing.length -1].innerHTML= latestTask.timecheck;
//     document.getElementsByClassName('editForm')[parseDoing.length -1].addEventListener('click',openEditForm)
//     document.getElementById('todo').innerHTML=parseDoing.length
//     var editFormButtons = document.querySelectorAll('.editForm');
//     editFormButtons.forEach(function(button) {
//         button.addEventListener('click', renderAvailableValueinEditForm);
//     });
// }
//function to append new task to finish
// function appendnewTasktoFinish(){
//     const parseFinish = JSON.parse(localStorage.getItem('finish'));
//     const latestTask = parseFinish[parseFinish.length - 1];
//     createNoteContent()
//     addEventforTrashbutton();
//     document.getElementsByClassName('category-name')[parseFinish.length -1].innerHTML= latestTask.category;
//     document.getElementsByClassName('task-name')[parseFinish.length -1].innerHTML= latestTask.title;
//     document.getElementsByClassName('content-name')[parseFinish.length -1].innerHTML= latestTask.content;
//     document.getElementsByClassName('time-name')[parseFinish.length -1].innerHTML= latestTask.time;
//     document.getElementsByClassName('timecheck')[parseFinish.length -1].innerHTML= latestTask.timecheck;
//     document.getElementsByClassName('editForm')[parseFinish.length -1].addEventListener('click',openEditForm)
//     document.getElementById('todo').innerHTML=parseFinish.length
//     var editFormButtons = document.querySelectorAll('.editForm');
//     editFormButtons.forEach(function(button) {
//         button.addEventListener('click', renderAvailableValueinEditForm);
//     });
// }
//function to append new task to block
// function appendnewTasktoBlock(){
//     const parseBlock = JSON.parse(localStorage.getItem('block'));
//     const latestTask = parseBlock[parseBlock.length - 1];
//     createNoteContent()
//     addEventforTrashbutton();
//     document.getElementsByClassName('category-name')[parseBlock.length -1].innerHTML= latestTask.category;
//     document.getElementsByClassName('task-name')[parseBlock.length -1].innerHTML= latestTask.title;
//     document.getElementsByClassName('content-name')[parseBlock.length -1].innerHTML= latestTask.content;
//     document.getElementsByClassName('time-name')[parseBlock.length -1].innerHTML= latestTask.time;
//     document.getElementsByClassName('timecheck')[parseBlock.length -1].innerHTML= latestTask.timecheck;
//     document.getElementsByClassName('editForm')[parseBlock.length -1].addEventListener('click',openEditForm)
//     document.getElementById('todo').innerHTML=parseBlock.length
//     var editFormButtons = document.querySelectorAll('.editForm');
//     editFormButtons.forEach(function(button) {
//         button.addEventListener('click', renderAvailableValueinEditForm);
//     });
// }
//render nhung cai da co trong local storage phan todo
function renderAvailableTodotoScreen(){
    var parseTodo=JSON.parse(localStorage.getItem('todo'))
    if (Array.isArray(parseTodo)){
        for(var j=0; j<parseTodo.length; j++){
            createNoteContent()
            document.getElementsByClassName('category-name')[j].innerHTML= parseTodo[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseTodo[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseTodo[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseTodo[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseTodo[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
            document.getElementsByClassName('editForm')[j].addEventListener('click',openEditForm)

        }
        document.getElementById('todo').innerHTML=parseTodo.length
    }
}
//nhung cai se thuc hien khi nhan nut submit
document.addEventListener("DOMContentLoaded",function(){
    renderAvailableTodotoScreen();
    if (localStorage.getItem('doing')!=null){
        renderAvailableDoingtoScreen();}
    if (localStorage.getItem('finish')!=null){
        renderAvailableFinishtoScreen();}    
    if (localStorage.getItem('block')!=null){
        renderAvailableBlocktoScreen();}    
    document.getElementById('submitbutton').addEventListener('click',function(){
        //check o
        checkEmtyorWhiteSpaceinCell();
        checkCategory,checkTitle,checkContent=checkEmtyorWhiteSpaceinCell();
        if (checkTitle && checkCategory && checkContent){
            //luu du lieu vao local storage
            addValuetoLocalStorage()
            //append new task
            appendnewTask()
            //dong form
            closeForm()

        }
    })
})

//xoa todo 
function deleteTask() {
    const target = this.closest("li");
    // console.log(target.innerHTML);
    var category = target.querySelector('#category-name').textContent
    console.log(category);
    var title = target.querySelector('#task-name').textContent
    var content=target.querySelector('#content-name').textContent
    var time=target.querySelector('.time-name').textContent
    var timecheck=target.querySelector('.timecheck').textContent
    target.parentNode.removeChild(target);
    let parseTodo = JSON.parse(localStorage.getItem('todo'));
    var arrTodo=Object.values(parseTodo)
    for (var i=0; i<arrTodo.length; i++){
        if (arrTodo[i].category == category && arrTodo[i].title==title 
            && arrTodo[i].content==content && arrTodo[i].time ==time
            && arrTodo[i].timecheck==timecheck) {
                arrTodo.splice(i,1)
    }}
    let convertTodo=Object.assign([],arrTodo)
    console.log(convertTodo);
    localStorage.setItem('todo', JSON.stringify(convertTodo));
    updateTodocount();
  }  
//xoa doing
function deleteTaskDoing() {
    const target = this.closest("li");
    // console.log(target.innerHTML);
    var category = target.querySelector('#category-name').textContent
    var title = target.querySelector('#task-name').textContent
    var content=target.querySelector('#content-name').textContent
    var time=target.querySelector('.time-name').textContent
    var timecheck=target.querySelector('.timecheck').textContent
    target.parentNode.removeChild(target);
    let parseDoing = JSON.parse(localStorage.getItem('doing'));
    console.log(parseDoing);
    var arrDoing=Object.values(parseDoing)
    console.log(arrDoing);
    console.log('cate1',category);
    console.log('cate2',arrDoing[0].category);
    for (var i=0; i<arrDoing.length; i++){
        if (arrDoing[i].category == category && arrDoing[i].title==title 
            && arrDoing[i].content==content && arrDoing[i].time ==time
            && arrDoing[i].timecheck==timecheck) {
                arrDoing.splice(i,1)
    }}
    let convertDoing=Object.assign([],arrDoing)
    console.log(convertDoing);
    localStorage.setItem('doing', JSON.stringify(convertDoing));
    updateDoingcount();
  }  
//xoa finish
function deleteTaskFinish() {
    const target = this.closest("li");
    // console.log(target.innerHTML);
    var category = target.querySelector('#category-name').textContent
    console.log(category);
    var title = target.querySelector('#task-name').textContent
    var content=target.querySelector('#content-name').textContent
    var time=target.querySelector('.time-name').textContent
    var timecheck=target.querySelector('.timecheck').textContent
    target.parentNode.removeChild(target);
    let parseFinish = JSON.parse(localStorage.getItem('finish'));
    var arrFinish=Object.values(parseFinish)
    for (var i=0; i<arrFinish.length; i++){
        if (arrFinish[i].category == category && arrFinish[i].title==title 
            && arrFinish[i].content==content && arrFinish[i].time ==time
            && arrFinish[i].timecheck==timecheck) {
                arrFinish.splice(i,1)
    }}
    let convertFinish=Object.assign([],arrFinish)
    console.log(convertFinish);
    localStorage.setItem('finish', JSON.stringify(convertFinish));
    updateFinishcount();
  }  
//xoa block
function deleteTaskBlock() {
    const target = this.closest("li");
    // console.log(target.innerHTML);
    var category = target.querySelector('#category-name').textContent
    console.log(category);
    var title = target.querySelector('#task-name').textContent
    var content=target.querySelector('#content-name').textContent
    var time=target.querySelector('.time-name').textContent
    var timecheck=target.querySelector('.timecheck').textContent
    target.parentNode.removeChild(target);
    let parseBlock = JSON.parse(localStorage.getItem('block'));
    var arrBlock=Object.values(parseBlock)
    for (var i=0; i<arrBlock.length; i++){
        if (arrBlock[i].category == category && arrBlock[i].title==title 
            && arrBlock[i].content==content && arrBlock[i].time ==time
            && arrBlock[i].timecheck==timecheck) {
                arrBlock.splice(i,1)
    }}
    let convertBlock=Object.assign([],arrBlock)
    console.log(convertBlock);
    localStorage.setItem('block', JSON.stringify(convertBlock));
    updateBlockcount();
  }  
//update todo count
function updateTodocount(){
    var parseTodo=JSON.parse(localStorage.getItem('todo'))
    document.getElementById('todo').innerHTML=parseTodo.length
    console.log(parseTodo.length);
}
//update doing count
function updateDoingcount(){
    var parseDoing=JSON.parse(localStorage.getItem('doing'))
    document.getElementById('doing').innerHTML=parseDoing.length
    console.log(parseDoing.length);
}
//update finish count
function updateFinishcount(){
    var parseFinish=JSON.parse(localStorage.getItem('finish'))
    document.getElementById('finish').innerHTML=parseFinish.length
    console.log(parseFinish.length);
}
//update block count
function updateBlockcount(){
    var parseBlock=JSON.parse(localStorage.getItem('block'))
    document.getElementById('block').innerHTML=parseBlock.length
    console.log(parseBlock.length);
}
function addEventforTrashbutton(){
    var todosection=document.getElementById('todolist');
    var trash = todosection.getElementsByClassName('fa-trash-can')
    for (var i=0; i<trash.length;i++){
        trash[i].addEventListener('click',deleteTask)
    }

    var doingsection=document.getElementById('doing-list')
    console.log(doingsection);
    var trashdoing = doingsection.getElementsByClassName('fa-trash-can')
    for (var i=0; i<trashdoing.length;i++){
        trashdoing[i].addEventListener('click',deleteTaskDoing)
    }

    var finishsection=document.getElementById('finish-list')
    var trashfinish = finishsection.getElementsByClassName('fa-trash-can')
    for (var i=0; i<trashfinish.length;i++){
        trashfinish[i].addEventListener('click',deleteTaskFinish)
    }

    var blocksection=document.getElementById('block-list')
    var trashblock = blocksection.getElementsByClassName('fa-trash-can')
    for (var i=0; i<trashblock.length;i++){
        trashblock[i].addEventListener('click',deleteTaskBlock)
    }
}

//render available tasks in Doing
function renderAvailableDoingtoScreen(){
    if (localStorage.getItem('doing')!=null){
        var parseDoing=JSON.parse(localStorage.getItem('doing'))
        if (Array.isArray(parseDoing)){
            for(var j=0; j<parseDoing.length; j++){
                createNoteContentinDoing()
                document.getElementsByClassName('category-name')[j].innerHTML= parseDoing[j].category;
                document.getElementsByClassName('task-name')[j].innerHTML= parseDoing[j].title;
                document.getElementsByClassName('content-name')[j].innerHTML= parseDoing[j].content;
                document.getElementsByClassName('time-name')[j].innerHTML= parseDoing[j].time;
                document.getElementsByClassName('timecheck')[j].innerHTML= parseDoing[j].timecheck;
                document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTaskDoing)
            }
            document.getElementById('doing').innerHTML=parseDoing.length
        }
        }
    
}

//render available tasks in Finish
function renderAvailableFinishtoScreen(){
    if (localStorage.getItem('finish')!==null){
        var parseFinish=JSON.parse(localStorage.getItem('finish'))
        if (Array.isArray(parseFinish)){
            for(var j=0; j<parseFinish.length; j++){
                createNoteContentinFinish()
                document.getElementsByClassName('category-name')[j].innerHTML= parseFinish[j].category;
                document.getElementsByClassName('task-name')[j].innerHTML= parseFinish[j].title;
                document.getElementsByClassName('content-name')[j].innerHTML= parseFinish[j].content;
                document.getElementsByClassName('time-name')[j].innerHTML= parseFinish[j].time;
                document.getElementsByClassName('timecheck')[j].innerHTML= parseFinish[j].timecheck;
                document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTaskFinish)
            }
            document.getElementById('finish').innerHTML=parseFinish.length
        }
    }
    
}
//render available tasks in Block
function renderAvailableBlocktoScreen(){
    if (localStorage.getItem('block')!=null){
        var parseBlock=JSON.parse(localStorage.getItem('block'))
        if (Array.isArray(parseBlock)){
            for(var j=0; j<parseBlock.length; j++){
                createNoteContentinBlock()
                document.getElementsByClassName('category-name')[j].innerHTML= parseBlock[j].category;
                document.getElementsByClassName('task-name')[j].innerHTML= parseBlock[j].title;
                document.getElementsByClassName('content-name')[j].innerHTML= parseBlock[j].content;
                document.getElementsByClassName('time-name')[j].innerHTML= parseBlock[j].time;
                document.getElementsByClassName('timecheck')[j].innerHTML= parseBlock[j].timecheck;
                document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTaskBlock)
            }
            document.getElementById('block').innerHTML=parseBlock.length
        }
    }
}


//function render ra noi dung san co trong form edit
function renderAvailableValueinEditForm(event) {
    document.getElementById('formedittodo').style.display="block";
    const targetEdit = event.target.closest("li");
    if (targetEdit) {
        var category = targetEdit.querySelector('#category-name').textContent;
        var title = targetEdit.querySelector('#task-name').textContent;
        var content = targetEdit.querySelector('#content-name').textContent;
        var time = targetEdit.querySelector('.time-name').textContent;
        var timecheck = targetEdit.querySelector('.timecheck').textContent;
        var renderCategory = document.getElementById('edit-category');
        var renderTitle = document.getElementById('edit-title');
        var renderContent = document.getElementById('edit-content');
        renderCategory.value = category;
        renderTitle.value = title;
        renderContent.value = content;
        document.getElementById('button-todo').checked=true;
        document.getElementById('editsubmitbutton').addEventListener('click', function(){
            checkEmptyOrWhitespaceinEditForm()
            checkeditCategory,checkeditTitle,checkeditContent=checkEmptyOrWhitespaceinEditForm();
            if (checkeditCategory && checkeditTitle && checkeditContent){
                //lay gia tri da edit thay doi trong local storage va render ket qua sau khi edit
                getValuefromEditForminTodo(category,title,content,time,timecheck)
                closeEditForm()
                checkwhichButtonchecked(category,title,content,time,timecheck)
                // console.log(1234);
                //them function append new to new task area o day
                }
        })

    } else {
        console.error('Unable to find parent <li> element.');
    }

}

document.addEventListener('DOMContentLoaded', function() {
    var editFormButtons = document.querySelectorAll('.editForm');
    console.log(editFormButtons);
    editFormButtons.forEach(function(button) {
        button.addEventListener('click', renderAvailableValueinEditForm);
    });

});

//nhan  gia tri moi tu form sau do thay doi trong local storage va render ket qua sau khi submit
function getValuefromEditForminTodo(category,title,content,time,timecheck){
    var renderCategory1 = document.getElementById('edit-category');
    var renderTitle1 = document.getElementById('edit-title');
    var renderContent1 = document.getElementById('edit-content');
    var renderTime=time;
    console.log(time);
    var renderTimecheck=timecheck;
    var editCategory=renderCategory1.value;
    var editTitle=renderTitle1.value;
    var editContent=renderContent1.value;
    
    var editTime=new Date().toLocaleDateString('en-US',{day: 'numeric',year:'numeric',month: 'short'});
    var editTimecheck=new Date().toLocaleDateString('en-US',{day:'numeric',year:'numeric', month:'numeric',
    hour: 'numeric',minute: 'numeric',second:'numeric'});;
    let parseTodo = JSON.parse(localStorage.getItem('todo'));
    var arrTodo=Object.values(parseTodo)
    for (var i=0; i<arrTodo.length; i++){
        if (arrTodo[i].category == category && arrTodo[i].title==title 
        && arrTodo[i].content==content && arrTodo[i].time ==renderTime
        && arrTodo[i].timecheck==renderTimecheck) {
            arrTodo[i].category=editCategory;
            arrTodo[i].title=editTitle;
            arrTodo[i].content=editContent;
            arrTodo[i].time=editTime;
            arrTodo[i].timecheck=editTimecheck;
            position=i
            break;
    }}
    localStorage.setItem('todo', JSON.stringify(arrTodo));
    //doan nay them code kiem tra gia tri cua cac button
    renderResultafterEditTodo()

    
}
//render ket qua sau khi edit ket qua
function renderResultafterEditTodo(){
    var parseTodo=JSON.parse(localStorage.getItem('todo'))
    if (Array.isArray(parseTodo)){
        for(var j=0; j<parseTodo.length; j++){
            document.getElementsByClassName('category-name')[j].innerHTML= parseTodo[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseTodo[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseTodo[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseTodo[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseTodo[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
            document.getElementsByClassName('editForm')[j].addEventListener('click',openEditForm)

        }
    }
}
//render after edit Doing
function renderResultafterEditDoing(){
    var parseDoing=JSON.parse(localStorage.getItem('doing'))
    if (Array.isArray(parseDoing)){
        for(var j=0; j<parseDoing.length; j++){
            document.getElementsByClassName('category-name')[j].innerHTML= parseDoing[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseDoing[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseDoing[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseDoing[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseDoing[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
            document.getElementsByClassName('editForm')[j].addEventListener('click',openEditForm)

        }
    }
}
//render after edit Finish
function renderResultafterEditFinish(){
    var parseFinish=JSON.parse(localStorage.getItem('finish'))
    if (Array.isArray(parseFinish)){
        for(var j=0; j<parseFinish.length; j++){
            document.getElementsByClassName('category-name')[j].innerHTML= parseFinish[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseFinish[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseFinish[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseFinish[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseFinish[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
            document.getElementsByClassName('editForm')[j].addEventListener('click',openEditForm)

        }
    }
}
//render after edit block
function renderResultafterEditBlock(){
    var parseBlock=JSON.parse(localStorage.getItem('block'))
    if (Array.isArray(parseBlock)){
        for(var j=0; j<parseBlock.length; j++){
            document.getElementsByClassName('category-name')[j].innerHTML= parseBlock[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseBlock[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseBlock[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseBlock[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseBlock[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
            document.getElementsByClassName('editForm')[j].addEventListener('click',openEditForm)

        }
    }
}
//function check task area 
function checkwhichButtonchecked(category,title,content,time,timecheck){
    var buttontodo=document.getElementById('button-todo')
    var buttondoing=document.getElementById('button-doing')
    var buttonfinish=document.getElementById('button-finish')
    var buttonblock=document.getElementById('button-block')
    if (buttontodo.checked==true){
        //pass getvaluefromedittodoform()
    }else if (buttondoing.checked==true){
        deleteTaskinTodo(category,title,content,time,timecheck);
        appendTasktoDoing()
    }else if (buttonfinish.checked==true){
        appendTasktoFinish(category,title,content,time,timecheck)
    }else if (buttonblock.checked==true){
        appendTasktoBlock(category,title,content,time,timecheck)
    }
}



//function deletetask in doing
function deleteTaskinDoing(category,title,content,time,timecheck){
    let parseDoing = JSON.parse(localStorage.getItem('doing'));
    //xoa gia tri trong local storage key todo
    var arrDoing=Object.values(parseDoing)
    for (var i=0; i<arrDoing.length; i++){
        if (arrDoing[i].category == category && arrDoing[i].title==title 
        && arrDoing[i].content==content && arrDoing[i].time ==time
        && arrDoing[i].timecheck==timecheck) {
            position=i
            break;
    }}
    var doingsection=document.getElementById('doing-list');
    doingsection.removeChild(doingsection.children[position]);
    arrDoing.splice(position,1)
    localStorage.setItem('doing', JSON.stringify(arrDoing));
    updateTodocount();
    renderResultafterEditDoing()
}
//function delete task in finish 
function deleteTaskinFinish(category,title,content,time,timecheck){
    let parseFinish = JSON.parse(localStorage.getItem('finish'));
    //xoa gia tri trong local storage key todo
    var arrFinish=Object.values(parseFinish)
    for (var i=0; i<arrFinish.length; i++){
        if (arrFinish[i].category == category && arrFinish[i].title==title 
        && arrFinish[i].content==content && arrFinish[i].time ==time
        && arrFinish[i].timecheck==timecheck) {
            position=i
            break;
    }}
    var finishsection=document.getElementById('finish-list');
    finishsection.removeChild(finishsection.children[position]);
    arrFinish.splice(position,1)
    localStorage.setItem('finish', JSON.stringify(arrFinish));
    updateFinishcount();
    renderResultafterEditFinish()
}
//function delete task in block
function deleteTaskinBlock(category,title,content,time,timecheck){
    let parseBlock = JSON.parse(localStorage.getItem('finish'));
    //xoa gia tri trong local storage key todo
    var arrBlock=Object.values(parseBlock)
    for (var i=0; i<arrBlock.length; i++){
        if (arrBlock[i].category == category && arrBlock[i].title==title 
        && arrBlock[i].content==content && arrBlock[i].time ==time
        && arrBlock[i].timecheck==timecheck) {
            position=i
            break;
    }}
    var finishsection=document.getElementById('block-list');
    finishsection.removeChild(finishsection.children[position]);
    arrBlock.splice(position,1)
    localStorage.setItem('block', JSON.stringify(arrBlock));
    updateBlockcount();
    renderResultafterEditBlock()
}
function deleteTaskinTodo(category,title,content,time,timecheck){
    let parseTodo = JSON.parse(localStorage.getItem('todo'));
    //xoa gia tri trong local storage key todo
    var arrTodo=Object.values(parseTodo)
    for (var i=0; i<arrTodo.length; i++){
        if (arrTodo[i].category == category && arrTodo[i].title==title 
        && arrTodo[i].content==content && arrTodo[i].time ==time
        && arrTodo[i].timecheck==timecheck) {
            position=i
            break;
    }}
    var todosection=document.getElementById('todolist');
    todosection.removeChild(todosection.children[position]);
    arrTodo.splice(position,1)
    localStorage.setItem('todo', JSON.stringify(arrTodo));
    updateTodocount();
    renderResultafterEditTodo()
}
//append task to doing 
//logic: no se duyet nhu deletetask va xoa trong local storage cung nhu phan render
//add gia tri vao doing trong local storage va render ra

function appendTasktoDoing(){
    //get gia tri tam tu form
    var editCategory=document.getElementById('edit-category').value;
    var editTitle=document.getElementById('edit-title').value;
    var editContent=document.getElementById('edit-content').value;
    //them moi gia tri date vi tinh theo thoi gian cap nhat
    var editTime=new Date().toLocaleDateString('en-US',{day: 'numeric',year:'numeric',month: 'short'});
    var editTimecheck=new Date().toLocaleDateString('en-US',{day:'numeric',year:'numeric', month:'numeric',
    hour: 'numeric',minute: 'numeric',second:'numeric'});
    var parseDoing = JSON.parse(localStorage.getItem('doing'));
    if (parseDoing===null){
        parseDoing=[]
        console.log('dang null');
    } 
    const objDoing={
        'category':editCategory,
        'title':editTitle,
        'content':editContent,
        'time':editTime,
        'timecheck':editTimecheck,
    };
    parseDoing.push(objDoing);
    const setJSONKeys=JSON.stringify(parseDoing);
    localStorage.setItem('doing',setJSONKeys);
    renderAvailableTodotoScreen()
    renderAvailableDoingtoScreen()
    
    

}
function appendnewTasktoDoing(){
    const parseDoing = JSON.parse(localStorage.getItem('doing'));
    
}