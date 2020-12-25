function openNav() {

  if(window.matchMedia("(max-width : 450px)").matches){
    document.getElementById("mySidenav").style.width = "25%";
  }else{
    document.getElementById("mySidenav").style.width = "17.5rem";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("main").style.paddingLeft = "17.5rem";
    document.getElementById("initNav").style.paddingLeft = "18.75rem";
    document.getElementById("openMenu").style.display = "none";
  }
}
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0rem";
    document.getElementById("main").style.paddingLeft = "0rem";
    document.getElementById("initNav").style.paddingLeft = "0rem";
    document.getElementById("openMenu").style.display = "inline";
  }


  