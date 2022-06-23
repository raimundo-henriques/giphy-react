import Gif from './Gif'

const GifList = ({onSelect, data}) => {

  data.map((gif) => {
            return (
              <button key={gif.id} className="button" onClick={() => onSelect(gif.id)}>
                <Gif
                  id={gif.id}
                  />;
              </button>
            )
          })
};

export default GifList;
