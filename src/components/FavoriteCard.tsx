
// import React from 'react';

function FavoriteCard(props:{ image:string, title:string }) {
  return (
    <div className="favorite-card flex-1 max-w-xs m-1 transform transition-transform duration-300 hover:scale-105">
      <div className="icon-container absolute top-2 right-2 flex items-center">
        <i className="fas fa-heart bg-white text-red-800 text-2xl mr-2 cursor-pointer"></i>
      </div>
      <img src={props.image} alt={props.title} className="w-full h-auto border rounded-t-md" />
      <h3 className="bg-black text-white text-center p-2 rounded-b-md">{props.title}</h3>
      <button className="unfollow-btn bg-red-800 text-white border-none p-2 mt-2 cursor-pointer rounded-md text-sm">
        Ne plus suivre
      </button>
    </div>
  );
}

export default FavoriteCard;
