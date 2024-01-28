
// import React from 'react';


import FollowShowButton from "./FollowShowButton";

function FavoriteCard(props:{ image:string, title:string, userId:string, show:any }) {
  return (
    <div className="favorite-card flex-1 max-w-xs m-1 transform transition-transform duration-300 hover:scale-105">
      <div className="icon-container absolute top-2 right-2 flex items-center">
      </div>
      
      <img src= {`http://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} className=" w-full h-auto border rounded-t-md object-fill" />
      <h3 className="bg-black text-white text-center p-2 rounded-b-md">{props.title}</h3>
  
      <FollowShowButton userId={props.userId} show={props.show}/>
    </div>
  );
}

export default FavoriteCard;
