import React from 'react';

const MovieCard  = (props) => {
    const { Title, Year, Type, Poster } = props;
    return (
        <div className="parent">
            <img id="card-img" alt="" src={Poster === 'N/A' ? "https://media.gettyimages.com/photos/actor-charlton-heston-as-moses-with-arms-flung-wide-appearing-in-picture-id53374659" : Poster} />
            <h2 id="card-title">{Title}</h2>
            <div id="card-date">{Year}</div>
            <span id="card-type">{Type}</span>
        </div>
    )
}


export default MovieCard;