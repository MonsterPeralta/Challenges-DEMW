import React from 'react';

export const GifItem = ({ title, url }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifItem;