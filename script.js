//select all "accordion" type item
let accordions = document.querySelectorAll('.accordion');
//add a click event on each button
accordions.forEach(function(accordion){
    accordion.addEventListener("click", function(){
        let panel = this.nextElementSibling;
        //add or remove the "open" class animation
        panel.classList.toggle("open");
    });
});
