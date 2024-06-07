const express = require('express');
const port = process.env.PORT || 5000; //this a port number


const app = express(); //this is our app or instance of express



// api middlewares

app.use(express.json()); // this is to accept data in json  format

app.use(express.urlencoded()); //this is basically to decode the data send through html form 

app.use(express.static('public')); //this to serve our public folder as a static folder

// api routes 

app.get('/form',(req,res)=>{


    res.sendFile(__dirname + '/public/index.html');

});


app.post('/form', (req,res)=>{
  console.log(req.body); //the data we get is in the body of request

  res.sendFile(__dirname + '/public/thank.html');
});




// this is basically to listen on port


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
});