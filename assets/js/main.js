const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))




$('#enviarCorreo').click(function(){
    alert("El mensaje fue enviado correctamente")
    })

  /*   var nav = document.querySelector('nav'); */
     
   /*  window.addEventListener('scroll',function(){
       if (window.pageYOffset > 100){
           nav.classList.add('bg-dark',  'shadow');
       }else
       nav.classList.remove ('bg-dark', 'shadow');
    }); */


    $('.card-title').click(function(){
        $('.card-text').toggle("slow",function(){})
    
    
    })