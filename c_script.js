document.addEventListener('keydown', (event) => {
    console.log(event)
    const keychar = event.key
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
        console.log("shit download")
    }
    if (keychar === ">" && event.shiftKey) {
        console.log("shit forward")
    }
    if (keychar === "<" && event.shiftKey) {
        console.log("shit backward")
    }
})
