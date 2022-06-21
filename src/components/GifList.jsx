import giphy from 'giphy-api';
import Gif from './Gif';

const GifList = () => {
  giphy(process.env.REACT_APP_GIPHY_API).search({ q: 'pokemon', rating: 'g', limit: 10 }, (_err, res) => {
    console.log(res);
    return (
      <div className="gif-list">
        {res.data.map((gif) => {
          console.log(gif.embed_url)
          return (
            <h1>I am a gif!</h1>
            // <Gif
            //   key={gif.id}
            //   embed_url={gif.embed_url}
            // />
          );
        })}
      </div>
    );
  });
}

export default GifList;
