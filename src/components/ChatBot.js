import React, {useEffect} from 'react';
import ChatBot from "react-simple-chatbot";
import Spinner from "./Spinner";
import {Segment} from "semantic-ui-react";
const one = 1;
const Chatter = ({results, processing}) => {
  if (processing && results) {
    console.log("Hello")
  }
  if (!processing && results && results.length > 0) {
    
  const steps = [

    {

      id: "Greet",
      message: "Hello, what's your name?",
      trigger: "waiting1",

    },
    {

      id: "waiting1",
      user: true,
      trigger: "Name",

    },

    {

      id: "Name",
      message: "Hi {previousValue}, if you could look into the camera as you are right now, that would be great! let me know when you are done.",
      trigger: "statuses",

    },

    {

      id: "statuses",
      options: [
        {
          value: "I'm looking into the camera",
          label: "Finished",
          trigger: "Finished",
        },
      ],

    },
    {

      id: "Finished",
      component: (
        <>
        {results.map((result, i) => (
            <div className="results__wrapper" key={i}>
              <div style={{ width: '300px' }}>
                <p>
                  You look {result.expressions.asSortedArray()[0].expression}
                </p>
              </div>
            </div>
          ))}
          </>
      ),
      trigger:"confirmation",
    }, 
    {
        id:"confirmation", 
        message: "Just for confirmation, please select the emotion that I had detected.",
        trigger: "Question1",
    },
    {
        id:"Question1", 
        options: [
            {value:"surprised", label: "Surprised", trigger: "SQuestion"},
            {value:"angry", label: "Angry", trigger: "AQuestion"},
            {value:"sad", label: "Sad", trigger: "S2Question"},
            {value:"disgusted", label: "Disgusted", trigger: "DQuestion"},
            {value:"fearful", label: "Fearful", trigger: "FQuestion"},
            {value:"happy", label: "Happy", trigger: "HQuestion"},

        ],
    }, 
    {
        id:"SQuestion", 
        message: "Really? What happened so that you became surprised?", 
        trigger: "swait",
    },
    {
        id: 'swait',
        user: true,
        trigger: 'SFollow',
      },
    {
        id: "SFollow", 
        message: "That's very interesting! That's not something that happens very often, right?",
        end:true,
    },
    {
        id:"AQuestion", 
        message: "That's not good. What made you so angry?", 
        trigger: "await",
    },
    {
        id: 'await',
        user: true,
        trigger: 'AFollow',
      },
    {
        id: "AFollow", 
        message: "That's not good at all! I hope that doesn't happen to you again.",
        end: true,
    },
    {
        id:"S2Question", 
        message: "I'm so sorry about that. If you don't mind me asking, what happened?", 
        trigger: "s2wait",
    },
    {
        id: 's2wait',
        user: true,
        trigger: 'S2Follow',
      },
    {
        id: "S2Follow", 
        message: "Wow, I'm sorry you had to go through that. Maybe if you try speaking to somebody about it, it'll get better. ",
        end:true,
    },
    {
        id:"DQuestion", 
        message: "Being disgusted almost always is bad. What happened?", 
        trigger: "dwait",
    },
    {
        id: 'dwait',
        user: true,
        trigger: 'DFollow',
      },
    {
        id: "DFollow", 
        message: "Yuck! Hope that doesn't happen again to you again.",
        end:true,
    },
    {
        id:"FQuestion", 
        message: "Being scared is always hard, but you can make it through. If you don't mind me asking, what happened?", 
        trigger: "fwait",
    },
    {
        id: 'fwait',
        user: true,
        trigger: 'FFollow',
    },
    {
        id: "FFollow", 
        message: "Don't worry, you'll be fine. The only thing we have to fear, is fear itself.",
        end:true,
    },
    {
        id:"HQuestion", 
        message: "That's great! What happened that made you so happy?", 
        trigger: "hwait",
    },
    {
        id: 'hwait',
        user: true,
        trigger: 'HFollow',
      },
    {
        id: "HFollow", 
        message: "Always a pleasure to hear someone being happy. We need more of joy, probably more than we've ever needed it. Glad to hear somebody is happy.",
        end:true,
    },
  ];
  return (
    <>
      <Segment floated="right">
        <div className="h-500">
        <ChatBot steps={steps}/>
        </div>
      </Segment>
    </>
  );
}
else {
    return (
      <Spinner />
    )
}
}
export default Chatter;