import {observable, computed, action} from 'mobx';
import { get, post } from 'axios';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';


export class TwitterStore {
    @observable tweet;
    @observable randomNumTwo;
    @observable randomColor;

  constructor() {
    this.tweet = "No tweets";
    this.stream();
    this.randomNumTwo = 0;
    this.randomColor = 0;
  }


  @action stream() {
    /*
      Here, I am calling to my /stream route, defined within server.js. This is essentially
      checking the constant stream, once every second, and updating our prop accordingly.
    */
    setInterval(()=> {
      /*
  Get is a method within axios, which greatly simplifies our Ajax call. Essentially, I'm
  getting the current tweet, and updating my observable to match.
  */
      get('stream').then((res) => {
        this.tweet = res.data;
        this.randomNumTwo = Math.random() * (500 - 10) + 10;
        this.randomColor = Math.random() * (255 - 0) + 0;
      })
    },
    1000
    );
  }

  // @computed get Rando() {
  //   return this.randomNumTwo;
  // }

  @computed get getTweet() {
    return this.tweet;
  }

@computed get getPic() {
  retrun this.tweet.profilePic;
}


  @computed get rando() {
    return this.randomNumTwo;
  }

  @computed get randoColor() {
    return this.randomColor;
  }
}
