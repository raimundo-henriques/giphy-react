const Gif = ({ id }) => {
  const url = `https://media2.giphy.com/media/${id}/200w.webp`;

  return <img src={url} alt="Giphy square" />;
};

export default Gif;
