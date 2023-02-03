import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios'
import CardMapping from './CardMapping';

const Popular = () => {
    const [getMovie, setGetMovie] = useState([]);
    const apidata = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`)
        console.log('data', data?.data?.results)
        setGetMovie(data?.data?.results)
    }

    useEffect(() => {
        apidata();
    }, [])
    return (
        <div>
            <div><Navbar /></div><br />
            <div className='container'>
                <div className="row">
                    {getMovie.map((res) => (
                        //         <Link style={{textDecoration:"none"}} key={res.id} to={`/popular/${res.id}`} className='col-sm-12 col-md-6 col-lg-3'>
                        //         <div className="card" style={{width: "16rem",backgroundColor:"rgb(32, 32, 32)"}}>
                        //   <img src={`https://image.tmdb.org/t/p/w500${res.backdrop_path}`} className="card-img-top" alt="..."/>
                        //   <div className="card-body" style={{color:"#fff"}}>
                        //     <p className="card-text">{res?.title}</p>
                        //     <p className="card-text">Rating:{res?.vote_average}</p>
                        //   </div>
                        // </div><br/>
                        // </Link>
                        <CardMapping backdrop_path={res.backdrop_path} title={res.title} vote_average={res.vote_average} id={res.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular;