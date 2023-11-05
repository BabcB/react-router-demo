import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/home">home</Link>
      <Link to="/post">Post</Link>
      <Link to="/post/headphone">headphone</Link>
      <Link to="/post/Car">Car</Link>
      <Link className="" to="/post/Mobile">
        Mobile
      </Link>
    </>
  );
};

export default Navbar;
