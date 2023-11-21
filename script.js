function sendRequest(to, body, func){
    const xml = new XMLHttpRequest();
    xml.addEventListener('readystatechange', function(){
        if(xml.status === 200 && xml.readyState === 4){
            func(xml.responseText);
        }
    })
    xml.open('POST', to, true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send(body)
}

const email_form = document.getElementById("email-form");
const email_inp = document.querySelector('.email-inp');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


email_form.addEventListener('submit', function(e){
    e.preventDefault();
    let email = email_inp.value.trim();
    if(email !== ''){
        if(validateEmail(email)){
            sendRequest('./spam.php', `email=${encodeURIComponent(email)}`, function(res){})
        } else {
            alert("Not real email!")
        }
    }
})