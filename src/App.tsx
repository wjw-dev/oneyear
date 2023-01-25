import { useState, useEffect } from 'react'
import './App.scss'

import { State, StateMachine } from './components/State'
import { AnimatedText } from './components/AnimatedText'

import jan from './photos/01January.jpg'
import feb from './photos/02Febuary.jpg'
import apr from './photos/04April.jpg'
import may from './photos/05May.jpg'
import jun from './photos/06June.jpg'
import jul from './photos/07July.jpg'
import aug from './photos/08August.jpg'
import sep from './photos/09September.jpg'
import oct from './photos/10October.jpg'
import nov from './photos/11November.jpg'
import dec from './photos/12December.jpg'
import mySyb from './photos/13MySyb.jpg'

function App() {
  
  const [machine, setMachine] = useState(new StateMachine);
  const [text, setText] = useState('test');
  const [pic, setPic] = useState('');
  const [started, setStarted] = useState(false);

  function Prev()
  {
    machine.prev();
    let newState = machine.getState();
    setText(newState.text);
    setPic(newState.picture);
  }

  function Next()
  {
    if(machine.hasNext()){
      machine.next();
    }
    else
    {
      machine.iterator = 0;
    }
    let newState = machine.getState();
      setText(newState.text);
      setPic(newState.picture);
  }

  useEffect(()=>{

    Setup(machine)
    let newState = machine.getState();
    setText(newState.text);
    setPic(newState.picture);

  },[])

  if(started)
  return (
    <div>
      <div className="App">
        <div className="FlexLayout">
          <div className="Visual">
            {pic[0] == '/' 
            ? 
            // <AnimatedText html={<img className="Pic" src={pic} />} animation={"fade 1s"} time={1000}/>
            <img className="Pic" src={pic} />
            : 
            <AnimatedText html={<p style={{animation: "miniMove 3s infinite"}}>{pic}</p>} animation={"fade 1s"} time={1000}/>
            }
          </div>
          <AnimatedText html={<p className='Txt'>{text}</p>} animation={"fade 1s"} time={1000}/>
        </div>
        <div className="ButtonHolder">
          <button onClick={Prev}>PRV</button>
          <button onClick={Next}>NXT</button>
        </div>
      </div>
    </div>
  )
  else
  {
    return (
      <div>
        <p style={{animation: "stretch 1.5s infinite"}} onClick={()=>{setStarted(true)}}>❤️</p>
      </div>
      )
  }
}

export default App




