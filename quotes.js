const loginForm = document.getElementById('login-form')

var randInt = function (min, max) {
    
    return Math.floor(Math.random() * ((max -1) - min + 1) + min);
}

loginForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const authorSearch = loginForm.querySelector('input[type="text"]').value;
    const quote = document.getElementById('random-quote');
    const author = document.getElementById('author');
 
    fetch(`https://api.quotable.io/quotes?author=${authorSearch}`)
        .then(response => response.json())
        .then(data => {
            //Provide random quote from search parameters.
            var randQuoteID = randInt(0, data.count);

            quote.innerHTML = data.results[randQuoteID].content;
            author.innerHTML = data.results[randQuoteID].author;
        })
        .catch(error => { 
            quote.innerHTML = "Can't fine a quote :(";
            author.innerHTML = "Please try another author!";
         } );
    
});