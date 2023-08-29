var isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    var menu = document.getElementById("mobile-menu"); // Thay "mobile-menu" bằng ID của menu mobile của bạn
    menu.style.display = isMenuOpen ? "block" : "none";

    var menu = document.getElementById("mobile-menu");
    if (isMenuOpen) {
        menu.classList.add("translate-x-0");
    } else {
        menu.classList.remove("translate-x-0");
    }
}
