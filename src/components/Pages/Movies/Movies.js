import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../SingleContent/SingleContent';
import CustomPagination from '../Pagination/CustomPagination';

export const Movies = () => {
  const [Page, setPage] = useState(1);
  const [content, setcontent] = useState([]);
  const [numOfPages, setnumOfPages] = useState();




  const fetchMovies =async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${Page}`);

    setcontent(data.results);
    setnumOfPages(data.total_pages);
  };

  useEffect(() => {
   fetchMovies();
   //eslint-disable-next-line
  }, [Page]);


  return (
    <div>
      <span className="pageTitle">Movies</span>
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