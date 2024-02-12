function login(){
    const username=document.querySelector('#username1').value;
    alert(`Congratulations, Mr. ${username}`);
    
}




const btn=document.querySelector('#login-btn');
btn.addEventListener('click', ()=>{login()});


