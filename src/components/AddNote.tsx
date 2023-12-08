import { addDoc, collection } from "@firebase/firestore";
import { db } from "../utils/db";

function AddNote(props: { userId: string, showId: number }) {

  async function addNote(noteValue: number) {
    const docRef = await addDoc(collection(db, "Notes"), {
      userId: props.userId,
      showId: props.showId,
      note: noteValue,
      date: new Date()
    });
  }

  return (
    <div className="add-note">
      <button type="button" onClick={() => addNote(1)}>1</button>
      <button type="button" onClick={() => addNote(2)}>2</button>
      <button type="button" onClick={() => addNote(3)}>3</button>
      <button type="button" onClick={() => addNote(4)}>4</button>
      <button type="button" onClick={() => addNote(5)}>5</button>
    </div>
  );
}

export default AddNote;
