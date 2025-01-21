// Scroll bar progress
        window.addEventListener("scroll", function () {
        const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressBar = document.getElementById("scroll-progress");
        const progress = (scrolled / scrollableHeight) * 100;
        progressBar.style.width = progress + "%";
    });

    // 