const Gif = ({ id, onSelect }) => {
  const url = `https://media2.giphy.com/media/${id}/200w.webp`;

  return <img src={url} alt="Giphy square" onClick={onSelect}/>;
};

export default Gif;
