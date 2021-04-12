var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#textArea")
var output = document.querySelector("#outputText");

var serverURL= "https://api.funtranslations.com/translate/minion.json";
//var serverURL= "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL (inputText){
    return serverURL + "?" + "text="+ inputText; // creating API url
}
function errorHandler(error){
    console.log("Error occured" + error);
    alert("Please try again after sometime. Can be tried only 5 times per hour")
}
function clickHandler(){
    var inputText = input.value; // getting input
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;  // fetching output
            output.innerText = translatedText // sending output
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener('click', clickHandler);