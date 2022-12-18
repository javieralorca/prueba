const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))




$('#enviarCorreo').click(function(){
    alert("El mensaje fue enviado correctamente")
    })


$(document).ready(function(){
        $("a").click(function(){
            var gato = this.hash
            
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top -70
            },
            900
        )    
        
        })
        
        })    