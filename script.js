function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("main").style.paddingLeft = "280px";
    document.getElementById("initNav").style.paddingLeft = "300px";
    document.getElementById("openMenu").style.display = "none";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.paddingLeft = "0px";
    document.getElementById("initNav").style.paddingLeft = "0px";
    document.getElementById("openMenu").style.display = "inline";
  }

  