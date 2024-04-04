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
    renderAvailableTodotoScreen()
    renderAvailableDoingtoScreen()
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
function updateTodocount(){
    var parseTodo2=JSON.parse(localStorage.getItem('todo'))
    document.getElementById('todo').innerHTML=parseTodo2.length
    console.log(parseTodo2.length);
}

function addEventforTrashbutton(){
    var trash = document.getElementsByClassName('fa-trash-can')
    for (var i=0; i<trash.length;i++){
        trash[i].addEventListener('click',deleteTask)
    }
}

//render available tasks in Doing
function renderAvailableDoingtoScreen(){
    var parseDoing=JSON.parse(localStorage.getItem('doing'))
    if (Array.isArray(parseDoing)){
        for(var j=0; j<parseDoing.length; j++){
            createNoteContent()
            document.getElementsByClassName('category-name')[j].innerHTML= parseDoing[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseDoing[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseDoing[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseDoing[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseDoing[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
        }
        document.getElementById('doing').innerHTML=parseDoing.length
    }
}

//render available tasks in Finish
function renderAvailableFinishtoScreen(){
    var parseFinish=JSON.parse(localStorage.getItem('finish'))
    if (Array.isArray(parseFinish)){
        for(var j=0; j<parseFinish.length; j++){
            createNoteContent()
            document.getElementsByClassName('category-name')[j].innerHTML= parseFinish[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseFinish[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseFinish[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseFinish[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseFinish[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
        }
        document.getElementById('finish').innerHTML=parseFinish.length
    }
}


//render available tasks in Block
function renderAvailableFinishtoScreen(){
    var parseBlock=JSON.parse(localStorage.getItem('block'))
    if (Array.isArray(parseBlock)){
        for(var j=0; j<parseBlock.length; j++){
            createNoteContent()
            document.getElementsByClassName('category-name')[j].innerHTML= parseBlock[j].category;
            document.getElementsByClassName('task-name')[j].innerHTML= parseBlock[j].title;
            document.getElementsByClassName('content-name')[j].innerHTML= parseBlock[j].content;
            document.getElementsByClassName('time-name')[j].innerHTML= parseBlock[j].time;
            document.getElementsByClassName('timecheck')[j].innerHTML= parseBlock[j].timecheck;
            document.getElementsByClassName('fa-trash-can')[j].addEventListener('click',deleteTask)
        }
        document.getElementById('block').innerHTML=parseBlock.length
    }
}


//function render ra noi dung san co trong form edit
function renderAvailableValueinEditForm(event) {
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
            //lay gia tri da edit thay doi trong local storage va render ket qua sau khi edit
            getValuefromEditForminTodo(category,title,content,time,timecheck)
            closeEditForm()
        })

    } else {
        console.error('Unable to find parent <li> element.');
    }

}

document.addEventListener('DOMContentLoaded', function() {
    var editFormButtons = document.querySelectorAll('.editForm');
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
    renderResultafterEdit()

    
}
//render ket qua sau khi edit ket qua
function renderResultafterEdit(){
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


