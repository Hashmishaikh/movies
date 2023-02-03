import React from 'react'
import { Link } from 'react-router-dom'

const CardMapping = ({ backdrop_path, title, vote_average, id }) => {
    return (
        <Link style={{ textDecoration: "none" }} key={id} to={`/popular/${id}`} className='col-sm-12 col-md-6 col-lg-3'>
            <div className="card" style={{ width: "16rem", backgroundColor: "rgb(32, 32, 32)" }}>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} className="card-img-top" alt="..." />
                <div className="card-body" style={{ color: "#fff" }}>
                    <p className="card-text">{title}</p>
                    <p className="card-text">Rating:{vote_average}</p>
                </div>
            </div><br />
        </Link>
    )
}

export default CardMapping