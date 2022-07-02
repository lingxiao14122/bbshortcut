let isSidePanelOpen = false;
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
    console.log(event)

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
    if (keychar === "c") {
        const elem = document.querySelector('button#no-captions-dropdown-toggle')
        console.log(elem)
        elem.click()
    }
    if (keychar === "f") {
        if (document.querySelector('button#playback-enter-fullscreen')) {
            document.querySelector('button#playback-enter-fullscreen').click()

        } 
        if (document.querySelector('button#playback-exit-fullscreen')) {
            document.querySelector('button#playback-exit-fullscreen').click()
        }
    }
    if (keychar === "g") {
        if (isSidePanelOpen) {
            document.querySelector('button#side-panel-close').click()
            isSidePanelOpen = false
        } else {
            document.querySelector('button#side-panel-open').click()
            isSidePanelOpen = true
        }
    }
    if (keychar === "d") {
        document.querySelector('button#download-recording').click()
    }
})
