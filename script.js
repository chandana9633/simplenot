function toggleNavIcon() {
var icon = document.getElementById("toggle-nav-icon");
    if(icon.className === "fas fa-bars"){
      (icon.className = "fas fa-close")
    }else{
      (icon.className = "fas fa-bars");
    }
}
