var myQuotes = [
    {quote:"Be yourself; everyone else is already taken", quoter:"Oscar wilde",citation:"PoetBook",published:"1785"},
    {quote:"Be the change that you wish to see in the world",quoter:"Mahatma Gandhi",citation:"The Universe",published:"1900"},
    {quote:"If you tell the truth, you don't have to remember anything.",quoter:"Mark Twain",citation:"The Porter",published:"1800"},
    {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",quoter:"Albert Eisten",citation:"The Universe",published:"1800"},
    {quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",quoter:"Mark Twain",citation:"The Book",published:"1850"}
]

const randmoQuote =()=>{
    var quoteItem = Math.floor(Math.random() * myQuotes.length)
    return myQuotes[quoteItem]
}

const randomBg =()=>{
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)

    var color = 'rgb('+ red + ','+ green + ','+ blue +')'
    return color;
    // console.log(color)
}

const showQuote = ()=>{
    var quotes = randmoQuote()
    var domContent = document.getElementById("quoteContent")
    var qString = `<p class="theQuote">${quotes.quote}</p>
    <p class="quoter">${quotes.quoter}
    <span class="citation">${quotes.citation}</span>
    <span class="published">${quotes.published}</span>
    </p>
    `
    console.log(quotes)
    domContent.innerHTML = qString

    document.body.style.backgroundColor = randomBg()
    // return quotes
}

window.setInterval(()=>{
    showQuote()
}, 10000)

document.getElementById("loadmyQuote").addEventListener("click", showQuote)