var canvas = document.createElement('canvas');

canvas.id = "CursorLayer";
canvas.width = 1920;
canvas.height = 1080;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";

// Request media
navigator.mediaDevices.getDisplayMedia().then(stream => {
        // Grab frame from stream
        let track = stream.getVideoTracks()[0];
        let capture = new ImageCapture(track);
        capture.grabFrame().then(bitmap => {
            // Stop sharing
            track.stop();

            // Draw the bitmap to canvas
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            canvas.getContext('2d').drawImage(bitmap, 0, 0);

            // Grab blob from canvas
            canvas.toBlob(blob => {
                // Do things with blob here
                let data = [new ClipboardItem({
                    [blob.type]: blob
                })];

                navigator.clipboard.write(data).then(function () {
                    onDone();
                }, function (err) {
                    onError(err);
                })
                console.log('output blob:', blob);
            });
        });
    })
    .catch(e => console.log(e));