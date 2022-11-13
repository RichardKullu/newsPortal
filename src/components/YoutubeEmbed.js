import React from 'react';

export const YoutubeEmbed = (props) => {
    // https://www.youtube.com/embed/watch?v=Jyvffr3aCp0
  return (
    <div className='container-fluid position-relative'>
        <div className="mx-auto ps-5 pe-5">
            <iframe width="100%" height="500px" src={props.url} title={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    </div>
  )
}