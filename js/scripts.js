function desplegarMenu() {
    var nav = document.getElementById("navMenu");
    var className = nav.getAttribute("class");
    if (className == "navbar-menu") {
        nav.className = "navbar-menu is-active";
    } else {
        nav.className = "navbar-menu";
    }
}
