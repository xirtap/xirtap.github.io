gsap.from("#first", {duration: 1, x: 500});
gsap.from("#first", {duration: 1.5, opacity: 0});
gsap.from("#second", {duration: 1, x: -500});
gsap.from("#second", {duration: 1.5, opacity: 0});


var classname = this.document.getElementsByClassName("btn");

for (var i = 0; i < classname.length; i++) { 
  classname[i].addEventListener('mousedown', function () {
    this.classList.add("press")
  }, false);
}