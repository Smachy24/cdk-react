import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "./db";

export async function getNotes(showId: number) {
  try {
    const notesCollection = collection(db, "Notes");
    const notesQuery = query(notesCollection, where("showId", "==", showId));
    const querySnapshot = await getDocs(notesQuery);

    const notesList: number[] = [];

    querySnapshot.forEach((note) => {
      const noteData = note.data();
      const noteValue = noteData.note;
      
      notesList.push(noteValue);

    });

    return notesList;

  } catch (error) {
    console.error("Erreur lors de la récupération des notes:", error);
    throw error;
  }
}
