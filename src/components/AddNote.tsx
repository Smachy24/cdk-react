import { addDoc, collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "../utils/db";


function AddNote(props: { userId: string, showId: number }) {

  async function checkIfUserHasVoted() {
    const table = collection(db, "Notes");
    const q = query(table, where("userId", "==", props.userId), where("showId", "==", props.showId));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
}


  async function addNote(noteValue: number) {
    const userHasVoted = await checkIfUserHasVoted()
    if(!userHasVoted){
      const docRef = await addDoc(collection(db, "Notes"), {
        userId: props.userId,
        showId: props.showId,
        note: noteValue,
        date: new Date()
      });
    }
   
  }

  return (
    <div className="add-note flex  gap-5">
      <button type="button" className="bg-red-800 text-white border-none w-10 p-2 mt-2 cursor-pointer rounded-md text-sm text-center" onClick={() => addNote(1)}>1</button>
      <button type="button"className="bg-red-800 text-white border-none w-10 p-2 mt-2 cursor-pointer rounded-md text-sm text-center" onClick={() => addNote(2)}>2</button>
      <button type="button" className="bg-red-800 text-white border-none w-10 p-2 mt-2 cursor-pointer rounded-md text-sm text-center" onClick={() => addNote(3)}>3</button>
      <button type="button" className="bg-red-800 text-white border-none w-10 p-2 mt-2 cursor-pointer rounded-md text-sm text-center" onClick={() => addNote(4)}>4</button>
      <button type="button" className="bg-red-800 text-white border-none w-10 p-2 mt-2 cursor-pointer rounded-md text-sm text-center" onClick={() => addNote(5)}>5</button>
    </div>
  );
}

export default AddNote;
