//returns  the first element with in a document
const quote = document.querySelector('.quote');
console.log(quote)
const character = document.querySelector('.character');
const nextBtn = document.querySelector('.next');
/*Creating a Function*/
/**async & await- to handle the promises easily*/
const getQuote = async () => {
	/**Fetches the API to Get All the Codes */
	/**Stores the Respose in the res Variable */
	const res = await fetch('https://friends-quotes-api.herokuapp.com/quotes/random/')
	
	/**After Getting the Response Change it to json*/
	//to transport and store data
	const quotes = await res.json();

	//To Access a Particular Quote from the Array
	/*const num = Math.floor(Math.random()*quotes.length);*/
	const item = quotes;
	const text = item.quote;
	const author = item.character;
	//to return the text contents 
	quote.innerText = text;
	character.innerText = author;
	//console.log(item);
}
//Makes the Button to Generate Random Quote When Clicked
nextBtn.addEventListener('click', getQuote)
getQuote()