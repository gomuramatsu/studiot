import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import '../App.css';

const IMAGES =
    [{
            src: "/images/front_MG_0364.jpg",
            thumbnail: "/images/front_MG_0364_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/Hitomi_July_3.jpg",
            thumbnail: "/images/Hitomi_July_3_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/Hit_5.jpg",
            thumbnail: "/images/Hit_5_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/maki2.jpg",
            thumbnail: "/images/maki2_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/maki4.jpg",
            thumbnail: "/images/maki4_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/model_17.jpg",
            thumbnail: "/images/model_17_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/model_44.jpg",
            thumbnail: "/images/model_44_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/P6040232.jpg",
            thumbnail: "/images/P6040232_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/Picture_144.jpg",
            thumbnail: "/images/Picture_144_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/sora572A4436.jpg",
            thumbnail: "/images/sora572A4436_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/Sumi_f3.jpg",
            thumbnail: "/images/Sumi_f3_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/top_MG_0079.jpg",
            thumbnail: "/images/top_MG_0079_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/IMG_0818.jpg",
            thumbnail: "/images/IMG_0818_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/IMG_1084.jpg",
            thumbnail: "/images/IMG_1084_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/IMG_1104.jpg",
            thumbnail: "/images/IMG_1104_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/IMGP0075.jpg",
            thumbnail: "/images/IMGP0075_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/IMGP0232.jpg",
            thumbnail: "/images/IMGP0232_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/P1010284.jpg",
            thumbnail: "/images/P1010284_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: "/images/airwave/que.jpg",
            thumbnail: "/images/que_thumb.png",
            thumbnailWidth: 400,
            thumbnailHeight: 400
    }]

class GalleryPage extends Component {  

  render() {
    return (
      <div>
        <h3>Gallery</h3>
        <br />
        <Gallery images={IMAGES}/>
        <div className="under-gallery"></div>
      </div>
    );
  }

}

export default GalleryPage;