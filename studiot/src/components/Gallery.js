import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import '../App.css';
import front_MG_0364 from '../images/front_MG_0364.jpg';
import front_MG_0364_thumb from '../images/front_MG_0364_thumb.png';
import Hitomi_July_3 from '../images/Hitomi_July_3.JPG';
import Hitomi_July_3_thumb from '../images/Hitomi_July_3_thumb.png';
import Hit_5 from '../images/Hit_5.JPG';
import Hit_5_thumb from '../images/Hit_5_thumb.png';
import maki2 from '../images/maki2.jpg';
import maki2_thumb from '../images/maki2_thumb.png';
import maki4 from '../images/maki4.jpg';
import maki4_thumb from '../images/maki4_thumb.png';
import model_17 from '../images/model_17.jpg';
import model_17_thumb from '../images/model_17_thumb.png';
import model_44 from '../images/model_44.jpg';
import model_44_thumb from '../images/model_44_thumb.png';
import P6040232 from '../images/P6040232.JPG';
import P6040232_thumb from '../images/P6040232_thumb.png';
import Picture_144 from '../images/Picture_144.jpg';
import Picture_144_thumb from '../images/Picture_144_thumb.png';
import sora572A4436 from '../images/sora572A4436.jpg';
import sora572A4436_thumb from '../images/sora572A4436_thumb.png';
import rsz_1sumi_f3 from '../images/rsz_1sumi_f3.jpg';
import Sumi_f3_thumb from '../images/Sumi_f3_thumb.png';
import top_MG_0079 from '../images/top_MG_0079.jpg';
import top_MG_0079_thumb from '../images/top_MG_0079_thumb.png';
import IMG_0818 from '../images/airwave/IMG_0818.JPG';
import IMG_0818_thumb from '../images/IMG_0818_thumb.png';
import IMG_1084 from '../images/airwave/IMG_1084.JPG';
import IMG_1084_thumb from '../images/IMG_1084_thumb.png';
import IMG_1104 from '../images/airwave/IMG_1104.JPG';
import IMG_1104_thumb from '../images/IMG_1104_thumb.png';
import IMGP0075 from '../images/airwave/IMGP0075.jpg';
import IMGP0075_thumb from '../images/IMGP0075_thumb.png';
import IMGP0232 from '../images/airwave/IMGP0232.JPG';
import IMGP0232_thumb from '../images/IMGP0232_thumb.png';
import P1010284 from '../images/airwave/P1010284.JPG';
import P1010284_thumb from '../images/P1010284_thumb.png';
import que from '../images/airwave/que.jpg';
import que_thumb from '../images/que_thumb.png';


const IMAGES =
    [{
            src: front_MG_0364,
            thumbnail: front_MG_0364_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: Hitomi_July_3,
            thumbnail: Hitomi_July_3_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: Hit_5,
            thumbnail: Hit_5_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: maki2,
            thumbnail: maki2_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: maki4,
            thumbnail: maki4_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: model_17,
            thumbnail: model_17_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: model_44,
            thumbnail: model_44_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: P6040232,
            thumbnail: P6040232_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: Picture_144,
            thumbnail: Picture_144_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: sora572A4436,
            thumbnail: sora572A4436_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: rsz_1sumi_f3,
            thumbnail: Sumi_f3_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: top_MG_0079,
            thumbnail: top_MG_0079_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: IMG_0818,
            thumbnail: IMG_0818_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: IMG_1084,
            thumbnail: IMG_1084_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: IMG_1104,
            thumbnail: IMG_1104_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: IMGP0075,
            thumbnail: IMGP0075_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: IMGP0232,
            thumbnail: IMGP0232_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: P1010284,
            thumbnail: P1010284_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    },
    {
            src: que,
            thumbnail: que_thumb,
            thumbnailWidth: 400,
            thumbnailHeight: 400
    }]

class GalleryPage extends Component {  
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        { this.props.getLanguage() === "en" ? <h3>Gallery</h3> : <h3>スタイルギャラリー</h3> }
        <br />
        <Gallery images={IMAGES}/>
        <div className="under-gallery"></div>
      </div>
    );
  }

}

export default GalleryPage;