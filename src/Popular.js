import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios'
import CardMapping from './CardMapping';
import ReactPaginate from 'react-paginate';
import './App.css'

const Popular = () => {
    const [getMovie, setGetMovie] = useState([]);
    // logic for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const [pagePerUsers, setPagePerUsers] = useState(5);

    const usersPerPage = parseInt(pagePerUsers);
    const pageVisited = pageNumber * usersPerPage

    const pageDowns = () => {
        ref?.current?.scrollIntoView({ behavior: "smooth" })
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    // logic end here

    // we have use useRer so that we can't scroll to up
    const ref = useRef(null)

    const apidata = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`)
        console.log('data', data?.data?.results)
        setGetMovie(data?.data?.results)
    }



    console.log('ma', getMovie.length)

    useEffect(() => {
        apidata();
    }, [])
    return (
        <div>
            <div><Navbar /></div><br />
            <div className='container'>
                <div className="row">
                    {getMovie?.slice(pageVisited, pageVisited + usersPerPage).map((res) => (
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
                <div ref={ref}>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        // this is the total counting of the page which we have divided by 5 written in state usersPerPage whic is 5
                        pageCount={
                            Math.ceil(
                                getMovie?.length / usersPerPage
                            )
                        }
                        // this are the function logic for pagination
                        onClick={pageDowns}
                        onPageChange={changePage}
                        // this are this classes of bootstrap5 for pagination
                        containerClassName={
                            "pagination justify-content-center"
                        }
                        pageClassName={"page-item page-link"}
                        activeClassName={"page-item active page-active"}
                        previousLinkClassName={"page-item page-link"}
                        nextLinkClassName={"page-item page-link"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Popular;