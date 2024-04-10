
function login(){
    const username=document.getElementById('username').value;
const password=document.getElementById('password').value;
let infor = {
    "login": username,
    "password": password,
};

if(username && password){
    const url = "https://recruitment-api.pyt1.stg.jmr.pl/login";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(infor),
    })
        .then(response => response.json())
        .then(data => {
            if(data.message === "Hello 😉! How are you?" &&  data.status === "ok"){
                alert("Login successfully!")
                window.location.href="./index2.html"; //Switch pages in the same tab, cannot back to login page (assign có thể back vê trang login)
            }else{
                if(!username || !password){
                    return false;
                }else{
                    alert("Email or password is not correct!"); //only alert incorrect when filled into 2 inputs completedly
                    username = "";
                    password = "";
                    username.style.borderColor = "rgba(217, 217, 217, 1)";
                    password.style.borderColor = "rgba(217, 217, 217, 1)";
                }
            }
        })
}
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