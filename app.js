function toggle(){

    let navContent = document.querySelector(".mobile-nav-content");


    if (navContent.style.display === "none") {
        navContent.style.display = "block";
    } else {
        navContent.style.display = "none";
    }

}