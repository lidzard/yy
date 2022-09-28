draw_apple = "";
drawrec = "";
x = 0;
y = 0;
size = 0;
to_number = 0;


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Sytem Is Listening Please Speak";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        draw_apple = "set";
        document.getElementById("status").innerHTML = content + " apple drawn";

    }
    else {
        document.getElementById("status").innerHTML = content + " Is not recognized";
    }

}
function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


function preload() {
    img = loadImage("apple.png");

}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    createCanvas(screen_width, screen_height - 150);
}
function draw() {
    if (draw_apple == "set") {
        for (i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            size = Math.floor(Math.random() * 100);
            image(img, x, y, size, size);
            document.getElementById("status").innerHTML = " Apples drawn";
            speak_data = to_number + "apples drawn";

            speak();
            draw_apple = "";
        }
    }
}
