import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

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