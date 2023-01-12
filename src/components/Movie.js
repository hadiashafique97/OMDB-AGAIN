import React from 'react'

function Movie({element}) {
    return (
        <div className="eachMovie">
            <h1>{element.Title}</h1>
            <h2>{element.Genre}</h2>
            <img src={element.Poster} alt={element.Title} />
            <h2>{element.Year}</h2>

        </div>
    )
}

export default Movie