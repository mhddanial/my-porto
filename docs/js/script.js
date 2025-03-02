
// Scroll bar progress
        window.addEventListener("scroll", function () {
        const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressBar = document.getElementById("scroll-progress");
        const progress = (scrolled / scrollableHeight) * 100;
        progressBar.style.width = progress + "%";
    });

    // hamburger menu
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
        hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
    });
