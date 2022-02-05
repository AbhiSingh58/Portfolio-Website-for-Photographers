 // FOR SLIDESHOW
 const slide = document.querySelectorAll(".imgnum");

 var currentslide = 0;
 var timer = setInterval(slideshow, 4000);
 slideshow();

 function slideshow() {
     next();
     //    slidech();
     resettimer();

 }


 function next() {
     if (currentslide == slide.length - 1) {
         currentslide = 0;
     }
     else {
         currentslide++;
         console.log("getting tonext slide ")
     }
     slidech();
 }

 function resettimer() {
     clearInterval(timer);
     //    console.log("poorana khtm ")
     timer = setInterval(slideshow, 4000);
     //    console.log("ye shuru")
 }

 function slidech() {
     for (let i = 0; i < slide.length; i++) {
         slide[i].classList.remove('visible');
         //    console.log("pichli gyi")

     }
     slide[currentslide].classList.add('visible');
     //    console.log("ye agyi")
 }
