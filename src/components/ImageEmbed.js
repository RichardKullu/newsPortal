import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const ImageEmbed = (props) => {
  const img = props.url.data.map(item => {
      return {
        'original': 'http://localhost:1337' + item.attributes.url
    }
  })
  return (
    <div className="container">
        <ImageGallery items={img} onErrorImageURL="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg" />
    </div>
  )
}

export default ImageEmbed
