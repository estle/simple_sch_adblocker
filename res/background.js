// cancel function returns an object
// which contains a property `cancel` set to `true`
function cancel(requestDetails) {
    console.log("Canceling: " + requestDetails.url);
    return {
        cancel: true
    };
}

// add the listener,
// passing the filter argument and "blocking"
chrome.webRequest.onBeforeRequest.addListener(
    cancel, {
        urls: urlsFilter
    },
    ["blocking"]
);