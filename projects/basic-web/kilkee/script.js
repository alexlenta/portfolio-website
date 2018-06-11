$( document ).ready(function() {
    var burgerMenu = $(".burger-menu");
    var body=  $("body");
    var menuOverlay = $(".menu-overlay");

    burgerMenu.click( function () {
        body.addClass("active")
    })

    menuOverlay.click( function () {
        body.removeClass("active")
    })
});
