const https = require("https");
const fs = require("fs");
const options = {
    hostname: 'www.baidu.com',
    // port: 443,
    path: '/',
    method: 'GET',
    // key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    // cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
    agent: false
};

const req = https.get(options, (res) => {
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
