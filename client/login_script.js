const form_signUp = document.getElementById("signUp_Form");
const form_logIn = document.getElementById("logIn_Form");

const name_regex = /^[a-zA-Z0-9_-]{3,16}$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&._-])[A-Za-z\d@$!%*#?&._-]{8,32}$/;
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.querySelectorAll('.username_field').forEach(
    input => {
        input.addEventListener('input', () =>{
            input.value = input.value.replace(/[^a-zA-Z0-9_-]/g, '');
    });
});

document.querySelectorAll('.password_field').forEach(
    input => {
        input.addEventListener('input', ()=>{
            input.value =  input.value.replace(/[^A-Za-z0-9@$!%*#?&._-]/g, '');
        });
});


form_signUp.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById("email_signUp").value;
    const username = document.getElementById("username_signUp").value;
    const password = document.getElementById("password_signUp").value;
    const repeatpassword = document.getElementById("repeatpassword_signUp").value;
    

    if(email.length === 0 || username.length === 0 || password.length === 0 || repeatpassword.length === 0){alert("Please fill out all the fields."); return;}

    if(!email_regex.test(email)){ 
        alert("Please enter a valid email."); 
        return;
    }

    if(!password_regex.test(password)){ 
        alert("Password must be 8-32 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character."); 
        return;
    }

    if(password !== repeatpassword){ alert("Passwords do not match."); return; }

    console.log("Email: " + email);
    console.log("Username: " + username);
    console.log("Password: " + password);

});

form_logIn.addEventListener('submit', function(event){
    event.preventDefault();

    const user = document.getElementById("user_login").value;
    const password = document.getElementById("password_login").value;

    if(email_regex.test(user)){ 
        
        if(password === password){
            console.log("Email");
        }

    }else{

        if(password === password){
            console.log("Username");
        }

    }
});



function toggle(button) {
    console.log("Button clicked:", button);
    var label = button.textContent;
    const login = document.getElementById("login-section");
    const signup = document.getElementById("signup-section");
    switch(label){
        case "LOG IN":
            login.style.display ="flex";
            signup.style.display ="none";
        break;
        case "SIGN UP":
            signup.style.display ="flex";
            login.style.display ="none";
        break;
    }
}
