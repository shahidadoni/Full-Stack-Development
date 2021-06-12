// const open = document.getElementsByClassName("login-btn");
// const modal = document.getElementById("login-modal");
// const close = document.getElementById("close-login");

// open[0].addEventListener('click',() =>{
//     modal.classList.add('show');
// })
// close.addEventListener('click',() =>{
//     modal.classList.remove('show');
// })

document.getElementsByClassName("login-btn")[0].addEventListener('click',showModal);

function showModal(){
    document.getElementById('login-modal').style.visibility = 'visible';
}