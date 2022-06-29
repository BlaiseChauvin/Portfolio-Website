/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("navBar").style.display = "block";
    document.getElementsById("closebtn").style.display = "block";
    document.getElementsById("openbtn").style.display = "none";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("navBar").style.display = "none";
    document.getElementsByClassName("closebtn").style.display = "none";
    
  }