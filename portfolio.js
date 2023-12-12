// alert('welcome')
var searchInput = document.getElementById('searchInput');
const searchbtn = document.getElementById('searchbtn');
var searchTerm = document.getElementById('aboutText');
const btn = document.getElementById('hirebtn');
var btnText = document.getElementById('btn-text');

function stacks() {
    setTimeout(myT1, 2000);
    setTimeout(myT2, 4000);
    setTimeout(myT3, 6000);
    setTimeout(myT4, 8000);
    setTimeout(myT5, 10000);
}
function myT1() {
    document.getElementById('stack-timeout').innerHTML = 'Html.';
}
function myT2() {
    document.getElementById('stack-timeout').innerHTML = 'Css.';
}
function myT3() {
    document.getElementById('stack-timeout').innerHTML = 'Javascript.';
}
function myT4() {
    document.getElementById('stack-timeout').innerHTML = 'PHP.';
}
function myT5() {
    document.getElementById('stack-timeout').innerHTML = 'React.';
}

btn.onclick = () => {
    btnText.textContent = "Resume Download";
    btnText.style.color = "blue";
}
let btnform = document.getElementById('btnSubmit');

        function contact(){
            let users = document.querySelector('#username').value;
            let email = document.querySelector('#email').value;
            let phones = document.querySelector('#phone').value;
            let subjects = document.querySelector('#subject').value;
            // let password = document.querySelector('#password').value;
            // let password2 = document.querySelector('#password2').value;
            // let textArea = document.querySelector('#textArea').value;
            let texts = '';
            // RegExp

            if (users == ""){
                texts = "Username can't be empty!!!"
                nameErrors.innerHTML = texts;
                document.querySelector('#username').classList.add('errorborders')
                return false;
            }
            if(users.length < 3){
                texts = 'Username must be more than 3!'
                nameErrors.innerHTML = texts;
                document.querySelector('#username').classList.add('errorborders')
                return false;
            }else{
                nameErrors.innerHTML = '';
                document.querySelector('#username').classList.remove('errorborders')
                document.querySelector('#username').classList.add('successborders')
            }
            if (email == ""){
                texts = "Email field can't be empty"
                emailErrors.innerHTML = texts;
                document.querySelector('#email').classList.add('errorborders')
                return false;
            }else{
                emailErrors.innerHTML = '';
                document.querySelector('#email').classList.remove('errorborders')
                document.querySelector('#email').classList.add('successborders')

            }
            if (isNaN(phones) || phones.length <= 10){
                texts = "phone-number field can't be empty"
                phErrors.innerHTML = texts;
                document.querySelector('#phone').classList.add('errorborders')
                return false
            }else{
                phErrors.innerHTML = '';
                document.querySelector('#phone').classList.remove('errorborders')
                document.querySelector('#phone').classList.add('successborders')

            }
            if (subjects == ""){
                texts = "Subject field can't be empty"
                subErrors.innerHTML = texts;
                document.querySelector('#subject').classList.add('errorborders')
                return false
            }else{
                subErrors.innerHTML = '';
                document.querySelector('#subject').classList.remove('errorborders')
                document.querySelector('#subject').classList.add('successborders')
            }
          
           
        //     if (password == ""){
        //         text = 'Password should contain characters and numbers'
        //         passError.innerHTML = text;
        //         document.querySelector('#password').classList.add('errorborder')
        //         return false
        //     }
        //     if (password.length < 10){
        //         text = 'Password must be more than 10!'
        //         passError.innerHTML = text;
        //         document.querySelector('#password').classList.add('errorborder')
        //         return false;
        //     }else{
        //         passError.innerHTML = '';
        //         document.querySelector('#password').classList.remove('errorborder')
        //         document.querySelector('#password').classList.add('successborder')
        //     }
        //    /* if (password == number){
        //         text = 'Password must contain characters and numbers'
        //         passError.innerHTML = text;
        //         document.querySelector('#password').classList.add('errorborder')
        //         return false
        //     }*/
        //     if (password2 == ""){
        //         text = 'Please repeat password'
        //         pass2Error.innerHTML = text;
        //         document.querySelector('#password2').classList.add('errorborder')
        //         return false
        //     }
        //     if(password2.length < 10){ 
        //         text = 'Password must be more than 10!'
        //         pass2Error.innerHTML = text;
        //         document.querySelector('#password2').classList.add('errorborder')
        //         return false;
        //     }else{
        //         pass2Error.innerHTML = '';
        //         document.querySelector('#password2').classList.remove('errorborder')
        //         document.querySelector('#password2').classList.add('successborder')
        //     }
           /* if (password2 == password){
                text = 'Please repeat exact password'
                pass2Error.innerHTML = text;
                document.querySelector('#password2').classList.add('errorborder')
                return false
            }*/
           /* if(user.length < 5){
                text = 'Username must be more than 5!'
                nameError.innerHTML = text;
                document.querySelector('#username').classList.add('errorborder')
                return false;
            }*/
           
            document.getElementById('jomos').innerHTML = 'Message Successfully Sent'
            return false;

           
            
        }
       