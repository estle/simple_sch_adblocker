document.querySelector("html").style["color-scheme"] = "";

document.querySelectorAll("*").forEach((mediaItem) => {
    mediaItem.style.color = "";
    mediaItem.style["background-color"] = "";
});

y = document.querySelector(".media-grid");
if (y!=null) {
    y.style["background-image"] = "";
}
