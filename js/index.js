// //set
// window.localStorage.setItem("color","#f00")
// window.localStorage.fontSize = "22px"
// window.localStorage[fontSize] = "22px"
// //get
// window.localStorage.getItem("color")
// window.localStorage.fontSize
// window.localStorage[fontSize]
////////////////////////////////////////////////////////

var fName = document.getElementById('Fname');
console.log(fName);

var lName = document.getElementById('Lname');
console.log(lName);


var repass = document.getElementById('repass');
console.log(repass);

var submit = document.getElementById('submit');
console.log(submit);

var form = document.getElementById('form');7
console.log(form);

var hidden = document.getElementsByClassName('hidden')[0];
console.log(hidden);

var email = document.getElementById('Email');
console.log(email);

var pass = document.getElementById('pass');
console.log(pass);

form.addEventListener('submit',function(event){
    
    event.preventDefault();

    if( pass.value === repass.value )
    {
        window.localStorage.email = email.value;
        window.localStorage.fName = fName.value;
        window.localStorage.lName = lName.value;
        console.log(window.localStorage.email);
    
        window.localStorage.pass = pass.value;
        // var localPass = window.localStorage.pass ;
        console.log(window.localStorage.pass);

        location.replace('../html/page2.html')
    }
    else
    {
        console.log("else");
        hidden.style.display = 'block';
    }

},false)
