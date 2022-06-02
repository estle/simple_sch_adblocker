
function cancel(requestDetails) {
    console.log("Canceling: " + requestDetails.url);
    return {
        cancel: true
    };
}

function adblock() {
    chrome.webRequest.onBeforeRequest.removeListener(
        cancel, {
            urls: [""]
        },
        ["blocking"]
    );
    chrome.webRequest.onBeforeRequest.addListener(
        cancel, {
            urls: urlsF
        },
        ["blocking"]
    );
    chrome.tabs.executeScript({
        file: "src/adblock.js"
    });
}

function disadblock() {
    chrome.webRequest.onBeforeRequest.removeListener(
        cancel, {
            urls: urlsF
        },
        ["blocking"]
    );
    chrome.webRequest.onBeforeRequest.addListener(
        cancel, {
            urls: [""]
        },
        ["blocking"]
    );
}

function darkm() {
    chrome.tabs.executeScript({
        file: "src/darkmode.js"
    });
}

function lightm() {
    chrome.tabs.executeScript({
        file: "src/lightmode.js"
    });
}

var checked;

chrome.tabs.onSelectionChanged.addListener(() => {

    checked = JSON.parse(localStorage.getItem("c1"));    

    if (checked) {
        adblock()
    } else {
        disadblock()
    }

    checked = JSON.parse(localStorage.getItem("c2"));

    if (checked) {
        darkm();
    } else {
        lightm();
    }

});

chrome.tabs.onUpdated.addListener(() => {

    checked = JSON.parse(localStorage.getItem("c1"));

    if (checked) {
        adblock()
    } else {
        disadblock()
    }

    checked = JSON.parse(localStorage.getItem("c2"));

    if (checked) {
        darkm();
    } else {
        lightm();
    }

});

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".extension-loaded")) {

        checked = JSON.parse(localStorage.getItem("c1"));
        document.getElementById("c1").checked = checked;

        if (checked) {
            adblock()
        } else {
            disadblock()
        }

        checked = JSON.parse(localStorage.getItem("c2"));
        document.getElementById("c2").checked = checked;        

        if (checked) {
            darkm();
        } else {
            lightm();
        }

        var checkbox1 = document.getElementById("c1");

        checkbox1.addEventListener('change', function () {
            if (this.checked) {
                adblock();
                localStorage.setItem("c1", true);
            } else {
                disadblock();
                localStorage.setItem("c1", false);
            }
        });

        var checkbox2 = document.getElementById("c2");

        checkbox2.addEventListener('change', function () {
            if (this.checked) {
                darkm();
                localStorage.setItem("c2", true);
            } else {
                lightm();
                localStorage.setItem("c2", false);
            }
        });

        var screens = document.getElementById("screens");

        screens.addEventListener('click', function() {
            chrome.tabs.executeScript({
                file: "src/screen.js"
            });
        });

    }
})