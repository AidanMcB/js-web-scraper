const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const PORT = 8080;
const URL = 'https://www.theguardian.com/us';
axios(URL)
.then(response => {
    const html = response.data;
    // console.log(html);
    const $ = cheerio.load(html);
    const articles = [];
    $('.fc-item__container', html).each( function () {  // cannot be function expression ?
        const title = $(this).text()
        const urlFind = $(this).find('a').attr('href')
        articles.push({
            title, urlFind
        })
    })

    console.log(articles)
})
.catch(error => console.log(error))

app.listen(PORT, () => {
    console.log(`server running port defined as ${PORT}`)
})