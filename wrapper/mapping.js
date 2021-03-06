canvas = document.getElementsByTagName("canvas")[0];
canvas.width = 220;
canvas.height = 260;

var mydata = JSON.parse(data);
console.log(mydata);
document.addEventListener("keydown", keyNavigationdown, true);
document.addEventListener("keyup", keyNavigationup, true);




function keyNavigationup(e) {
    e.stopPropagation();
    for (var prop in mydata) {
        if (e.key == mydata[prop]) {
            var keyboardEvent = document.createEvent("KeyboardEvent");
            var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
            keyboardEvent[initMethod](
                "keyup", // event type : keydown, keyup, keypress
                true, // bubbles
                true, // cancelable
                window, // viewArg: should be window
                false, // ctrlKeyArg
                false, // altKeyArg
                false, // shiftKeyArg
                false, // metaKeyArg
                prop, // keyCodeArg : unsigned long the virtual key code, else 0
                0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
            );
            document.dispatchEvent(keyboardEvent);

        }
    }
}

function keyNavigationdown(e) {
    console.log(e);
    e.stopPropagation();
    for (var prop in mydata) {
        if (e.key == mydata[prop]) {
            var keyboardEvent = document.createEvent("KeyboardEvent");
            var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
            keyboardEvent[initMethod](
                "keydown", // event type : keydown, keyup, keypress
                true, // bubbles
                true, // cancelable
                window, // viewArg: should be window
                false, // ctrlKeyArg
                false, // altKeyArg
                false, // shiftKeyArg
                false, // metaKeyArg
                prop, // keyCodeArg : unsigned long the virtual key code, else 0
                0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
            );
            document.dispatchEvent(keyboardEvent);
        }
    }
}
