import FollowShowButton from "../components/FollowShowButton";
import Show from "../models/show.model";


function TestFollow() {

  const show: Show = {
    id: 94722,
    name: "Tagesschau",
    poster: "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    description: "blablabla",
    note: 0
  }

  return (
    <div className="">
      <FollowShowButton userId="KkYfPC09VuYATlU4jmCd" show={show}/>
    </div>
  );
}

export default TestFollow;
