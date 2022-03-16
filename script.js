document.getElementById("header-btn").addEventListener("click", (e)=>{
    document.getElementById('nav').classList.toggle('active');
})
/*Start Component Slider */
const DivMain = document.getElementById("main");
const SliderTestimonial = document.getElementById("carrusel--testimonial");
const SliderArticles= document.getElementById("carrusel--articles");
SliderTestimonial.addEventListener('mouseover', (e)=>{
    DivMain.addEventListener('mousewheel', ScrollHorizontal, {passive: false }); 
})
SliderTestimonial.addEventListener('mouseout', (e)=>{
    DivMain.removeEventListener('mousewheel', ScrollHorizontal, {passive: false });
})
SliderArticles.addEventListener('mouseover', (e)=>{
    DivMain.addEventListener('mousewheel', ScrollArticles, {passive: false }); 
})
SliderArticles.addEventListener('mouseout', (e)=>{
    DivMain.removeEventListener('mousewheel', ScrollArticles, {passive: false });
})
const ScrollHorizontal = function(e) {
    e.preventDefault();  
    const isRight= e.deltaY > 0;
    let CardTestimonial = SliderTestimonial.children[0].clientWidth;
    if(isRight){
        return SliderTestimonial.scrollLeft += CardTestimonial;       
         }
    return SliderTestimonial.scrollLeft -= CardTestimonial;    
};
const ScrollArticles = function(e) {
    e.preventDefault();  
    const isRight= e.deltaY > 0;
    let CardTestimonial = SliderArticles.children[0].clientWidth;
    if(isRight){
        return SliderArticles.scrollLeft += CardTestimonial;       
         }
    return SliderArticles.scrollLeft -= CardTestimonial;    
};
/*End Component Slider */     
/* Arrows container */
const ArrowsContent = document.getElementById("arrows");
ArrowsContent.addEventListener('click', (e)=>{
    let CardTestimonial = SliderTestimonial.children[0].clientWidth;
   switch (true) {
       case e.target.className.indexOf('arrow__left--testimonial') !== -1:
        SliderTestimonial.scrollLeft -= CardTestimonial; 
           break;
        case e.target.className.indexOf('arrow__right--testimonial') !== -1:
        SliderTestimonial.scrollLeft += CardTestimonial;    
            break;
       default:
           break;
   }
})


const btn = document.getElementById('button');
const LabelEmail = document.getElementById('LabelEmail');
const Pemail= document.getElementById('Pemail');
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   LabelEmail.innerText = '';
   this.email.classList.remove('invalid')
   Pemail.textContent = '';
   if (validateEmail(this.email.value))
   {
    btn.value = 'Enviando...';
    btn.disabled = true;
    const serviceID = 'default_service';
    const templateID = 'template_8lky4j8';
    emailjs.sendForm(serviceID, templateID, this).then(() => {
    btn.disabled = false;    
    btn.value = 'Envia Correo';
    Pemail.textContent = 'Correo Enviado';
    this.email.value = '';
    }, (err) => {
    btn.value = 'Envia Correo';
    alert(JSON.stringify(err));
    });
    
   }else{
    this.email.focus();
    this.email.classList.add('invalid');
    LabelEmail.innerText = 'Email invalido';
   }

   
});


  grecaptcha.enterprise.ready(function() {
    grecaptcha.enterprise.execute('6LfzruYeAAAAALLMLDoclFI5hYVHYhf6oBSecagB', {action: 'submit'}).then(function(token) {
       
    });
});
