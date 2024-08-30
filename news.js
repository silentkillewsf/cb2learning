// ++++++++++++++++++++ input var +++++++++++++++++++++++++

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let logBtn = document.querySelector('.login-btn');
let comment = document.querySelector('#cmnt');

let append_h = document.querySelector('#append_heading');
let append_p = document.querySelector('#append-p');
let append_img = document.querySelector('#append-img');
let append_url = document.querySelector('#append-url'); 

// ++++++++++++++++++ boxes menu ++++++++++++++++++++++++

let boxes = document.querySelectorAll('.shop div')
let main = document.querySelector('.shop')


// ++++++++++++++++ login ++++++++++++++++++++



let login_section = document.querySelector('.login-section')
let append_box = document.querySelector('.open-append')
let login_box = document.querySelector('.open-login')
let login_display = document.querySelector('.add').addEventListener('click',()=>{
    login_section.style.display = 'inline'
    login_section.style.display = 'flex'
})
let login_hide = document.querySelector('#cross').addEventListener('click',()=>{
    login_section.style.display = 'none'

})


logBtn.addEventListener('click',()=>{
    if (username.value === '@wsfkiller' && password.value === 'xbtjg'){
        password.value = ''
        username.value = ''
        append_box.style.display = 'inline'
        append_box.style.display = 'flex'
        login_box.style.display = 'none'
  }
  else{
    password.value = ''
    comment.innerHTML = 'inncorrect password'
}
comment = ''
})
// ++++++++++++++++ login ++++++++++++++++++++

// ++++++++++++++++ append ++++++++++++++++++++


// ++++++++++++++++ append close ++++++++++++++++++++

var typed = new Typed('#typed', {
    strings: ['Web Development', 'Digital Marketing', 'Affiliate Marketing', 'SEO', 'Graphic Desinging', 'Programming && Coding', 'Android Develpment', 'IOS Development', 'Software Development', 'Pyhton for Data Science', 'Python for Machine Learnings'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop : true
  });
