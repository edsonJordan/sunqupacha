document.getElementById('form-contact').addEventListener('submit', function(event) {
    event.preventDefault();
    let responseCaptcha = grecaptcha.getResponse();
    if(!isOk) {
       return true;
    }
    if (responseCaptcha.length === 0) {
        return document.getElementById("captcha").classList.add('invalid');    
    }
    /* Form Success */
    
    const btn = document.getElementById('button');
    document.getElementById("captcha").classList.remove('invalid');  

    btn.value = 'Enviando...';
    btn.disabled = true;
    emailjs.send('default_service', 'template_mb6w76s', {
        'from_name': this.name.value,
        'from_email': this.email.value,
        'from_subject': this.subject.value,
        'from_message': this.message.value,
        'g-recaptcha-response': '6Lf7-eceAAAAAC8ISfbb6Nn_jd2LJRdjNQH8la_9'
    }, '4x4zfdBKSdqkKXiNS').then(() => {
    btn.disabled = false;    
    btn.value = 'Envia Correo';
    this.name.classList.remove('valid');
    this.name.value = '';
    this.email.classList.remove('valid');
    this.email.value = '';
    this.subject.classList.remove('valid');
    this.subject.value = '';
    this.message.classList.remove('valid');
    this.message.value = '';
    ShowTextSuccess();
    
    grecaptcha.reset();

    }, (err) => {
    btn.value = 'Envia Correo';
    alert(JSON.stringify(err));
    });

});

function ShowTextSuccess() {
    const  Psuccess = document.getElementById('p__success');
    let countdown = 10;
    const interval = setInterval(() => {
      countdown = --countdown <= 0 ? 10 : countdown;
      Psuccess.classList.remove('none');
      if (countdown == 1) {
        Psuccess.classList.add('none');
        clearInterval(interval);
      }
    }, 1000)
  }


let isOk = true;
document.getElementById('InputName').addEventListener('focusout', (e)=>{
    const Input = e.target;
    if (Input.value.length === 0) {
        Input.classList.remove('valid');
        Input.classList.add('invalid');
        return isOk = false;
    }
    Input.classList.remove('invalid');
    Input.classList.add('valid');
    return isOk = true;
});
document.getElementById('InputEmail').addEventListener('focusout', (e)=>{
    const Input = e.target;
    if (!validateEmail(Input.value)) {
        Input.classList.remove('valid');
        Input.classList.add('invalid');
        return isOk = false;
    }
    Input.classList.remove('invalid');
    Input.classList.add('valid');
    return isOk = true;
});

document.getElementById('InputSubject').addEventListener('focusout', (e)=>{
    const Input = e.target;
    if (Input.value.length === 0) {
        Input.classList.remove('valid');
        Input.classList.add('invalid');
        return isOk = false;
    }
    Input.classList.remove('invalid');
    Input.classList.add('valid');
    return isOk = true;
});
document.getElementById('InputMessage').addEventListener('focusout', (e)=>{
    const Input = e.target;
    if (Input.value.length < 10) {
        Input.classList.remove('valid');
        Input.classList.add('invalid');
        return isOk = false;
    }
    Input.classList.remove('invalid');
    Input.classList.add('valid');
    return isOk = true;
});



function validateName(Name) {
    return /^[A-z ]+$/.test(Name);
}


