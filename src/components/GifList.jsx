// import { useEffect, useState } from 'react';
// import giphy from 'giphy-api';
// import Gif from './Gif';

// const GifList = ({ searchText }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     giphy(process.env.REACT_APP_GIPHY_API).search(
//       {
//         q: searchText,
//         rating: 'g',
//         limit: 10,
//       },
//       (_err, res) => {
//         setData(res.data);
//       },
//     );
//   }, []);

//   return (
//     <div className="gif-list">
//       {data.map((gif) => {
//         console.log(gif);
//         return <Gif key={gif.id} id={gif.id}/>;
//       })}
//     </div>
//   );
// };

// export default GifList;
