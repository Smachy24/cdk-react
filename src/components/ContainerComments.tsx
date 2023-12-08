import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import User from "../models/user.model";
import { collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../utils/db";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

function ContainerComments(props: {showId:number}){

  const navigate = useNavigate()
  const auth = getAuth()

  const [userInfos, setUserInfos] = useState<User | null>(null);
  const [userId, setUserId] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const updateComments = async () => {
    await getComments();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/");
      } else {
        if (user.email) {
          const userInfo = await getUserInfos(user.email);
          setUserInfos(userInfo);
          getComments();
        }
      }
    });

    return () => unsubscribe(); // Cleanup on unmount or component re-render
  }, [auth, navigate]);

  async function getUserInfos(email:string){

    const table = collection(db, "Users");
    const q = query(table, where("email", "==", email))
    const querySnapshot = await getDocs(q);
    setUserId(querySnapshot.docs[0].id)
    const user = querySnapshot.docs[0].data() as User;
    return user;
    }

    async function getUserComment(userId: string){
      const commentUser = await getDoc(doc(db, "Users", userId ))
      const commentUserInfos = {
        firstName: commentUser.data()?.firstName, 
        lastName: commentUser.data()?.lastName, 
      }
      return commentUserInfos;
    }

  async function getComments() {
  const table = collection(db, "Comments");
  const q = query(table, where("showId", "==", props.showId));
  const querySnapshot = await getDocs(q);

  const commentsData: any[] = await Promise.all(querySnapshot.docs.map(async (doc) => {
    const data = doc.data();

    const commentUserInfos = await getUserComment(data.userId);

    return {
      firstName: commentUserInfos.firstName,
      lastName: commentUserInfos.lastName,
      showId: data.showId,
      comment: data.comment,
      date: data.date.toDate(), // Convertir le timestamp en objet Date
    };
  }));

  setComments(commentsData);
}

    
 

    return (
      <div className="page">
        
        <AddComment userId={userId} showId={props.showId} onCommentAdded={updateComments} />

        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            firstName={comment.firstName}
            lastName={comment.lastName}
            comment={comment.comment}
            date={comment.date}
          />
        ))}
      </div>
    );
}

export default ContainerComments;