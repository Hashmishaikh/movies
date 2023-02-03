import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleMovie = () => {
    const { id } = useParams();
    const [singleDate, setSingelData] = useState({});
    const [casting, setCasting] = useState([])
    const getDetails = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        console.log('data', data.data)
        setSingelData(data?.data)
    }
    const getCasted = async () => {
        // for casting
        const cast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        console.log('cast', cast?.data?.cast)
        setCasting(cast?.data?.cast)
    }
    useEffect(() => {
        getDetails();
        getCasted();
       
    },
     // eslint-disable-next-line
    [])
    return (
        <div className='container' style={{ color: "#fff" }}>
            <br />
            <div className="card mb-3 bg-dark">
                <div className="row g-0">

                    <div className="col-md-7">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-2' style={{ display: "flex" }}>
                                    <img style={{ width: "100px", height: "133px", borderRadius: "10px" }} src={`https://image.tmdb.org/t/p/w500${singleDate?.poster_path}`} alt="images"/>
                                </div>
                                <div className='col-8' style={{ textAlign: "start" }}>
                                    <h5>{singleDate?.title}</h5>
                                    <p style={{ color: "rgb(111 122 143)" }}>Rating:{singleDate?.vote_average}</p>
                                    <p style={{ color: "rgb(111 122 143)" }}><span className="badge bg-secondary">{singleDate?.runtime}</span> {singleDate?.genres?.map((res) => `${res.name},`)}</p>
                                    <h6 style={{ fontSize: "12px" }}>Release Date: {singleDate?.release_date}</h6>
                                </div>

                            </div><br />
                            <div style={{ textAlign: "start" }}>
                                <h5 className="card-title">Overview</h5>
                                <h6 className="card-text" style={{ fontSize: "12px" }}>{singleDate?.overview}</h6>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5" >
                        <img style={{ float: "right" }} src={`https://image.tmdb.org/t/p/w500${singleDate.backdrop_path}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
            <div className='row'>
                {casting?.map((res) => (<div style={{ textDecoration: "none" }} key={res?.id} className='col-sm-12 col-md-6 col-lg-2'>
                    <div className="card" style={{ width: "11rem", backgroundColor: "rgb(32, 32, 32)" }}>
                        {res?.profile_path === null ? <img src="/gol.png" className="card-img-top" alt="..." /> : <img src={`https://image.tmdb.org/t/p/w500${res.profile_path}`} className="card-img-top" alt="..." />}
                        <div className="card-body" style={{ color: "#fff", textAlign: "start" }}>
                            <p className="card-text">Rating:{res?.name}</p>
                            <p className="card-text">{res?.character}</p>

                        </div>
                    </div><br />
                </div>))}
            </div>
        </div>
    )
}

export default SingleMovie