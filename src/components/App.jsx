import React, {useState, useEffect} from 'react';
import giphy from 'giphy-api';
import './App.css';
import Gif from './Gif';
import Search from './Search';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedId, setSelected] = useState();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    giphy(process.env.REACT_APP_GIPHY_API).search(
      {
        q: {searchText},
        rating: 'g',
        limit: 10,
      },
      (_err, res) => {
        setData(res.data);
      },
    );
  }, []);

  const handleSelect = ({id}) => {
    setSelected(id);
  }

  return (
    <div className="app">
      <div className="left-scene">
        <input className="form-search" />
        <div className="selected-gif">
          <Gif id={selectedId}/>
        </div>
      </div>

      <div className="right-scene">
        <div className="gif-list">
          {data.map((gif) => {
            console.log(gif);
            return <Gif
                    key={gif.id}
                    id={gif.id}
                    onSelect={() => handleSelect(gif)}
                    />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
