import { useParams } from "react-router-dom";
function blogsDetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { postID } = useParams();
  return <div>blogsDetail : {postID}</div>;
}

export default blogsDetail;
