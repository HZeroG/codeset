var div1 = document.getElementById('signUp');
var div2 = document.getElementById('signIn');

function DEL_SignIn() {
    div2.style.visibility="hidden"
    div1.style.visibility="visible"
}
function DEL_SignUp() {
    div2.style.visibility="visible"
    div1.style.visibility="hidden"
}
var boxes = document.querySelectorAll('.box');
var targer = document.querySelector('.target')
boxes.forEach(box=>{
    box.addEventListener('dragover', e=>{
        console.log('over');
    })
})

