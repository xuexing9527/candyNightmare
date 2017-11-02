var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

// nightmare
//     .goto('https://baidu.com')
//     .type('#su', '15313350626')
//     .click('#su')
//     .wait('#zero_click_wrapper .c-info__title a')
//     .evaluate(function () {
//         return document.querySelector('#zero_click_wrapper .c-info__title a').href;
//     })
//     .end()
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.error('Search failed:', error);
//     });



// nightmare
//     .goto("https://baidu.com")
//     // .end(() => document.getElementsByTagName("body")[0])
//     .end(() => "x")
//     //prints "some value"
//     .then((value) => console.log(value));


nightmare.goto('https://baidu.com')
    .type('#su', '15313350626')
    .click('#su')
    .wait('#zero_click_wrapper .c-info__title a')
    .evaluate(function(){
        return document.getElementsByTagName("html")[0].innerHTML;
    })
    .end()
    .then(function(html){
        console.log(html);
    })


