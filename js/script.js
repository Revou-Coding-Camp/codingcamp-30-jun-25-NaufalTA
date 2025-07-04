let user = prompt('siapa nama anda?');

if(user){
    document.getElementById('guest').innerHTML += user
} else {
    document.getElementById('guest').innerHTML += 'Guest'
}



document.getElementById("formMessage").addEventListener("submit", function (event) {
    event.preventDefault();
});


    function respon() {
        let first = (document.getElementById('firstName').value);
        let last = (document.getElementById('lastName').value);
        let email = (document.getElementById('email').value);
        let number = (document.getElementById('number').value);
        let message = (document.getElementById('message').value);

        document.getElementById('firstName2').innerHTML = first;
        document.getElementById('lastName2').innerHTML = last;
        document.getElementById('email2').innerHTML = email;
        document.getElementById('number2').innerHTML = number;
        document.getElementById('message2').innerHTML = message;
    }