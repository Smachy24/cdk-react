import { getNotes } from "../utils/getNotes";
import React, { useEffect, useState } from "react";

function ContainerNote(props: { showId: number }) {
  const [average, setAverage] = useState<number>();

  useEffect(() => {
    async function fetchData() {
      try {
        const notes = await getNotes(props.showId);
        const sum = notes.reduce((acc, num) => acc + num, 0);
        const average = sum / notes.length;
        setAverage(average);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchData();
  }, [props.showId]);

  return (
    <div className="a">
      {average &&
      <div className="">
        {average.toFixed(1)}
      </div>
      }
      
    </div>
  );
}

export default ContainerNote;
