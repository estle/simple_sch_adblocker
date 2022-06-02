(function () {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    
    let media = document.querySelectorAll("img, video, gif, a, nav");

    media.forEach((mediaItem)=>{
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })    
})();
