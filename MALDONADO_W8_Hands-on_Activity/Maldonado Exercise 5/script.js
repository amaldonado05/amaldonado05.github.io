const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const tweetBtn = document.getElementById('tweetBtn');

function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

copyBtn.addEventListener('click', () => {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    });
});

tweetBtn.addEventListener('click', () => {
    const tweetText = `${quoteElement.textContent} ${authorElement.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
});

newQuoteBtn.addEventListener('click', fetchQuote);

fetchQuote();
