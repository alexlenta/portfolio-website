var navigation = document.querySelector(".navbar");

document.querySelector(".burger-menu").addEventListener("click", toggleNavigation, false);

function toggleNavigation() {
    navigation.classList.toggle("active");
}