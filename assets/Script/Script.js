const lightSwitch = () => {
    let x = document.querySelector("#checkbox123");
    let y = Boolean;
    x.addEventListener("click", ()=> {
        if (y) {
            document.body.style.background = "rgb(211, 189, 189)"
            return y = false;
        } else {
            document.body.style.background = "#333b46"
            return y = true;
        }
    })
}

lightSwitch();