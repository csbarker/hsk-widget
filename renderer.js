// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// load language
fetch('lang/HSK_3.txt')
.then(response => response.text())
.then(function (response) {
    window.lang = response.toString('utf-8').split('\n');

    // init
    setRandomCharacter();
});

// handle hovering
var mainContainer = document.getElementsByTagName('body')[0];

mainContainer.addEventListener('mouseover', function(){
    document.querySelector('.english').style.display = "inline-block";
});

mainContainer.addEventListener('mouseleave', function(){
    document.querySelector('.english').style.display = "none";
});

// pick an initial character
function setRandomCharacter() {
    var character_line = window.lang[Math.floor(Math.random()*window.lang.length)]
    var character = character_line.split('\t');

    document.querySelector('.chinese').innerHTML = character[0];
    document.querySelector('.pinyin').innerHTML = character[3];
    document.querySelector('.english').innerHTML = character[4];
}

// handle character updating
setInterval(setRandomCharacter, 20000);