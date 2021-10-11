

function hello(){
alert("Hello, world!");
}


function biggerr(){
    hello();
    let words = document.getElementById("words");
    words.style.fontSize="24pt"

}

function fancyWords(){
    let check = document.getElementById("fancyWords");
    let words = document.getElementById("words;");

    if (check.checked){
        hello();
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline blink";
    }
    else {
        words.style.fontWeight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none"
    }

    function moo(){

        let words = document.getElementById("words");
        let per = words.ariaValueMax.split(" ")
        words.value = peer.join("_");

    }

}
