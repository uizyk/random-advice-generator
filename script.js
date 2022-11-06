let dice = document.getElementById("dice");
let adviceNumber = document.getElementById("advice-number");
let advice = document.getElementById("advice");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

dice.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.adviceslip.com/advice/${getRandomInt(0, 224)}`);
    xhr.send(null);
    xhr.addEventListener('readystatechange', function(){
        if (xhr.readyState === XMLHttpRequest.DONE){
            let response = JSON.parse(xhr.responseText);
            adviceNumber.textContent = `Advice #${response.slip.id}`;
            advice.textContent = response.slip.advice;

        }
    })
})





// console.log(response);