import React from 'react';


function Card({title, imageSource, url}) {
  return (
      <div className='card text-center bg-dark bg-gradient rounded-start rounded-3'>
        <div>
        <img src={imageSource} alt="" width="450"/> 
        </div>
      <div class="card-body border-0 rounded-3 p-3">
        <a className="container" href={url}>
          {title}
        </a>
      </div>
      </div>
  )
}

export default Card;
