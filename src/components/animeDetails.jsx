/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {useLocation,useNavigate} from 'react-router-dom'


function Details (){
  const location=useLocation()
  const navigate=useNavigate()
  const data=location.state
  console.log(data)
    return(
        <div className="container-xxl">
            <h1>Details</h1>
            
        <div className="details">
          <img
            src={data.image_url}
            className="img details-img"
          />
          <div className="details-info">
            <h2>{data.title}</h2>
            <p>
             {data.synopsis}
            </p>
            <div className="details-icons">
              <div className='details-color' style={{background:"#f9aeae"}} >{data.score}
              <br/>
              <strong>Score</strong></div>
              <div className='details-color' style={{background:"#EDE3FF"}}>{data.episodes}
                     <br/><strong>Episodes</strong></div>
            <div className='details-color' style={{background:"#B7E9f7"}}>{data.rated}
                     <br/><strong>Rated</strong>
        </div><div className='details-color' style={{background:"#c8f7c8"}}>{data.members}
                     <br/><strong>Viewers</strong></div>
            </div>
            
          </div>
            
        </div>
        <button type="button" class="btn btn-dark" onClick={()=>navigate('/home')}>Go Back</button>
       
        </div>
    )

}
export default Details;