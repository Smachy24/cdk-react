function CommentCard(props: {firstName: string, lastName: string, comment: string, date: Date}){  

  return(
    <div className="comment">
        {props.firstName}
        {props.lastName}
        {props.comment}
        {props.date.toString()}
    </div>
  );
}

export default CommentCard;