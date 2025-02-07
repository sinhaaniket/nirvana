import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const genrSong = (value) => {
    setSongs(value);
  };

  const play = (link) => {
    setCurrentSong(link);
    new Audio(link).play();
  };

  return (
    <>
      <SearchBar genrSong={genrSong} />
      {songs.length === 0 ? (
        <div>search for a song</div>
      ) : (
        <div className="flex flex-col">
          <div className="mb-3 w-3/4 items-center justify-center">
            <p className="font-bold text-xl text-left pb-5">Top Result</p>
            <div className="flex justify-between items-center p-6 rounded-xl bg-gradient-to-t from-stone-900 to-stone-600">
              <div className="flex ">
                <img
                  src={songs[0].image[2].link}
                  className="w-28 h-28 hover:cursor-pointer"
                  alt="img"
                  onClick={() => play(songs[0].downloadUrl[4].link)}
                />
                <div className="flex flex-col ml-10 justify-center text-left">
                  <span className="font-bold text-2xl">{songs[0].name}</span>
                  <div className="text-center font-thin">
                    {songs[0].primaryArtists}
                  </div>
                </div>
              </div>
              <button className="mr-80 bg-white text-black h-fit p-3 rounded-3xl px-6 font-bold" onClick={() => play(songs[0].downloadUrl[4].link)}>Play</button>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-left pb-5">Songs</span>
            {songs.map((result, index) => (
              <div className="flex justify-start m-1" key={index}>
                <img
                  src={result.image[2].link}
                  className="w-16 h-16 hover:cursor-pointer"
                  alt="img"
                  onClick={() => play(result.downloadUrl[4].link)}
                />
                <div className="flex flex-col ml-10 justify-center text-left">
                  <span className="font-bold">{result.name}</span>
                  <div className="text-center font-thin">
                    {result.primaryArtists}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
