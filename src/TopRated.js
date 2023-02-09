import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardMapping from './CardMapping';
import Navbar from './Navbar';

const TopRated = () => {
    const [rateds, setRateds] = useState([]);

    const searchMovie = async (e, gettingSearch) => {
        e.preventDefault();
        console.log('e.target.value', gettingSearch)
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${gettingSearch}`)
        console.log('data', data)
        setRateds(data?.data?.results)
    }

    const topratedapi = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`);
        console.log('data', data?.data?.results)
        setRateds(data?.data?.results)
    }
    useEffect(() => {
        topratedapi();
    }, [])

    return (
        <div>
            <div><Navbar searchMovie={searchMovie} /></div>
            <div className='container'>
                <div className='row'>
                    {rateds?.map((res) => (
                        <CardMapping backdrop_path={res.backdrop_path} title={res.title} vote_average={res.vote_average} id={res.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopRated;