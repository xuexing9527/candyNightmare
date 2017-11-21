const http = require("http");
var options = {
    hostname: 'www.sogou.com',
    port: 80,
    data: '/web?query=15313350626',
    method: 'get',
    headers: {
        'Content-Type': 'text/html; charset=utf-8',
    }
}

var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.')
    })
});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.end();
