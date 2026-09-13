document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    // Verifica se os elementos existem na página
    if (menuToggle && menu) {

        menuToggle.addEventListener("click", function () {

            menu.classList.toggle("active");

        });

    }

});
