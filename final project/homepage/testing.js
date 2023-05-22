function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


let currentSection = document.querySelectorAll('.case_study--content_chapter');
let navItem = document.querySelectorAll('.case_study--nav_item');



const overviewSection = document.querySelector('#section_overview');
const overviewNav = document.querySelector('#nav_overview');

document.addEventListener('scroll', function () {
    if (isInViewport(overviewSection) == true){
        console.log("section in viewport!");
    }

});


//break in approach options


//Function to determine if element is in most of viewport
function isCurrentSection(el) {

	var position = el.getBoundingClientRect();

    return (
        (position.bottom - position.top) >= window.innerHeight/2 && 
        position.bottom > window.innerHeight/2 && 
        position.top <= window.innerHeight/2
        
    );
}

//On scroll, check if element is in focus
window.addEventListener('scroll', function() {

    const section = document.querySelectorAll('.case_study--content_chapter');
    const currentNav = document.querySelectorAll('.case_study--nav_item');

    for (i=0; i < section.length; i++){
    
	if (isCurrentSection(section[i]) == true){
        //console.log("Element " + [i] + " in focus");
        currentNav[i].style.display = "block";
    }
    else {
        //console.log("Element " + [i] + " is out");
        currentNav[i].style.display = "none";

   }

    }   
});








window.addEventListener('scroll', function() {
    
	var element = document.querySelector('#section_overview');
	var position = element.getBoundingClientRect();


    if (((position.bottom - position.top) >= window.innerHeight/2) && position.bottom > window.innerHeight/2 && position.top <= window.innerHeight/2) {
		console.log('Element is in focus');
	}
});


//**********************Final**************************** */

<script>

//Function to determine if element is in most of viewport
function isCurrentSection(el) {

	var position = el.getBoundingClientRect();

    return (
        (position.bottom - position.top) >= window.innerHeight/2 && 
        position.bottom > window.innerHeight/2 && 
        position.top <= window.innerHeight/2
        
    );
}

//On scroll, check if element is in focus
window.addEventListener('scroll', function() {

    const section = document.querySelectorAll('.case_study--content_chapter');
    const currentNav = document.querySelectorAll('.case_study--nav_item');

    for (i=0; i < section.length; i++){
    
	if (isCurrentSection(section[i]) == true){
        //console.log("Element " + [i] + " in focus");
        //currentNav[i].querySelector('.contextual_nav_icon').style.display = "block";
        currentNav[i].classList.add('current_nav');
    else {
        //console.log("Element " + [i] + " is out");
        //currentNav[i].querySelector('.contextual_nav_icon').style.display = "none";
				currentNav[i].classList.remove('current_nav');
   }

    }   
});

</script>
