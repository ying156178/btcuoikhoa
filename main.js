async function login(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const data= await fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({   //du lieu muon gui den server thi de trong body
            username: username,
            password: password,
        })
    })
    const res =await data.json();
    localStorage.setItem('token',res.token)
    redirectToNewPage()
}
// document.getElementById('button').addEventListener('click',login);
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('button-login').addEventListener('click',login);
})
function redirectToNewPage(){
    const token = localStorage.getItem('token');
    if (token){
        window.location.href='./index2.html'
    } else{
        console.log('Not in local storage');
    }
}