function sendMail (mail){
    let tamparams = {
        from_name: document.getElementById('email').value,
        to_name: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_elgfjk4', 'template_iixo7ad', tamparams)
    .then(function (res) {
        console.log('succed', res.status)
    })
}