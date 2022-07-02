let sidePanel = false, fullscreen = false;  //false = side panel close, true = side panel open
let speed = 2; // 2 is 1.0x speed

const reduceSpeedCount = () => {
    if (speed > 0) {
        speed--
    }
}

const increaseSpeedCount = () => {
    if (speed < 5) {
        speed++
    }
}

document.addEventListener('keydown', (event) => {
    const keychar = event.key

    if (keychar === ">" && event.shiftKey) {
        const button = document.querySelector('button#speed-dropdown-toggle')
        button.click()
        increaseSpeedCount()
        document.querySelector('ul#inner-speed-dropdown').children[speed].children[0].click()
        console.log("bbshortcut speed: " + button.childNodes[0].nodeValue.trim())
    }

    if (keychar === "<" && event.shiftKey) {
        const button = document.querySelector('button#speed-dropdown-toggle')
        button.click()
        reduceSpeedCount()
        document.querySelector('ul#inner-speed-dropdown').children[speed].children[0].click()
        console.log("bbshortcut speed: " + button.childNodes[0].nodeValue.trim())
    }

    if (!(event.shiftKey || !event.ctrlKey || event.altKey)) {
        return
    }

    if (keychar === "m") {
        console.log("shit mute")
    }
    if (keychar === "c") {
        const elem = document.querySelector('button#no-captions-dropdown-toggle')
        console.log(elem)
        elem.click()
    }
    // bug: fullscreen are functional but cannot exit fullscreen
    if (keychar === "f") {
        if (fullscreen === false) {
            const elem = document.querySelector('button#playback-enter-fullscreen')
            console.log(elem)
            elem.click()
        } else {
            const elem = document.querySelector('button#playback-exit-fullscreen')
            console.log(elem)
            elem.click()
        }
    }
    if (keychar === "t") {
        // bug: side panel can open but cannot close
        if (sidePanel === false) {
            const elem = document.querySelector('button#side-panel-open')
            console.log(elem)
            elem.click()
        } else {
            const elem = document.querySelector('button#side-panel-close')
            console.log(elem)
            elem.click()
        }
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
