import {observable, computed, action} from 'mobx';
import { get, post } from 'axios';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';


export class TwitterStore {
    @observable tweet;
    @observable profilePic;
    @observable randomNumTwo;
    @observable userLocation;
    @observable userBackground;

  constructor() {
    this.tweet = "No tweets";
    this.profilePic = "";
    this.stream();
    this.randomNumTwo = 0;
    this.userLocation = "";
    this.userBackground = "";
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
        this.profilePic = res.data.user.profile_image_url;
        this.userLocation = res.data.user.location;
        if (res.data.user.profile_background_image_url == ""){
          this.userBackground = "https://cdn.pixabay.com/photo/2014/11/08/03/29/hot-air-balloon-521542_960_720.jpg";
        } else {
          this.userBackground = res.data.user.profile_background_image_url;
        }
        console.log(this.userBackground);
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
    return this.profilePic;
  }

  @computed get getLocation() {
    return this.userLocation;
  }

  @computed get getUserBackground() {
    return this.userBackground;
  }

}
