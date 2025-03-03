import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        <Link to={'/contact'}>Contact</Link>
      </p>
      <p>
        <Link to={'/about'}>About</Link>
      </p>
      <p>
        <Link to={'/products'}>Products</Link>
      </p>
      <p>
        <Link to={'/login'}>Login</Link>
      </p>
      <p>
        <Link to={'/dashboard'}>Dashboard</Link>
      </p>
    </div>
  );
};
export default Home;
