import React, { useState } from 'react';

const MusicTable = (props) => {
    return (
        <table class="table table-striped">
            <thead>
                <th>Song #</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release</th>
                <th>Genre</th>
            </thead>
        <tbody>
        {props.songs.map((song, index) =>{
            return(
                <tr key ={index}>
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
            </tr>
            )
        })}
        </tbody>
    </table>
    );
}
 
export default MusicTable;