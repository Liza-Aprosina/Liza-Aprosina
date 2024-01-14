let links=document.querySelectorAll('.scroll');
let targeID;
links.forEach(function (element){
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID=element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
