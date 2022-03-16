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

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
   const serviceID = 'default_service';
   const templateID = 'template_8lky4j8';


grecaptcha.enterprise.ready(function() {
    grecaptcha.enterprise.execute('6LeMe-UeAAAAADBjmUNKqLYyPPpwNQt3uR8TF4Yr', {action: 'login'}).then(function(token) {
                emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Envia Correo';
                alert('Sent!');
                }, (err) => {
                btn.value = 'Envia Correo';
                alert(JSON.stringify(err));
                });
            });
    });
});
   
