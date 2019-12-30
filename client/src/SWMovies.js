import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SWMovies()
{
    const [number, setnumber] = useState(1);
    const [movie, setMovie] = useState("");
    useEffect(() => {
        async function getData()
        {
            let response = await axios.get(`https://swapi.co/api/films/${number}`);
            console.log(response.data);
            setMovie(response.data);
        }

        getData();

    }, [number])
    return(
        <div>
            <h2>Movie name: {movie.title}</h2>
            <p>{movie.opening_crawl}</p>
            <select name="" id="" value = {number} onChange = {(e) => setnumber(e.target.value)} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default SWMovies;