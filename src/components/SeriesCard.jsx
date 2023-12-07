// import React from 'react';

function SeriesCard ({ image, alt }) {
  return (
    <div className="card mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={alt} className="w-full h-auto rounded-md" />
    </div>
  );
};

export default SeriesCard;
