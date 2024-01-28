import Show from "../models/show.model";
import { db } from "../utils/db";
import { DocumentReference, doc , getDoc, updateDoc } from "@firebase/firestore";


function FollowShowButton(props: {userId: string, show: Show}) {

  async function addFollowedShow() {
    
    const userRef: DocumentReference = doc(db, 'Users', props.userId);
    const userDoc = await getDoc(userRef);
    
    const followedShows: Show[] = userDoc.data()?.followedShows || []; // Initialize as an empty array if not present
    console.log(followedShows);
    // Check if the show is not already in followedShows
    if (!followedShows.some((show) => show.id === props.show.id)) {
      followedShows.push(props.show);
      await updateDoc(userRef, { followedShows: followedShows });
      
    } else {
      const updatedFollowedShows = followedShows.filter((show) => show.id !== props.show.id);
      await updateDoc(userRef, { followedShows: updatedFollowedShows });
    }
  }

  return (
    <div className="">
      <button className="unfollow-btn bg-red-800 text-white border-none p-2 mt-2 cursor-pointer rounded-md text-sm" onClick={addFollowedShow}> Ne plus suivre</button>
    </div>
  );
}

export default FollowShowButton;
