const quotes = require("./quotes");

const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)]["quote"];

module.exports = getQuote;