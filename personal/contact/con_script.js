function valid (form){
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    var password = form.password.value;
    var RePassword = form.RePassword.value;
    if(name == ""|| name == " ")
        fail = "You Should write the name!";
    else if(email.split("@").length - 1 == 0)
        fail = "You Should write your correct E-mail!";
    else if(adr_pattern.test(email) == false)
        fail = "You Should write your correct E-mail!";
    else if(password == ""|| password == " ")
        fail = "You Should write the password!";
    else if(password != RePassword)
        fail = "You Should write the same password!";
    else if(state == "")
        fail = "You Should choose the male or female!";
    if(fail)
        alert(fail);
    else
        window.location = "http://google.com"
}

//   TERMS_BLOCK

document.querySelector('.read_terms').onclick = function(){
    document.querySelector('.form_slider').style.marginLeft = "-400px";
} 

document.querySelector('.back').onclick = function(){
    document.querySelector('.form_slider').style.marginLeft = "0px";
}
