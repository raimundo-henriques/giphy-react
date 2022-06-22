import React, { useEffect } from 'react';
import giphy from 'giphy-api';
import Gif from './Gif';

const GifList = () => {


  giphy(process.env.REACT_APP_GIPHY_API).search({ q: 'pokemon', rating: 'g', limit: 10 }, (_err, res) => {
    console.log(res);
    res.data.map((gif) => {
      gifs.push(gif);
    });

    return
  });

}

export default GifList;
