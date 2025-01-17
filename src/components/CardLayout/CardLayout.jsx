import { Link, Outlet } from 'react-router-dom';

const CardLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="participants">Participants</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default CardLayout;
