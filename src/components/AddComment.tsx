import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../utils/db";

function AddComment(props: { userId: string, showId: number, onCommentAdded: () => void; }) {

  const [comment, setComment] = useState("");

  async function addCommnent() {

    const docRef = await addDoc(collection(db, "Comments"), {
      userId: props.userId,
      showId: props.showId,
      comment: comment,
      date: new Date()
    });

    // Réinitialiser l'input après avoir ajouté le commentaire
    setComment("");

    props.onCommentAdded();

  }

  return (
    <div className="add-comment">
      <input type="text" name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="button" onClick={addCommnent}>Ajouter un commentaire</button>
    </div>
  );

}

export default AddComment;
