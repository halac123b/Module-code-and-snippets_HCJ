const Tools = {
    "pencil": {
        "button-id": "pencil-button",
        "hotkey": "KeyN",
        "cursor": 'url("img/pencil.png") 2 28, auto',
    }
};

function activateTool(label) {
    let object = Tools[label];
    let button = document.getElementById(object["button-id"]);
    let buttonBkgdColor = button.style.backgroundColor;

    if (STATE["activeTool"] !== label) {

    }
}