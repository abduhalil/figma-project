function myFunction(x) {
  x.classList.toggle("change");
}
var myTopnav = document.getElementById("myTopnav");
      myTopnav.style.maxHeight = "0px";
      function myBurger(){
        if(    myTopnav.style.maxHeight == "0px")
        {
          myTopnav.style.maxHeight = "767px";
        }
        else
        {
          myTopnav.style.maxHeight = "0px";
        }
      }