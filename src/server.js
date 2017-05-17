import express from 'express';
import path from 'path';
import Twitter from 'twitter';
import http from 'http';

const app = express();

var client = new Twitter({
});


var tweet;

var stream = client.stream('statuses/filter', {track: 'Hi'}, function(stream) {
  stream.on('data', function(response) {
    tweet = response;
  });

  stream.on('error', function(error) {
    throw error;
  });
});

app.get('/stream',(req,res)=>{
  res.send(tweet);
});

app.use(express.static('src/public'));

app.get('/',(req,res)=>{
  res.sendFile('index.html');
});

app.listen(3000,()=>console.log("listening on port 3000"));
