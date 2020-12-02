// Use the Futurama Quote API http://futuramaapi.herokuapp.com to return a single quote with the format

const request = require('superagent');

const fetchQuote = async() => {
    const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/1');
    const results = body[0];

    const quote = 
        {
            character: results.character,
            quote: results.quote,
            image: results.image
        };

        return quote;
    
}

module.exports= {
    fetchQuote
}