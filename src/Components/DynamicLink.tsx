// import { useNavigate, useLocation } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
// import { useParams } from "react-router-dom";

const Post = () => {
  //   const { category } = useParams();
  const navigate = useNavigate();
  const data = useLocation();

  console.log(data.state);
  const handleClick = () => {
    navigate('/home', { state: { home: 'data' } });
  };

  return (
    <p>
      <div>Params on this page is category</div>
      <button onClick={handleClick}> Trigger Home </button>
    </p>
  );
};

export default Post;
