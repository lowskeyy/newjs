// const who = prompt('Siapakah kamu?');
// const user = document.getElementById('user');
// user.innerHTML = `Hello !, ${who}`;

const inputedWho = document.getElementById('user');
const navhome = document.getElementById('navHome');

const glad = document.getElementById('early-content');
glad.innerHTML = `Glad to see you here, . <br> This web build by using a HTML, CSS, bootstrap and js`;
glad.style.textAlign = 'center';

const closeBtn = document.getElementById('close');
const whoAreU = document.querySelector('.who-u');
closeBtn.addEventListener('click', function() {
    whoAreU.style.display = 'none'
});

const sendUser = document.querySelector('.sended');
sendUser.addEventListener('click', function() {
    whoAreU.style.display = 'none';
    const who = inputedWho.value;
    glad.innerHTML = `Glad to see you here, ${who}. <br> This web build by using a HTML, CSS, bootstrap and js`;
    navhome.innerHTML = `Home | ${who}`;
});





























