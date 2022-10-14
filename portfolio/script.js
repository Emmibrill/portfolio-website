const closeNav = document.querySelector('.closeNav')

const navtoggle = document.querySelector('.nav-toggle')
navtoggle.addEventListener('click', () => {
    document.querySelector('.aside').style.display = 'flex'
    navtoggle.style.display = 'none'
    closeNav.style.display = 'flex'
})
closeNav.addEventListener('click', () => {
    document.querySelector('.aside').style.display = 'none'
    navtoggle.style.display = 'flex'
    closeNav.style.display = 'none'
})
window.addEventListener('scroll', () =>{
    if(document.querySelector('.aside').classList.contains('shownav')){
        document.querySelector('.aside').classList.remove('shownav')
    }
})

const modeStyleToggler = document.querySelector('.icons')
modeStyleToggler.addEventListener('click', () => {
    document.querySelector('.mode-style-toggler').classList.toggle('open')
})
window.addEventListener('scroll', () => {
    if (document.querySelector('.mode-style-toggler').classList.toggle('open')) {
        document.querySelector('.mode-style-toggler').classList.remove('open')
    }
})

const modeSelector = document.querySelector('.daylight')
modeSelector.addEventListener('click', () => {
    modeSelector.querySelector('i').classList.toggle('fa-moon');
    modeSelector.querySelector('i').classList.toggle('fa-sun');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        modeSelector.querySelector('i').classList.add('fa-sun')
    } else{
        modeSelector.querySelector('i').classList.add('fa-moon')
    }
})


function shadowtoggle(){
    document.querySelector('.shadow').classList.toggle('shadowdown')
}
modeSelector.addEventListener('click', shadowtoggle)



document.addEventListener('click', (e) => {
    if(e.target.classList.contains('Tipwork')){
        showDetails()
    } else if(e.target.classList.contains('Fitnesswork')){
        document.querySelector('.portfolio__description').classList.remove('showdescription')
    }
})
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('Fitnesswork')){
        showSecondDetails()
    } else if(e.target.classList.contains('Tipwork')){
        document.querySelector('#descrip').classList.remove('showdescription')
    }
})
const close =  document.querySelector('.closeDetails')
close.addEventListener('click', Close)
function Close(){
    document.querySelector('.portfolio__description').classList.remove('showdescription')
}
const closeSecond = document.querySelector('#collapse')
closeSecond.addEventListener('click', CloseSecond)
function CloseSecond() {
    document.querySelector('#descrip').classList.remove('showdescription')
}


function showDetails(){
    document.querySelector('.portfolio__description').classList.add('showdescription')
}
function showSecondDetails(){
    document.querySelector('#descrip').classList.add('showdescription')
}

const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', addfocus)
    input.addEventListener('blur', removefocus)
})
function addfocus(){
    let parent = this.parentNode 
    parent.classList.add('focus')
}
function removefocus(){
    let parent = this.parentNode
   if(this.value == ''){
    parent.classList.remove('focus')
   }
}

const socialcon =  document.querySelectorAll('.social__media-content');
Array.from(socialcon).forEach(block => {
    block.addEventListener('click', () => {
        socialcon.forEach(block => {
            block.classList.remove('ActiveContainer')
        })
        block.classList.add('ActiveContainer')  
    })
})
const service =  document.querySelectorAll('.service-container');
Array.from(service).forEach(block => {
    block.addEventListener('click', () => {
        service.forEach(block => {
            block.classList.remove('ActiveContainer')
        })
        block.classList.add('ActiveContainer')  
    })
})

const Activestyle = document.querySelectorAll('.alternate-style')
const styleToggler = document.querySelectorAll('.color')
Array.from(styleToggler).forEach(Toggler => {
    Toggler.addEventListener('click', (e) => {
        Array.from(Activestyle).forEach(style => {
            if(e.target.classList.value == style.getAttribute('title')){
                style.removeAttribute('disabled')
            } else{ style.setAttribute('disabled', 'true')}
        })  
    })
})

var typed = new Typed('.auto-type', {
    strings: ['Engineering Student', 'Web Developer', 'Fitness Coach'],
    typeSpeed: 100,
    BackSpeed: 100,
    loop:true
});

