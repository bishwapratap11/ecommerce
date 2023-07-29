window.onload = function() {
    
    // for login
    var loginForm = document.getElementById('form_login');
    var registerForm = document.getElementById('form_signup');

    if (loginForm) {
        loginForm.onsubmit = checkLogin;
    }
    if (registerForm) {
        registerForm.onsubmit = checkRegister;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function checkLogin(e) {
        e.preventDefault();

        
        if (!loginForm.email.value.match(mailformat)) {
            loginForm.email.nextElementSibling.innerHTML = "Invalid Email";
        }
        else{
            loginForm.email.nextElementSibling.innerHTML = "Email";
        }
        if(loginForm.password.value.length <= 0)
        {
            loginForm.password.nextElementSibling.innerHTML = "Please Enter Password";
        }
        else{
            loginForm.password.nextElementSibling.innerHTML = "Password";
        }
        if (loginForm.email.value.match(mailformat) && loginForm.password.value.length >= 0) {
            console.log("EveryThing DOne");
        }
    }

    // for register
    function checkRegister(e){
        e.preventDefault();
        var matchName = /^[a-zA-Z]/;
        var pattern = /\w\d/g;
        if (!registerForm.remail.value.match(mailformat)) {
            registerForm.remail.nextElementSibling.innerHTML = "Invalid Email";
        }
        else{
            registerForm.remail.nextElementSibling.innerHTML = "Email";
        }

        if (registerForm.rphone.value.length != 10 || isNaN(registerForm.rphone.value)) {
            registerForm.rphone.nextElementSibling.innerHTML = "Check Phone Number";
        }
        else{
            registerForm.rphone.nextElementSibling.innerHTML = "Number";
        }

        if (!matchName.test(registerForm.rname.value)) {
            registerForm.rname.nextElementSibling.innerHTML = "Name Should Not be Integer";
        }
        else{
            registerForm.rname.nextElementSibling.innerHTML = "Full Name";
        }

        if (registerForm.rpassword.value !== registerForm.rcpassword.value) {
            registerForm.rpassword.nextElementSibling.innerHTML = "Password Not Matched";
            registerForm.rcpassword.nextElementSibling.innerHTML = "Password Not Matched";
        }
        else if (registerForm.rpassword.value.length < 8) {
            registerForm.rpassword.nextElementSibling.innerHTML = "Password Must Be 8 Character";
        }
        else if (!registerForm.rpassword.value.match(pattern)) {
            registerForm.rpassword.nextElementSibling.innerHTML = "Password Must Be AlphaNumeric";
        }
        else{
            alert('matched')
        }
        
        if (registerForm.remail.value.match(mailformat) && registerForm.rphone.value.length == 10 && 
        !registerForm.rname.value.match(matchName) && registerForm.rpassword.value !== registerForm.rcpassword.value && 
        registerForm.rpassword.value.length >= 8 && registerForm.rpassword.value.match(pattern)
        ) {
            alert('Everyting Done')
        }
    }


    
}