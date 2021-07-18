import React from 'react';

const Gif = ({
  id,
  selectGif = () => {}
}) => {
  if (!id) {
    return null;
  }

  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <img
      alt="Giphy"
      role="presentation"
      src={src}
      className="gif"
      onClick={() => selectGif(id)}
    />
  );
};

export default Gif;
