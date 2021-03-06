var links = document.querySelectorAll(".link-item");
var bgimg = document.querySelector(".bgimg");
var timeout = 0;

window.onload = (e) => {
    links.forEach(link=>{
        setTimeout(() => {
            link.style.opacity = ".8";
            link.style.transform = "translate(0,0) scale(1)";
        }, timeout);
        timeout+=300;
    })
}

links.forEach(link => {
    link.addEventListener("mouseover", (e) => {
        links.forEach(lnk => {
            if(lnk === link) {
                lnk.style.opacity = "1";
                lnk.style.backgroundColor = "white";
                lnk.style.color = "black";
                lnk.style.transform = "scale(1.05)";
                bgimg.style.filter = "blur(5px)"
                bgimg.style.transform = " translate(0,0) scale(1.02)";
            }
        });
    });
    link.addEventListener("mouseout", (e) => {
        links.forEach(lnk => {
            lnk.style.opacity = ".8";
            lnk.style.backgroundColor = "#86b29d";
            lnk.style.color = "white";
            lnk.style.transform = "scale(1)";
            bgimg.style.filter = "blur(1px)"
            bgimg.style.transform = "scale(1)";
        });
    });
});