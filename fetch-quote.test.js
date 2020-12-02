const { fetchQuote } = require('./fetch-quote');

describe('fetchQuotes', () => {
    it('returns quote', async() => {
        const quote = {
            character: "URL",
            quote: "You call that an antenna?",
            image: "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904048/Url.jpg"
            }

        const fetchedQuote = await fetchQuote();
        
        expect(fetchedQuote).toEqual({
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
        })
    })

}) 