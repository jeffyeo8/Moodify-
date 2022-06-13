// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Double Take",
      artist: "Dhruv",
      img_src: "./images/beach.jpeg",
      src: "./music/double take.mp3"
    },
    {
      title: "Serotonin",
      artist: "Tom Walker",
      img_src:"./images/pill.jpg",
      src: "./music/serotonin.mp3"
    },
    {
      title: "On & On",
      artist: "Cartoon",
      img_src:"./images/pill.jpg",
      src: "./music/On & On.mp3"
    },
    {
      title: "Birthday Cake",
      artist: "Dylan Conrique",
      img_src:"./images/pill.jpg",
      src: "./music/Birthday Cake.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
