import { useState } from 'react';
import './App.css';

function App() {
  const keys = {
    "Q": {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    "W": {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    "E": {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    "A": {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    "S": {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    "D": {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    "Z": {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    "X": {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    "C": {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  };
  const keyCodes = Object.values(keys).map(el => {
    return el.keyCode;
  })

  const [display, setDisplay] = useState("Display");
  const [volume, setVolume] = useState(20);

  const handleClick = (event) => {
    const element = keys[event.target.id];
    setDisplay(element.id);
    const audio = event.target.children[0];
    audio.volume = volume / 100;
    if (!audio.paused) {
      audio.currentTime = 0;
    }
    audio.play();
  }

  window.onkeydown = (event) => {
    let index = keyCodes.indexOf(event.keyCode);
    index = index !== -1 ? index : keyCodes.indexOf(event.keyCode - 32);
    if (index !== -1) {
      const element = document.getElementById(String.fromCharCode(event.keyCode).toUpperCase());
      element.classList.add("click");
      element.click();
    }
  }

  window.onkeyup = (event) => {
    let index = keyCodes.indexOf(event.keyCode);
    index = index !== -1 ? index : keyCodes.indexOf(event.keyCode - 32);
    if (index !== -1) {
      const element = document.getElementById(String.fromCharCode(event.keyCode).toUpperCase());
      element.classList.remove("click");
    }
  }

  return (
    <main className="main">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="keypad">
          {Object.values(keys).map(el => {
            return <div className="drum-pad" key={el.keyTrigger} onClick={handleClick} id={el.keyTrigger}>
              <audio className='clip'
                id={el.keyTrigger} src={el.url}></audio>{el.keyTrigger}</div>
          })}
        </div>
        <input type="range" id="volume" value={volume}
          min="10"
          onChange={(e) => setVolume(e.target.value)} />
      </div>
    </main>
  );
}

export default App;
