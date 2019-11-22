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
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function Nav(id) {
  document.getElementById(id).scrollIntoView();
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const sections = [...document.getElementsByTagName("section")];
  const nav_list = document.getElementById("navbar__list");
  sections.forEach(function(s) {
    // create nav bar item
    let a = nav_list
      .appendChild(document.createElement("li"))
      .appendChild(document.createElement("a"))
    a.appendChild(document.createTextNode(s.getAttribute("data-nav")))
    //a.setAttribute("href", "#"+s.getAttribute("id"));
    a.addEventListener("click",function(e){Nav(s.getAttribute("id"));});
    // add callbacks for highlights
    (new IntersectionObserver((entries,observer)=>{
        //console.log("observed "+s.getAttribute("data-nav"));
        if(entries[0].isIntersecting){
            s.classList.add('your-active-class');
            a.classList.add('active-nav');
        } else {
            a.classList.remove('active-nav');
            s.classList.remove('your-active-class');
        }
    })).observe(s);
  });
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
