const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Test</title>
            <style>
                body {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                }
                .box {
                    background: rgba(0,0,0,0.3);
                    padding: 30px;
                    border-radius: 15px;
                    display: inline-block;
                }
                h1 {
                    color: #00ffcc;
                }
                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>🚀 Jenkins Auto Deploy Working</h1>
                <p>i want fix Test 3 it are not again check ╤φ+ΦÅ🔥</p>
                <p>Status: <span style="color:yellow;">SUCCESS</span></p>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});