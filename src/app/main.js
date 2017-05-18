import React from 'react';

import {observer} from 'mobx-react';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';


const Main = observer(({twitterStore}) => {
  return (
    <div>
      <img src={twitterStore.getPic} />
      <p>Hello and: {twitterStore.getTweet.text}</p>

    </div>
  )
});

export default Main;
