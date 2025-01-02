 document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        // alert("Right Click Not Allowed");
       
    });
    document.onselectstart=(e)=>{
           e.preventDefault();
        //    alert("Content Copy Are Not Allowed")
        };
        document.addEventListener("keydown",(e)=>{
            e.preventDefault();
      if(e.key.toLowerCase()==="u"&&e.ctrlKey){
        
      }
        })



const btn = document.getElementById("btn");
const content = document.getElementById("content");
const para = document.getElementById("para");

function main(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  //this line for female voice
  speech.lang = "hi-GB";
  window.speechSynthesis.speak(speech);
}

function wishMe() {
  const time = new Date();
  const realTime = time.getHours();
  if (realTime >= 0 && realTime < 12) {
    main("Good Morning Sir!");
  } else if (realTime >= 12 && realTime < 16) {
    main("Good AfterNoon Sir");
  } else if (realTime >= 16 && realTime < 20) {
    main("Good Evening Sir!");
  } else {
    main("Good Night Sir  ");
  }
}

// window.addEventListener("load",()=>{
//   wishMe()
// })
let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let curIndex = event.resultIndex;
  let transcript = event.results[curIndex][0].transcript;
  content.innerText = transcript;
  command(transcript.toLowerCase());
};
btn.addEventListener("click", () => {
  recognition.start();
  para.style.display = "none";
  voice.style.display = "block";
  btn.style.display = "none";
});
function command(msg) {
  voice.style.display = "none";
  btn.style.display = "flex";
  para.style.display = "block";
  if (msg.includes("hi") || msg.includes("hey") || msg.includes("hello")) {
    main("hello boss,how can i help you?");
  } else if (msg.includes("who are you")) {
    main("i am virtual assistant ,created by Dipayan Sir");
  } else if (msg.includes("what is your name")) {
    main("my name is Alexa");
  } else if (msg.includes("how are you")) {
    main("I am always fine boss! please tell how can i help you ");
  } else if (msg.includes("i love you")) {
    main("i love you too dipayan");
  } else if (msg.includes("open youtube") || msg.includes("opening youtube")) {
    main("openning youtube...");
    window.open("https://www.youtube.com/", "_blank");
  } else if (
    msg.includes("open facebook") ||
    msg.includes("opening facebook")
  ) {
    main("openning facebook...");
    window.open("https://www.facebook.com/", "_blank");
  } else if (
    msg.includes("open instagram") ||
    msg.includes("opening instagram")
  ) {
    main("openning instagram...");
    window.open("https://www.instagram.com/", "_blank");
  } else if (
    msg.includes("open my profile") ||
    msg.includes("opening my profile")
  ) {
    main("openning profile...");
    window.open("https://dipayan-dey.github.io/-dip_portfolio/", "_blank");
  } else if (msg.includes("open google") || msg.includes("opening google")) {
    main("opening google..");
    window.open("https://www.google.com/", "_blank");
  } else if (
    msg.includes("open calculator") ||
    msg.includes("opening calculator")
  ) {
    main("opening calculator....");

    window.open("Calculator://", "_blank");
  } else if (
    msg.includes("open whatsapp") ||
    msg.includes("opening whatsapp")
  ) {
    main("opening whatsapp....");
    window.open("WhatsApp://", "_blank");
  } else if (msg.includes("time")) {
    wishMe();
    let nowtime = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    main(nowtime);
  } else if (msg.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    main(date);
  } else {
    let txt =
      "this is what i found on internet regarding" + msg.replace("alexa", "");

    main(txt);
    window.open(
      `https://www.google.com/search?q=${msg.replace("alexa", "")}`,
      "_blank"
    );
  }
}
