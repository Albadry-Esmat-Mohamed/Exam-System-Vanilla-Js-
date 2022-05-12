
var email = document.getElementById('Email');
console.log(email);

var pass = document.getElementById('pass');
console.log(pass);


var form = document.getElementById('form');
console.log(form);

var hidden = document.getElementsByClassName('hidden')[0];
console.log(hidden);

        var localEmail = window.localStorage.email ;
        var localPass = window.localStorage.pass ;


form.addEventListener('submit',function(event){
    
    event.preventDefault();

    if( pass.value === localPass && email.value === localEmail )
    {

        location.replace('../html/page3.html')
    }
    else
    {
        console.log("else");
        hidden.style.display = 'block';
    }

},false)
