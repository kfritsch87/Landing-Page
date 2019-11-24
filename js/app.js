
// build the nav
document.addEventListener("DOMContentLoaded", init);

function init() {
  const sections = [...document.getElementsByTagName("section")];
  const nav_list = document.getElementById("navbar__list");
  sections.forEach(function(s) {
    // create nav bar item
    let a = nav_list
      .appendChild(document.createElement("li"))
      .appendChild(document.createElement("a"))
    a.classList.add('menu__link');
    a.appendChild(document.createTextNode(s.getAttribute("data-nav")))
    //a.setAttribute("href", "#"+s.getAttribute("id"));
    a.addEventListener("click",function(e){s.scrollIntoView();});
    // add callbacks for highlights
    (new IntersectionObserver((entries,observer)=>{
        //console.log("observed "+s.getAttribute("data-nav"));
        if(entries[0].isIntersecting){
            s.classList.add('your-active-class');
            a.classList.add('active');
        } else {
            a.classList.remove('active');
            s.classList.remove('your-active-class');
        }
    },{threshold:0.5})).observe(s);
  });
}
