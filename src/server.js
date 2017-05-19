import express from 'express';
import path from 'path';
import Twitter from 'twitter';
import http from 'http';

const app = express();

var client = new Twitter({
  consumer_key: 'YjW5RoIBgBmJ3SIZj150XRBr3',
  consumer_secret: 'i1v71mTIEGBU0AIKmuqKtNawG54OVNGjKgsEnsdFNQar1f0Yt3',
  access_token_key: '893672846-pzCDEHvYGThN2lnFQJjHB4kFZO1bhIVkOqp9n1Y6',
  access_token_secret: 'ZcBR2OtEZuugQR8SY3LczI20iWvrY0nmGBZYq5dOyfVVM'
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
