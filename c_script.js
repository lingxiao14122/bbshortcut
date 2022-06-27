let sidePanel = false, fullscreen = false;  //false = side panel close, true = side panel open

document.addEventListener('keydown', (event) => {
    console.log(event)
    const keychar = event.key
    if (keychar === "c") {
        const elem = document.querySelector('button#no-captions-dropdown-toggle')
        console.log(elem)
        elem.click()
    }
    // bug: fullscreen are functional but cannot exit fullscreen
    if (keychar === "f") {
        if(fullscreen === false){
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
        if(sidePanel === false){
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
        console.log("shit download")
    }
    if (keychar === ">" && event.shiftKey) {
        console.log("shit forward")
    }
    if (keychar === "<" && event.shiftKey) {
        console.log("shit backward")
    }
})
