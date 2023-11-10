import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}


function Tweet(){
  const currentTime = new Date().toString();

  //this returns JSX
  return(
    <div classname="tweet">
      <img src="http://twitter.com/some-avatar.png" classname="tweet_avatar"/>
      <div classname="tweet_body">
        <p>I am a good programmer.</p>
        <p>{Math.floor(Math.random()*100)}retweets</p>
        <p>{currentTime}</p>
      </div>
    </div>
  )
}


