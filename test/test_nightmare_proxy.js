'use strict'
var Nightmare = require('nightmare');
var nightmare = Nightmare({
    switches: {
        //'proxy-server': 'my_proxy_server.example.com:8080' // set the proxy server here ...
        'proxy-server': '113.226.146.239:8080' // set the proxy server here ...
    },
    show: true
});

nightmare
    .goto('https://www.reg007.com/account/signin')
    .type('#signin_email','15313350626')
    .type('#signin_password','work1234')
    .click('#signin_form [type="submit"]')
    .wait(1000)
    .goto('https://www.reg007.com')
    .type('#e_m', '')
    .type('#e_m', 15313350626)
    .click("#tsb")
    .wait(20000)
    .evaluate(function () {
        return document.getElementsByTagName("html")[0].innerHTML;
    })
    .then(function (html) {
        const cheerio = require('cheerio');
        var $ = cheerio.load(html);
        console.log($(this).find("li.site h4").text());
    })
    .catch(function (error) {
        console.error('Search failed go_nightmare:', error);
    });
