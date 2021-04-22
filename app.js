var btn = document.querySelector('#btn-translate');
var input = document.querySelector('#txt-input');
var output = document.querySelector('#txt-output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function URLConstructor(inp){
    return (serverURL + "?text=" + inp);
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("Something wrong with the server! Please try again after sometime.");
}

function buttonTriggered(){
    var inputText = input.value;
    fetch(URLConstructor(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler);
} 

btn.addEventListener("click", buttonTriggered);

