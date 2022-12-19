/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const topArrow = document.getElementById('topArrow');
const sections = document.querySelectorAll('section');
const navList = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// build the nav
function buildNav() {
    for (section of sections) {
        const currentSectionId = section.getAttribute('id');
        // build the navigation bar
            let element = document.createElement('a');
            let navbar__item = document.createElement('li');
            element.textContent = section.getAttribute('data-nav');
            element.setAttribute('href', `#${currentSectionId}`);
            element.setAttribute('id', `${currentSectionId}__link`);
            navbar__item.setAttribute('class', 'navbar__item');
            navbar__item.onclick = function(e) {
                e.preventDefault();
                // Scroll to anchor ID using scrollTO event
                document.querySelector(`#${currentSectionId}`).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            navbar__item.appendChild(element);
            navList.append(navbar__item);
        
    }
}


// Add class 'active' to section when near top of viewport
function activeSection() {
    for(let i = 0; i < sections.length; i++){
                if(sections[i].getBoundingClientRect().top >= 0){
                    sections[i].classList.add("your-active-class");
                }
                else{
                    sections[i].classList.remove("your-active-class");
                }
            }
        }


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function main() {
    buildNav();
    activeSection();
    topArrow.addEventListener("click", toTop);
}


/**
 * End Main Functions
 * Begin Events
 *
*/

main();
























