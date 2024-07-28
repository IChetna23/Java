import { createServer } from 'http';
import { readFileSync } from 'fs';
const text = readFileSync('txt.html');

const server = createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.end(text);
})

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

