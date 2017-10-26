const https = require("https");
const http = require("http");
const fs = require("fs");
const options = {
    // url: 'https://www.baidu.com',
    url: 'http://www.baidu.com/s?wd=386857541',
    // port: 443,
    path: '/',
    method: 'GET',
    'user-agent': 'curl/7.22.0'
    // key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    // cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
    ,agent: false
};

// const req = https.get(options.url, (res) => {
const req = http.get(options.url, (res) => {
    "use strict";

    var html = "";
    res
        .on('data', (chunk) => {
            html += chunk;
        })
        .on('end', () => {

            console.log(html);

        });
});
