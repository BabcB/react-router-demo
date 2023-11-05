import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const data = useLocation();

  console.log(data.state);

  const handleClick = (isbool?: boolean) => () => {
    navigate(isbool ? '/about' : '/category', {
      state: { [isbool ? 'about' : 'category']: 'data' },
    });
  };

  return (
    <p>
      <div>Checking Home Component Working - Home</div>
      <button onClick={handleClick(true)}> Trigger About </button>
      <button onClick={handleClick()}> Trigger Dynamic </button>
    </p>
  );
};

export default Home;
