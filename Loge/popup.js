function save() {
    var checkbox = document.getElementById("checkbox1");
    localStorage.setItem("checkbox1", checkbox.checked);
}

var checked;

chrome.tabs.onSelectionChanged.addListener(() => {

    checked = JSON.parse(localStorage.getItem("checkbox1"));

    if (checked) {
        console.log("Checkbox is checked..");
        chrome.tabs.executeScript({
            file: "darkapp/appOn.js"
        })
    } else {
        console.log("Checkbox is not checked..");
        chrome.tabs.executeScript({
            file: "darkapp/appOff.js"
        })
    }

});

chrome.tabs.onUpdated.addListener(() => {

    checked = JSON.parse(localStorage.getItem("checkbox1"));

    if (checked) {
        console.log("Checkbox is checked..");
        chrome.tabs.executeScript({
            file: "darkapp/appOn.js"
        })
    } else {
        console.log("Checkbox is not checked..");
        chrome.tabs.executeScript({
            file: "darkapp/appOff.js"
        })
    }

});

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".popup")) {

        //for loading
        checked = JSON.parse(localStorage.getItem("checkbox1"));
        document.getElementById("checkbox1").checked = checked;

        mode = document.getElementById("on-off");

        if (checked) {
            mode.textContent = "on";
        } else {
            mode.textContent = "off";
        }

        var checkbox = document.querySelector("input[name=checkbox]");

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                console.log("Checkbox is checked..");
                mode.textContent = "on";
                save();
                chrome.tabs.executeScript({
                    file: "darkapp/appOn.js"
                })
            } else {
                console.log("Checkbox is not checked..");
                mode.textContent = "off";
                save();
                chrome.tabs.executeScript({
                    file: "darkapp/appOff.js"
                })
            }
        });
    }
})