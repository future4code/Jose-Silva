import React from 'react';

const CardVideo = (props) =>{
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
      }

    return(
        
        <div class="card-video" onClick={reproduzVideo}>
        <video controls class="video">
          <source       src={props.url}
          type="video/mp4"/>
        </video>
        <a>{props.titulo1} </a>
      </div>

    )
}

export default CardVideo;