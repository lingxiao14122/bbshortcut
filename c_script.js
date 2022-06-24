document.addEventListener('keydown', (event) => {
    const keychar = event.key
    if (keychar === ">" && event.shiftKey) {
        console.log("shit forward")
    }
    if (keychar === "<" && event.shiftKey) {
        console.log("shit backward")
    }
    if (!(event.shiftKey || !event.ctrlKey || event.altKey)) {
        return
    }
    if (keychar === "m") {
        console.log("shit mute")
    }
    if (keychar === "c") {
        console.log("shit caption")
    }
    if (keychar === "f") {
        console.log("shit fullscreen")
    }
    if (keychar === "t") {
        const elem = document.querySelector('button#side-panel-open')
        console.log(elem)
        elem.click()
        console.log("shit open close chat")
    }
    if (keychar === "d") {
        const video = document.getElementsByClassName('vjs-tech')[0]
        console.log(video.src)
        console.log("new request")
        let xhr = new XMLHttpRequest();
        function createCORSRequest(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        }
        xhr = createCORSRequest('GET', video.src);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            console.log("onload")
            let urlCreator = window.URL || window.webkitURL;
            let videoUrl = urlCreator.createObjectURL(this.response);
            let tag = document.createElement('a');
            tag.href = videoUrl;
            tag.target = '_blank';
            tag.download = "recoding.mp4"
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        };
        xhr.onprogress = function (pe) {
            if (pe.lengthComputable) {
                progressBar.max = pe.total
                progressBar.value = pe.loaded
            }
            console.log("progress")
        }
        xhr.onerror = (err) => {
            console.log("download fail", err)
        };
        xhr.send();
    }
})
