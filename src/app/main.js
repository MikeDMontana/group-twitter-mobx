import React from 'react';

import {observer} from 'mobx-react';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';


const Main = observer(({twitterStore}) => {
  return (
    <div style={{
           'filter': 'blur(50)',
           'width': 500,
           'fontSize': 30,
           'padding': 20,
           'fontFamily': 'HelveticaNeue-UltraLight',
           'backgroundImage': `url(${twitterStore.getUserBackground})`,
         }}
      >
      <img src={twitterStore.getPic} />
      <p>Hello and: {twitterStore.getTweet.text}</p>
      <p>{twitterStore.getLocation}</p>
      <p>{twitterStore.getUserBackground}</p>

    </div>
  )

});

export default Main;
