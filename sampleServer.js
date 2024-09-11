// down to basics, to create a node server also to display a string
// var http = require('http');

// http.createServer((req,res) => {
//     res.write('helllo world')
//     res.end()
// }).listen(8800)


// advanced version that is over the top by including the status code.

// var http = require('http')

// http.createServer((req,res) => {
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write("hello world")
//     res.end()
// }).listen(2500)

// much more advanced, means the server needs to return the response as webpage rather than simple text, so now that is going to achieve.

// var http = require('http')
// var fs = require('fs')

// http.createServer((req,res) => {
//     fs.readFile('reg.html',(err,data) => {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(2700)

//Routing to different pages according to the request from the clients
var http = require('http')
var fs = require('fs')
var url=require('url')

http.createServer((req,res) => {
    var q = url.parse(req.url,true)

    if (q.pathname === '/') {
        fs.readFile('login.html', (err,data) => {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })
    } else if (q.pathname === '/signup') {
        fs.readFile('reg.html',(err,data) => {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })
    } else if (q.pathname === '/signup_form') {
        console.log(q.query)
        console.log(q.query.place)
        res.end()
    }
     else {
        res.write('error')
        res.end()
    }
}).listen(8000,() => console.log("server running..."))
