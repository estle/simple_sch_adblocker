document.querySelector("html").style["color-scheme"] = "dark";

el = document.querySelector(".infinity-zen__container");
if (el != null) {
    el_p = el.parentElement;
    el_p.removeChild(el);
}

document.querySelectorAll("*").forEach((mediaItem) => {
    mediaItem.style.color = "rgb(200, 195, 188)";
    col = window.getComputedStyle(mediaItem).backgroundColor;
    if (col.length==18)
        console.log(col.substring(9, 12),col.substring(9, 12)>="240");
    if (col.length == 18 && col.substring(4, 7)>="240" && col.substring(9, 12)>="240" && col.substring(14, 17)>="240") {
        mediaItem.style["background-color"] = "rgb(24, 26, 27)";
        mediaItem.style.color = "white";
    }
        
});

y = document.querySelector(".media-grid");
if (y != null) {
    y.style["background-image"] = "linear-gradient(rgb(24, 26, 27),rgb(24, 26, 27))";
}