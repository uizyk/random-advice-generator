let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.adviceslip.com/advice');
xhr.send(null);
xhr.addEventListener('readystatechange', function(){
    if (xhr.readyState === XMLHttpRequest.DONE){
        let response = JSON.parse(xhr.responseText);
        console.log(xhr);
    }
})

// console.log(response);