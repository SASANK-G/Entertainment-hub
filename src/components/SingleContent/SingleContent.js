import { Badge } from '@material-ui/core';
import React from 'react';
import {img_300, unavailable} from "../../config/cofig";
import './SingleContent.css'
import '../ContentModel/ContentModel';


const SingleContent = ({
  id,poster,title,date,media_type,vote_average,
}) => {
  
  return (
    <ContentModel media_type={media_type} id={id} >
        <Badge badgeContent={vote_average} color={vote_average>6 ? "primary" : "secondary"} />

      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <div className="sub">
        <span className='subTitle' >
        {media_type ==='tv'?"TV Series" : "Movie"}
      </span>
      <span className='subTitle' >
        {date}
      </span>
      </div>
    </ContentModel>
  )
}

export default SingleContent
