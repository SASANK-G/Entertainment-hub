import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGenres from '../../../Hooks/useGenre';
import Genres from '../../Genres';
import SingleContent from '../../SingleContent/SingleContent';
import CustomPagination from '../Pagination/CustomPagination';


export const Movies = () => {
  const [Page, setPage] = useState(1);
  const [content, setcontent] = useState([]);
  const [numOfPages, setnumOfPages] = useState();
  const [selectedGenres, setselectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL =useGenres(selectedGenres)




  const fetchMovies =async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${Page}&with_genres=${genreforURL}`);

    setcontent(data.results);
    setnumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
   fetchMovies();
   //eslint-disable-next-line
  }, [Page, genreforURL]);


  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie" selectedGenres={selectedGenres} genres={genres} setGenres={setGenres} setSelectedGenres={setselectedGenres}
        setPage={setPage}
      />
      <div className="trending">
        {
          content && content.map((c)=>
          <SingleContent 
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type="Movie"
          vote_average={c.vote_average}
          />)
        }
      </div>
        {numOfPages>1 &&(
          <CustomPagination setPage = {setPage} numOfPages={numOfPages}/>
        )}
        
    </div>
  )
}

export default Movies