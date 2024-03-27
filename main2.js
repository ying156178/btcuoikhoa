//open Form
function openForm(){
    formaddtodo.style.display="block";
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
    newI2.className='fa-regular fa-pen-to-square'
    newI3.className='fa-solid fa-trash-can'

    // newI2.setAttribute('class','fa-regular','fa-pen-to-square')
    // newI3.setAttribute('class','fa-solid','fa-trash-can')

    //them con cua the Li vao
    newLi.appendChild(newP1)
    newLi.appendChild(newH2)
    newLi.appendChild(newDiv)
    newLi.appendChild(newP2)
    newLi.appendChild(newI1)
    newLi.appendChild(newSpan)
    newLi.appendChild(newDiv2)
    //them con vua div 2 vao
    newDiv2.appendChild(newI2)
    newDiv2.appendChild(newI3)
    //tim vi tri cua to do list de add the li vao
    var position=document.getElementById('todolist')
    // newSpan.innerHTML=new Date().toLocaleDateString('en-US',{day: 'numeric', 
    // year:'numeric',
    // month: 'short'})
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
    var parseTodo=JSON.parse(localStorage.getItem('todo'));
        if (parseTodo===null){
            parseTodo=[]
        }
        //create new note content value
        var objTodo={
            'category': category,
            'title': title,
            'content': content,
            'time': time
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
    document.getElementsByClassName('category-name')[parseTodo.length -1].innerHTML= latestTask.category;
    document.getElementsByClassName('task-name')[parseTodo.length -1].innerHTML= latestTask.title;
    document.getElementsByClassName('content-name')[parseTodo.length -1].innerHTML= latestTask.content;
    document.getElementsByClassName('time-name')[parseTodo.length -1].innerHTML= latestTask.time;
    document.getElementById('todo').innerHTML=parseTodo.length
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
        }
        document.getElementById('todo').innerHTML=parseTodo.length
    }
    
}
//nhung cai se thuc hien khi nhan nut submit
document.addEventListener("DOMContentLoaded",function(){
    renderAvailableTodotoScreen()
    document.getElementById('submitbutton').addEventListener('click',function(){
        //check o
        checkEmtyorWhiteSpaceinCell();
        checkCategory,checkTitle,checkContent=checkEmtyorWhiteSpaceinCell();
        if (checkTitle,checkCategory,checkContent){
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
    console.log(target.innerHTML);
    target.parentNode.removeChild(target);
  }  
document.addEventListener("DOMContentLoaded",function(){
    var trash = document.getElementsByClassName('fa-trash-can')
    for (var i=0; i<trash.length;i++){
        trash[i].addEventListener('click',deleteTask)
    }
})