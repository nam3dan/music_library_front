import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  
  const [songs, setSongs] =useState([]);
  const [songFilter, setFilter] =useState('');
  useEffect( () =>{
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
      setSongs(response.data);
  };

  async function filterSongs(){
    if (songFilter === ''){
      getAllSongs();
    }else{
      let filteredSongs = songs.filter(el => el.artist.toLowerCase().includes(songFilter) || el.title.toLowerCase().includes(songFilter) || el.album.toLowerCase().includes(songFilter) || el.release_date.toLowerCase().includes(songFilter) || el.genre.toLowerCase().includes(songFilter))
      setSongs(filteredSongs)
    }
  };
  
  return (
    <div className="App">
      <div>
      <button onClick={() => filterSongs()}>Filter Songs</button>
      <button onClick={() => getAllSongs()}>All Songs</button>
      </div>
      <div>
        <SearchBar onChange={(value) => setFilter(value.toLowerCase())} />
      </div>
      <div>
      <MusicTable songs={songs}/>
      </div>
    </div>
  );
}

export default App;
