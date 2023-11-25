import { useNavigate, useLocation } from 'react-router-dom';
// import { useParams } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const data = useLocation();
  //   const { category } = useParams();

  console.log(data.state);
  const handleClick = () => {
    navigate(-2, { state: { home: 'data' } });
  };

  return (
    <p>
      <div>Params on this page is category</div>
      <button onClick={handleClick}> Trigger Home </button>
    </p>
  );
};

export default Post;
