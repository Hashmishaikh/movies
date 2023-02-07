import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [gettingSearch,setGettingSearch] = useState("")
    const searchMovie = async (e) => {
        e.preventDefault();
        console.log('e.target.value', gettingSearch)
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${gettingSearch}`)
        console.log('data', data)
    }
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MovieDb</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Popular</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/top-rated">TopRated</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/upcoming">UpComing</Link>
                        </li>

                    </ul>
                    <form className="d-flex" onSubmit={(e) => searchMovie(e)}>
                        <input className="form-control me-2" type="search" value={gettingSearch} onChange={(e) => setGettingSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar