import { useNavigate, useLocation } from 'react-router';

const About = () => {
  const navigate = useNavigate();
  const data = useLocation();

  console.log(data.state);

  const handleClick = () => {
    navigate('/home', { state: { home: 'data' } });
  };

  return (
    <p>
      <div>Checking About Component Working - About</div>
      <button onClick={handleClick}> Trigger Home </button>
    </p>
  );
};

export default About;