export function Setup(machine: StateMachine)
{
    machine.addState(new State('💞', "Hi Sybil, my baby!"))
    machine.addState(new State('😘', "I love you!"))
    machine.addState(new State('💫', "Happy 1 year since I met you day!!"))
    machine.addState(new State('🌟', "AKA our 1 year (unofficial) anniversary!"))
    machine.addState(new State('🗓️', "This year,"))
    machine.addState(new State('❤️‍🔥', "You have made me feel so lucky every single day!"))
    machine.addState(new State('😄', "Your pretty smile brightens my life (even if you don't like it as much as I do);"))
    machine.addState(new State('👀', "Your gorgeous brown eyes make me lose myself in the best ways;"))
    machine.addState(new State('🤗', "Your care makes me feel like the most loved person on the planet, always;"))
    machine.addState(new State('🧑‍🎓', "Your smarts make me realise how silly I am in comparison;"))
    machine.addState(new State('🎨', "Your creativity, be it drawing, modelling, or writing, leaves me in awe;"))
    machine.addState(new State('😆', "Your humor and laugh makes me feel better every time I hear it, even on my worst days;"))
    machine.addState(new State('💓', "And I have loved every moment with you, more than I can describe with words!"))
    machine.addState(new State('🌐', "We've had too many good times to put on one website,"))
    machine.addState(new State('🫶', "But I'd like to share some of my favourite moments with you!"))

    machine.addState(new State(jan, 
        `January (the first time we met): I don't know how you managed to take this without me looking.
        I must have been buying lottery tickets after realising how lucky I just got. I was so tired,
        but it was so worth it (and you know how much I value my sleep)`))

    machine.addState(new State(feb,
        `Feburary (Valentines Day): Somehow, I got you to agree to go outside with me in the
        peak of my bowl cut, and you looked stunning. Although I tried to get us to eat at a complete
        ghost town to start with, I'm glad that I got to eat with you at the Opera Bar, even if
        the steak was average. I couldn't ask for a better valentine!`))

    machine.addState(new State('💌',
        `March: This was our first month apart! Even though we couldnt be together, I loved still being able
        to talk to you on facetime every day, and get to know more and more about my beautiful baby! `))

    machine.addState(new State(apr,
        `April (moments before disaster): Although one of us threw up and the other could barely breathe, this night 
        will still always be special to me because it's the one where I finally asked you to be mine. Against your better
        judgement, you made me the happiest man on the planet!`))

    machine.addState(new State(may,
        `May: The end of the first trip back! Also the first instance of you stealing my shirt, (as well as stealing my
        polaroids)! Despite this theft, my feelings for you only grew! I guess you could say you stole my heart too 😉`))
    
    machine.addState(new State(jun,
        `June: I got the best birthday present ever (seeing you)! I also got my favourite mug of all time, and also 
        poor digestion from eating the h̶o̶t̶ ̶p̶o̶t̶ malatang that was too spicy for me. I realised how real we were when you
        came all the way to Adelaide for me, and we made it clear with our first \'I love you\'s`))

    machine.addState(new State(jul,`July: Our strathfield trip! Although it started off a little rough (and ended a 
        little rough too!) I had a lot of fun exploring all the different parts of Sydney with you! I think this was
        also our first 海鸿达 experience, which was obvously a big step in our relationship too!`))

    machine.addState(new State(aug,`August (Butter): Our first over-a-week trip! I had so much fun teaching butter
    silly tricks with you, even if she was a complete nusience when I was trying to sleep. We also had a great time
    acting like we discovered fire when we finally got the hot water working at the other house too!`))

    machine.addState(new State(sep,`September (Birthday!): My baby's birthday! I had a great time getting beaten
    by you in go-carts, meeting your family (especially the part where we had a feast), and finding questionable
    door ornamets at the Airbnb. Seeing you dressed up as a princess with a wand at the observatory made my day,
    even if the Uber driver made us question reality.`))

    machine.addState(new State(oct,`October: Our official 6 months! I had a blast organising finally buying you
    flowers behind your back, aided and abetted by your roomates. It was good payback after how you tricked me
    on your birthday! I couldn't believe it was already 6 months (it still feels like yesterday even now), 
    but it was a good month to reflect on how incredibly blessed I was for having you in my life!`))

    machine.addState(new State(nov,`November: although we went through a very rough patch when I wasted your last
    film on a completely out of focus, poorly framed, arguably unremarkable shot, I think our love only grew stronger
    through that this month. The rooftop 海鸿达 was also something I loved doing with you (of course), and I think we're
    due for another one of those soon!`))

    machine.addState(new State(dec,`December (Pizza?): This was the only photo I had from the december trip, which makes
    a bit of sense considering it was only one day. Even though I nearly missed my plane, I had a lot of fun with you while
    doing it, and I realised how much I appreciate your ability to run up to random airport staff with no hesitation. This
    was also the last trip before I come up for real!`))

    machine.addState(new State('🧗', `I love you so much my baby! I can't wait to be living life with you, and I am so excited
    to go into this year with you and share so many new escapades!`))

    machine.addState(new State('😘', "I love you so much my Baby!"))

    machine.addState(new State(mySyb, "My Sybil!"))

    for(var i = 0; i < 5; i++)
    {
        var okString = 'ok ';
        var tooString = 'too ';
        for(var k = 0; k < i; k++)
        {
            okString += 'ok '
            tooString += 'too '
        }

        okString+= 'I\'ll stop'

        machine.addState(new State('💖', okString))

        tooString = 'I just love you ' + tooString + ' much!'

        machine.addState(new State('🫰', tooString))

    }


    machine.addState(new State('😙', `I can't do it, I love you so much I need to show you it all again!`))


}