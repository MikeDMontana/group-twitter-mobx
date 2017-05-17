import React from 'react';

import {observer} from 'mobx-react';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';


const Main = observer(({twitterStore}) => {
  return (
    <div>
      Hello and: {twitterStore.getTweet.text}
      <Circle r={twitterStore.rando} fill={{color:'red'}} stroke={{color:'#E65243'}} strokeWidth={0} />

    </div>
  )
});

export default Main;
